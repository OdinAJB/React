import React from "react";
import NavigationBar from "./NavigationBar";
import { renderWithProviders } from "../../testUtils/renderWithProviders";


describe("NavigationBar", () => {
  it("should render whithout error", () => {
    renderWithProviders(<NavigationBar />);
  });

  it("should renders the logo", () => {
    const { getByAltText } = renderWithProviders(<NavigationBar />);
    expect(getByAltText("Poke Logo")).toBeInTheDocument();
  });

  it("should renders the navigation links", () =>{
    const{getByText}= renderWithProviders(<NavigationBar/>)
    expect(getByText("Pokedex")).toBeInTheDocument();
    expect(getByText("Favorites")).toBeInTheDocument();
  });

  it("should render the search button", () => {
    const {getByRole}= renderWithProviders(<NavigationBar/>)
    expect(getByRole("button")).toBeInTheDocument();
  })
});
