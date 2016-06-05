// LICENSE : MIT
"use strict";
import AnalyzerFactory from "../../../src/js/domain/analyzer/AnalyzerFactory";
const assert = require("power-assert");
const joinToken = (tokens) => {
    return tokens.map(token => token.toString()).join("");
};
describe("Analyzer", function () {
    describe("#analyze", function () {
        it("should return tokens", function () {
            return AnalyzerFactory.create().then(analyzer => {
                const text = "これはアレです";
                const tokens = analyzer.analyze(text);
                const actual = joinToken(tokens);
                assert.equal(actual, text);
            });
        });
        context("when contain pair of ( and )", function () {
            it("should return tokens between ( and )", function () {
                return AnalyzerFactory.create().then(analyzer => {
                    const text = "これは(アレ)です";
                    const tokens = analyzer.analyze(text);
                    assert(tokens.length, 1);
                    const actual = joinToken(tokens);
                    assert.equal(actual, "アレ");
                });
            });
        });
        context("when contain multiple pairs of ( and )", function () {
            it("should return tokens between first ( and )", function () {
                return AnalyzerFactory.create().then(analyzer => {
                    const text = "これは(アレ)です(ね)";
                    const tokens = analyzer.analyze(text);
                    assert(tokens.length, 1);
                    const actual = joinToken(tokens);
                    assert.equal(actual, "アレ");
                });
            });
        });
    });
});