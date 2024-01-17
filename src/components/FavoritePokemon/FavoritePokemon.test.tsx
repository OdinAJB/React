import React from "react";
import { FavotirePokemon } from "./FavoritePokemon";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { useFavoriteStore } from "../../store/useFavoriteStore";

jest.mock("../../store/useFavoriteStore", () => ({
  useFavoriteStore: jest.fn(),
}));

describe("FavoritePokemon", () => {
  afterEach(() => jest.clearAllMocks);

  it("should render PokemonCard for each Favorite Pokemon", () => {
    const favoriteIds = ["1", "2", "3"];
    (useFavoriteStore as unknown as jest.Mock).mockReturnValue(favoriteIds);

    const { getAllByTestId } = renderWithProviders(<FavotirePokemon />);

    const pokemonCard = getAllByTestId("pokemon-card");
    expect(pokemonCard).toHaveLength(favoriteIds.length);
  });

  it("should not render PokemonCard if there are no Favorite Pokemon", () => {
    const favoriteIds: string[] = [];
    (useFavoriteStore as unknown as jest.Mock).mockReturnValue(favoriteIds);

    const { queryAllByTestId } = renderWithProviders(<FavotirePokemon />);

    const pokemonCard = queryAllByTestId("pokemon-card");
    expect(pokemonCard).toHaveLength(favoriteIds.length);
  });
});
