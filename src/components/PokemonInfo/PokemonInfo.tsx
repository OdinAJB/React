import React, { useMemo } from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { useParams } from "react-router";
import { getMainPokemonType } from "../../utils/getMainPokemonType";
import { capitalizeFirstLetter } from "../../utils/capitalizerFisrtLetter";
import { convertLbsToKg } from "../../utils/convertLbsTokg";
import { convertInchesToCm } from "../../utils/convertInchesToCm";
import { PokemonSprites } from "../PokemonSprites/PokemonSprites";

export const PokemonInfo = () => {
  const { pokemonName } = useParams();
  const { pokemonData } = useGetPokemon(pokemonName);
  const mainType = useMemo(
    () => pokemonData && getMainPokemonType(pokemonData),
    [pokemonData]
  );
  return (
    <div className="flex flex-row justify-between shadow-lg bg-gray-100 rounded-lg">
      <div
        className={`${mainType}-background w-72 h-72 rounded-l-ñg items-center`}
      >
        <img
          src={pokemonData?.sprites?.front_default}
          alt={pokemonData?.name ?? ""}
          className="mx-auto w-72 h-72"
        />
      </div>
      <div className="flex flex-col grow p-5 gap-3">
        <h1 className="text 3xl">{capitalizeFirstLetter(pokemonData?.name??"")}</h1>
        <span>{`Weight: ${convertLbsToKg(pokemonData?.weight ?? 0)} Kg`}</span>
        <span>{`Height: ${convertInchesToCm(pokemonData?.height ?? 0)} Cm`}</span>
        <PokemonSprites pokemonName={pokemonName}/>
      </div>
    </div>
  );
};
