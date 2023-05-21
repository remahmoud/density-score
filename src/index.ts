import { WordTokenizer } from "natural";
import { removeStopwords } from "stopword";

// IWord interface
interface IWord {
    [key: string]: number;
}

// IwordDensity interface
export interface IWordDensity {
    word: string;
    frequency: number;
    density: number;
}

/**
 *
 * @param text {String} text to get keyword density
 * @param ignoreStopWords {Boolean} value to ignore stop words
 * @returns {Array} array of word density
 */
function densityScore(
    text: string,
    ignoreStopWords: boolean = true
): IWordDensity[] | null {
    if (!text || typeof text !== "string") {
        throw new Error("Invalid text");
    }
    // remove all non-alphanumeric characters
    let words = text.toLowerCase().trim().split(/\W+/);

    // remove all stop words
    if (ignoreStopWords) {
        words = removeStopwords(words);
    }

    // remove all empty strings
    words = words.filter((word) => word.length > 0);

    // words count
    const wordsCount = words.length;

    // tokenize words
    const tokenizer = new WordTokenizer();
    const tokens = tokenizer.tokenize(words.join(" "));

    // return null if no tokens
    if (!tokens || tokens.length === 0) return null;

    // frequency of words
    const wordFrequency: IWord = {};

    // count frequency of words
    tokens.forEach((token) => {
        if (wordFrequency[token]) {
            wordFrequency[token] += 1;
        } else {
            wordFrequency[token] = 1;
        }
    });

    // sort words by frequency
    const sortedWords = Object.entries(wordFrequency).sort(
        (a, b) => b[1] - a[1]
    );

    // word density
    const wordDensity = sortedWords.map((word) => {
        return {
            word: word[0],
            frequency: word[1],
            density: word[1] / wordsCount,
        };
    });
    return wordDensity;
}

export default densityScore;
