// MIT © 2016 azu
"use strict";
import * as assert from "assert";

const kuromojin = require("kuromojin");
import {createMatcher} from "../src/morpheme-match-all";
import {Token} from "morpheme-match";

describe("morpheme-match-all", () => {
    it("should return matcher function", () => {
        const matchAll = createMatcher(require("./fixtures/dictionary"));
        assert.strictEqual(typeof matchAll, "function");
    });
    describe("matchAll", () => {
        context("when match tokens", () => {
            it("should return MatchResult[]", () => {
                const dictionaries = require("./fixtures/dictionary");
                const matchAll = createMatcher(dictionaries);
                const results = matchAll(require("./fixtures/actual-tokens"));
                assert.strictEqual(results.length, 1);
                const [result] = results;
                // 解析|**する**|
                assert.strictEqual(result.index, 1);
                assert.deepStrictEqual(result.dict, dictionaries[0]);
                assert.ok(Array.isArray(result.tokens));
            });
        });
        context("when not match tokens", () => {
            it("should return MatchResult[] that is empty", () => {
                const dictionaries = require("./fixtures/dictionary");
                const matchAll = createMatcher(dictionaries);
                const results = matchAll(require("./fixtures/actual-not-match-tokens"));
                assert.strictEqual(results.length, 0);
            });
        });
        context("example", () => {
            it("should work", () => {
                const dictionaries = require("./fixtures/dictionary");
                const matchAll = createMatcher(dictionaries);
                return kuromojin("解析することができます。").then((actualTokens: Token[]) => {
                    const results = matchAll(actualTokens);
                    /**
                     [ { tokens: [ [Object], [Object], [Object], [Object] ],
    index: 1,
    dict:
     { message: '"することができる"は有害 http://qiita.com/takahi-i/items/a93dc2ff42af6b93f6e0',
       tokens: [Object] } } ]
                     */
                    assert.strictEqual(results.length, 1);
                    assert.deepStrictEqual(results[0].skipped, [false, false, false, true, false]);
                });
            });
        });
    });
});
