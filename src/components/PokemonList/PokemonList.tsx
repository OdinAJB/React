import React from "react";
import { useGetPokemonList } from "../../hooks/useGetPokemonList";
import { PokemonCard } from "../PokemonCard/PokenmonCard";
import { Grid } from "../shared/Grid/Grid";

const PokemonList: React.FC = () => {
  const { pokemonList, goToNextPage, goToPreviouspage } = useGetPokemonList();

  return (
    <Grid goToNextPage={goToNextPage} goToPreviousPage={goToPreviouspage}>
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon?.name} pokemon={pokemon}/>
      ))}
    </Grid>
  );
};

export default PokemonList;
