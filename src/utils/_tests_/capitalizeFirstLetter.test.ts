import { capitalizeFirstLetter } from "../capitalizerFisrtLetter";

describe("capitalizeFirstLetter", ()=> {
    it("should capitalize first letter", () =>{
        expect(capitalizeFirstLetter("hello")).toBe("Hello");
    });
});