// MIT © 2016 azu
"use strict";
const assert = require("assert");
const kuromojin = require("kuromojin");
const createMatcher = require("../src/morpheme-match-all");
describe("morpheme-match-all", () => {
    it("should return matcher function", () => {
        const matchAll = createMatcher(require("./fixtures/dictionary"));
        assert(typeof matchAll === "function");
    });
    describe("matchAll", () => {
        context("when match tokens", () => {
            it("should return MatchResult[]", () => {
                const dictionaries = require("./fixtures/dictionary");
                const matchAll = createMatcher(dictionaries);
                const results = matchAll(require("./fixtures/actual-tokens"));
                assert(results.length === 1);
                const [result] = results;
                // 解析|**する**|
                assert(result.index === 1);
                assert.deepEqual(result.expected, dictionaries[0]);
                assert(Array.isArray(result.tokens));
            });
        });
        context("when not match tokens", () => {
            it("should return MatchResult[] that is empty", () => {
                const dictionaries = require("./fixtures/dictionary");
                const matchAll = createMatcher(dictionaries);
                const results = matchAll(require("./fixtures/actual-not-match-tokens"));
                assert(results.length === 0);
            });
        });
        context("example", () => {
            it("should work", () => {
                const dictionaries = require("./fixtures/dictionary");
                const matchAll = createMatcher(dictionaries);
                return kuromojin("解析することができます。").then((actualTokens) => {
                    const results = matchAll(actualTokens);
                    /**
[ { tokens: [ [Object], [Object], [Object], [Object] ],
    index: 1,
    expected:
     { message: '"することができる"は有害 http://qiita.com/takahi-i/items/a93dc2ff42af6b93f6e0',
       tokens: [Object] } } ]
                     */
                    assert(results.length === 1);
                });
            });
        });
    });
});

