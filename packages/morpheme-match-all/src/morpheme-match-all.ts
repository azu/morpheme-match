// MIT © 2016 azu
"use strict";
import { ExpectedDictionary, Expector } from "./Expector";
import { ExpectedToken, Token } from "morpheme-match";

export type ExpectedDictionaries<T extends ExpectedToken, Dictionary extends ExpectedDictionary<T>> = Dictionary[]
export { ExpectedDictionary };
export type MatchResult<T extends ExpectedToken, Dictionary extends ExpectedDictionary<T>> = {
    tokens: Token[];
    index: number;
    skipped: boolean[];
    dict: Dictionary & ExpectedDictionary<T>;
};

/**
 * Create Matcher function for match all multiple tokens
 */
export function createMatcher<T extends Partial<ExpectedToken>,
    Dictionary extends Partial<ExpectedDictionary<T>>>(dictionaries: ExpectedDictionaries<T & ExpectedToken, Dictionary & ExpectedDictionary<T>>)
    : (tokens: Token[]) => MatchResult<T & ExpectedToken, Dictionary & ExpectedDictionary<T>>[] {
    const expectors = dictionaries.map(dict => {
        return new Expector<T & ExpectedToken, Dictionary & ExpectedDictionary<T>>(dict);
    });
    /**
     * match `actualTokens` with `dictionaries`
     * @param {Object[]} actualTokens
     * @returns {MatchResult[]}
     * @function morphemeMatchAll
     * @public
     */
    return function morphemeMatchAll(actualTokens: Token[]) {
        const matchResults: MatchResult<T & ExpectedToken, Dictionary & ExpectedDictionary<T>>[] = [];
        actualTokens.forEach(actualToken => {
            expectors.forEach(expector => {
                const {match, tokens, skipped} = expector.match(actualToken);
                if (!match) {
                    return;
                }
                /**
                 * the index of first match token
                 * @type {number}
                 */
                const index = actualTokens.indexOf(tokens[0]);
                matchResults.push({
                    tokens,
                    index,
                    skipped,
                    dict: expector.dict
                });
            });
        });
        return matchResults;
    };
}
