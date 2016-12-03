// MIT © 2016 azu
"use strict";
const assert = require("assert");
import Expector from "./Expector";
/**
 * @typedef {Object} ExpectedDictionary
 * @property {Object[]} tokens kuromoji's token list
 * @property {string} message
 * @property {string] expected
 * @public
 */
/**
 * @typedef {Object} MatchResult
 * @property {Object[]} tokens match tokens,
 * @property {number} index index of first match token
 * @property {ExpectedDictionary[]} expected dictionary defined by you
 * @public
 */
/**
 * @param {ExpectedDictionary[]} dictionaries
 * @return {morphemeMatchAll}
 * @public
 */
function createMatcher(dictionaries) {
    const expectors = dictionaries.map(dict => {
        return new Expector(dict);
    });
    /**
     * match `actualTokens` with `dictionaries`
     * @param {Object[]} actualTokens
     * @returns {MatchResult[]}
     * @function morphemeMatchAll
     * @public
     */
    return function morphemeMatchAll(actualTokens) {
        /**
         * @type {MatchResult[]}
         */
        const matchResults = [];
        actualTokens.forEach(actualToken => {
            expectors.forEach(expector => {
                const {match, tokens} = expector.match(actualToken);
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
                    expected: expector.dict
                });
            });
        });
        return matchResults;
    };
}
module.exports = createMatcher;
