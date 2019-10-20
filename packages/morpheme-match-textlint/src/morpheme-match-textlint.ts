import { createMatcher as createMathAll, ExpectedDictionary } from "morpheme-match-all";

type Token = import("morpheme-match").Token;

type ExpectedToken = import("morpheme-match").ExpectedToken;
export type ExpectedTokenWithCapture = ExpectedToken & {
    _capture?: string
}
/**
 * Replace all text
 */
const replaceAll = (text: string, from: string, to: string) => {
    return text.split(from).join(to);
};
/**
 * Replace text with tokens
 * @param text
 * @param expectedTokens
 * @param actualTokens
 * @returns {*}
 */
const replaceWithCaptureTokens = (text: string, expectedTokens: ExpectedTokenWithCapture[], actualTokens: Token[]) => {
    let resultText = text;
    expectedTokens.forEach((token, index) => {
        // when the node has not `_capture`, does not replace it
        if (!token._capture) {
            return;
        }
        const actualToken = actualTokens[index];
        resultText = replaceAll(resultText, token._capture, actualToken.surface_form);
    });
    return resultText;
};

const _createMessage = <T extends ExpectedTokenWithCapture>(
    {message, matcherTokens, actualTokens}:
        {
            message: string,
            dict: ExpectedDictionary<T>,
            matcherTokens: ExpectedTokenWithCapture[],
            actualTokens: Token[]
        }) => {
    if (!message) {
        throw new Error("message should defined");
    }
    return replaceWithCaptureTokens(message, matcherTokens, actualTokens);
};

const _createExpected = <T extends ExpectedTokenWithCapture>({expected, matcherTokens, actualTokens}:
                                                                 {
                                                                     expected?: string,
                                                                     dict: ExpectedDictionary<T>,
                                                                     matcherTokens: ExpectedTokenWithCapture[],
                                                                     actualTokens: Token[]
                                                                 }) => {
    if (!expected) {
        return null;
    }
    return replaceWithCaptureTokens(expected, matcherTokens, actualTokens);
};

export type ReporterOptions<T extends ExpectedTokenWithCapture, Dictionary extends ExpectedDictionary<T>> = {
    dictionaries: Dictionary[]
    tokenize: (text: string) => Promise<Token[]>;
    createMessage?: ({message, matcherTokens, actualTokens}: {
        message: string,
        dict: ExpectedDictionary<T>,
        matcherTokens: ExpectedTokenWithCapture[],
        actualTokens: Token[]
    }) => string;
    createExpected?: ({expected, matcherTokens, actualTokens}: {
        expected?: string,
        dict: ExpectedDictionary<T>,
        matcherTokens: ExpectedTokenWithCapture[],
        actualTokens: Token[]
    }) => string;
}

export type MatchTextlintResult<T extends ExpectedTokenWithCapture> = {
    message: string;
    expected: string | null;
    dict: ExpectedDictionary<T>;
    index: number;
    range: [number, number];
};

// FIXME: Want to support generics
// But some thing wrong
/**
 * create textlint matcher
 * @param options
 */
export const createTextlintMatcher = (options: ReporterOptions<ExpectedTokenWithCapture, ExpectedDictionary<ExpectedTokenWithCapture>>) => {
    const matchAll = createMathAll(options.dictionaries);
    const tokenize = options.tokenize;
    const createMessage = options.createMessage ? options.createMessage : _createMessage;
    const createExpected = options.createExpected ? options.createExpected : _createExpected;
    return (text: string): Promise<MatchTextlintResult<ExpectedTokenWithCapture>[]> => {
        return tokenize(text).then(currentTokens => {
            const matchResults = matchAll(currentTokens);
            return matchResults.map(matchResult => {
                const firstToken = matchResult.tokens[0];
                const lastToken = matchResult.tokens[matchResult.tokens.length - 1];
                const firstWordIndex = Math.max(firstToken.word_position - 1, 0);
                const lastWorkIndex = Math.max(lastToken.word_position - 1, 0);
                // replace $1
                const message = createMessage({
                    dict: matchResult.dict,
                    message: matchResult.dict.message,
                    matcherTokens: matchResult.dict.tokens,
                    actualTokens: matchResult.tokens
                });
                const expected = createExpected({
                    dict: matchResult.dict,
                    expected: matchResult.dict.expected,
                    matcherTokens: matchResult.dict.tokens,
                    actualTokens: matchResult.tokens
                });
                return {
                    message,
                    expected,
                    dict: matchResult.dict,
                    index: firstWordIndex,
                    range: [
                        firstWordIndex, lastWorkIndex + lastToken.surface_form.length
                    ]
                };
            });
        });
    };
};
