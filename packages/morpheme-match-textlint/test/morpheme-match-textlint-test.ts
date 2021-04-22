// MIT © 2016 azu
"use strict";
import * as assert from "assert";
import { createTextlintMatcher } from "../src/morpheme-match-textlint";
import { dictionariesA } from "./fixtures/dictionariesA";
import { dictionariesMultiple } from "./fixtures/dictionariesB";

const kuromojin = require("kuromojin");

describe("morpheme-match-textlint", () => {
    it("matchAll should return MatchResult[]", async () => {
        const matchAll = createTextlintMatcher({
            dictionaries: dictionariesA,
            tokenize: kuromojin.tokenize
        });
        const text = "必要であると考えている";
        const results = await matchAll(text);
        assert.strictEqual(results.length, 1);
        const [result] = results;
        // 必要|**であると考えている**|
        assert.strictEqual(result.message, `"であると考えている"は冗長な表現です。`);
        assert.strictEqual(result.expected, `である`);
        assert.strictEqual(result.index, 2);
        assert.deepStrictEqual(result.range, [2, 2 + 9]);
    });
    it("matchAll should work with multiple dictionary", async () => {
        const matchAll = createTextlintMatcher({
            dictionaries: dictionariesMultiple,
            tokenize: kuromojin.tokenize
        });
        const resultsA = await matchAll("必要であると考えている");
        assert.strictEqual(resultsA.length, 1);
        const resultsB = await matchAll("動作の確認を行わなければならない");
        // 動作の|**確認を行わなければならない**|
        const [resultB] = resultsB;
        assert.strictEqual(resultsB.length, 1);
        assert.strictEqual(resultB.expected, null);
        assert.strictEqual(resultB.index, 3);
        assert.deepStrictEqual(resultB.range, [3, 12]);
    });
    it("matchAll should return [] when no match", async () => {
        const matchAll = createTextlintMatcher({
            dictionaries: dictionariesA,
            tokenize: kuromojin.tokenize
        });
        const text = "No match text";
        const results = await matchAll(text);
        assert.strictEqual(results.length, 0);
    });
});
