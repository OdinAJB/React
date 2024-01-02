import React from "react";
import { useParams } from "react-router";
import useGetPokemonListByType from "../../hooks/useGetPokemonListByType";
import { Grid } from "../shared/Grid/Grid";
import { PokemonCard } from "../PokemonCard/PokenmonCard";

export const PokemonTypeList = () => {
  const { typeName } = useParams();
  const { pokemonList } = useGetPokemonListByType(typeName ?? "");

  return (
      
    <><h1 className="text-center text-lg ">Pokemons by type {typeName}</h1>
    <Grid>
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon?.pokemon.name} pokemon={pokemon?.pokemon} />
      ))}
    </Grid></>
  );
};
