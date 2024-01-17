import { convertInchesToCm } from "../convertInchesToCm";

const testData=[
    [1, "0.10"],
    [2, "0.20"],
    [10, "1.00"],
    [100, "10.00"],
]

describe("convertInchesToCm", () =>  {
    it.each(testData)("should convert %s inches to %s cm", (inches, expected) =>{
        expect(convertInchesToCm(Number(inches))).toBe(expected);
    });
})