import React from "react";
import { PokemonInfo } from "./PokemonInfo";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { renderWithProviders } from "../../testUtils/renderWithProviders";

jest.mock("../../hooks/useGetPokemon", () => ({
    useGetPokemon: jest.fn(),
}));

describe("PokemonInfo", () => {
    beforeEach(()=>{
        (useGetPokemon as jest.Mock).mockReturnValue({
            pokemonData: {
                name: "Pikachu",
                sprites: {front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"},
                weight: 10,
                height: 10,
                types: [{type: {name: "electric"}}],
            }
        });
    });

    afterEach(()=> jest.clearAllMocks());

    it("should render pokemon name", () =>{
        const {getByText} = renderWithProviders(<PokemonInfo/>);
        expect(getByText("Pikachu")).toBeInTheDocument();
    });

    // it("should render pokemon image", () =>{
    //     const{getByAltText} = renderWithProviders(<PokemonInfo/>)
    //     expect(getByAltText("Pikachu")).toBeInTheDocument();
    // });

    it("should render pokemon weight", () =>{
        const {getByText} = renderWithProviders(<PokemonInfo/>);
        expect(getByText("Weight: 1.0 Kg")).toBeInTheDocument();
    });

    it("should render pokemon height", () =>{
        const {getByText} = renderWithProviders(<PokemonInfo/>);
        expect(getByText("Height: 1.00 M")).toBeInTheDocument();
    });

    

});



