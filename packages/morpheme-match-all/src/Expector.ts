// MIT © 2016 azu
"use strict";
import * as assert from "assert";
import {createTokenMatcher, Token, ExpectedToken, MatchResult} from "morpheme-match";

export type ExpectedDictionary<T extends ExpectedToken> = {
    tokens: T[];
    message: string;
    expected?: string;
};

export class Expector<T extends ExpectedToken> {
    private matcher: any;

    constructor(public dict: ExpectedDictionary<T>) {
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
