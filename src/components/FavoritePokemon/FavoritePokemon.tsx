import React from "react";
import { useFavoriteStore } from "../../store/useFavoriteStore"
import { PokemonCard } from "../PokemonCard/PokenmonCard";
import { Grid } from "../shared/Grid/Grid";


export const FavotirePokemon = () => {
    const favoritesIds = useFavoriteStore((state)=> state.favorites);

    return(
        <Grid>
            {favoritesIds.map((favoriteId) => <PokemonCard key={favoriteId} pokemonId={Number(favoriteId)}/>)}
        </Grid>
    )
};