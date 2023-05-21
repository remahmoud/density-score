import densityScore from "../src";

describe("Density Score", () => {
    // test cases
    // test if it returns null if text is invalid
    test("should throw error if text is not a string", () => {
        expect(() => densityScore(123 as any)).toThrow("Invalid text");
    });

    // test if it returns null if text is empty
    test("should return null if text is empty", () => {
        // @ts-ignore
        expect(() => densityScore()).toThrow("Invalid text");
    });

    test("should return null if no tokens", () => {
        expect(densityScore("or or and this")).toBeNull();
    });

    // test if it returns correct word density
    test("should return correct word density", () => {
        const text =
            "Hello world, this is a test. This is a test, hello world.";
        const wordDensity = densityScore(text);
        expect(wordDensity).toEqual([
            { keyword: "hello", frequency: 2, density: 2 / 6 },
            { keyword: "world", frequency: 2, density: 2 / 6 },
            { keyword: "test", frequency: 2, density: 2 / 6 },
        ]);
    });

    // test if it returns correct word density with stop words
    test("should return correct word density with stop words", () => {
        const text =
            "Hello world, this is a test. This is a test, hello world.";

        const wordsCount = text
            .toLowerCase()
            .trim()
            .split(/\W+/)
            .filter((word) => word.length > 0).length;
        const density = 2 / wordsCount;
        const wordDensity = densityScore(text, false);
        expect(wordDensity).toEqual([
            { keyword: "hello", frequency: 2, density },
            { keyword: "world", frequency: 2, density },
            { keyword: "this", frequency: 2, density },
            { keyword: "is", frequency: 2, density },
            { keyword: "a", frequency: 2, density },
            { keyword: "test", frequency: 2, density },
        ]);
    });
});
