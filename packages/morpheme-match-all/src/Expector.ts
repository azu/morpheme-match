// MIT © 2016 azu
"use strict";
import * as assert from "assert";
import { createTokenMatcher, Token, ExpectedToken, MatchResult } from "morpheme-match";

export type ExpectedDictionary = {
    tokens: ExpectedToken[];
    message: string;
    expected?: string;
};

export class Expector {
    private matcher: any;

    constructor(public dict: ExpectedDictionary) {
        assert.ok(Array.isArray(dict["tokens"]), `"tokens" property is required. ${dict}`);
        this.matcher = createTokenMatcher(dict.tokens);
    }

    /**
     * match and return results
     */
    match(actualToken: Token): MatchResult {
        return this.matcher(actualToken);
    }
}
