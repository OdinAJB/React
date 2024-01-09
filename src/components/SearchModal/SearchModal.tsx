import React, { useState } from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import Modal from "react-modal";
import { PokemonCard } from "../PokemonCard/PokenmonCard";
import { useSearchStore } from "../../store/useSearchStore";

const SearchModal: React.FC = () => {
  const [isOpen, closeModal] = useSearchStore((state) => [
    state.isOpen,
    state.closeModal,
  ]);
  const [filter, setFilter] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const { pokemonData } = useGetPokemon(currentSearch);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(event.target.value);
  const onClickSearch = () => setCurrentSearch(filter.toLowerCase());
  const handleCloseModal = () => {
    setFilter("");
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className={
        "w-6/12 h4/16 bg-white mx-auto p-t mt-5 flex flex-col gap-5 items-center shadow-lg rounded-lg"
      }
    >
      <h5 className="italic">Search a pokemon</h5>
      <input
        type="text"
        value={filter}
        onChange={handleInputChange}
        className="border-2 p-2"
      />
      <button onClick={onClickSearch} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
          focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
          me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 
          dark:border-gray-700">
        Search
      </button>
      {pokemonData?.id && <PokemonCard pokemonId={pokemonData.id} />}
    </Modal>
  );
};

export default SearchModal;
