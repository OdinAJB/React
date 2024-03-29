import { capitalizeFirstLetter } from "../capitalizerFisrtLetter";

describe("capitalizeFirstLetter", () => {
  it("should capitalize first letter", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
  });

  it("should return empty string if empty string passed", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("should return the same string if the first letter is already capitalized", () => {
    expect(capitalizeFirstLetter("Hello")).toBe("Hello");
  });

  it("should capitalize first letter of a sentence", () => {
    expect(capitalizeFirstLetter("hello world")).toBe("Hello world");
  });
});
