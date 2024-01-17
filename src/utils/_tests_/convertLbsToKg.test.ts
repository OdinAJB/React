import { convertLbsToKg } from "../convertLbsTokg";

const testData=[
    [1, "0.1"],
    [2, "0.2"],
    [10, "1.0"],
    [100, "10.0"],
]

describe("convertLbsToKg", () =>  {
    it.each(testData)("should convert %s lbs to %s kg", (inches, expected) =>{
        expect(convertLbsToKg(Number(inches))).toBe(expected);
    });
})