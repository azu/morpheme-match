// MIT © 2016 azu
"use strict";
const createTokenMatcher = require("morpheme-match");
const assert = require("assert");
export default class Expector {
    /**
     * @param {ExpectedDictionary} dict
     */
    constructor(dict) {
        assert(Array.isArray(dict["tokens"]), `"tokens" property is required. ${dict}`);
        this.matcher = createTokenMatcher(dict["tokens"]);
        this.dict = dict;
    }

    /**
     * match and return results
     * @param {Object} actualToken
     * @returns {{match: boolean, tokens: Object[]}}
     */
    match(actualToken) {
        return this.matcher(actualToken);
    }
}