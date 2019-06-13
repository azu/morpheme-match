// LICENSE : MIT
"use strict";
import Token from "../token/Token";

export default class Analyzer {
    constructor({tokenizer}) {
        this.currentText = "";
        this.analyzedTokens = [];
        this.tokenizer = tokenizer;
        this.testText = "";
        this.testTokens = [];
    }

    /**
     * Analyzed `text` and return `tokens`
     * @param {string} text
     * @returns {Token[]} tokens
     */
    analyze(text) {
        // if contain pair of ( and ) and tokenize text that  between ( and ).
        const matchRegExp = /\((.*?)\)/;
        const matchResult = text.match(matchRegExp);
        const allText = text.replace(/\((.*?)\)/, "$1");
        const matchText = matchResult ? matchResult[1] : text;
        const matchStartIndex = matchResult ? matchResult.index : -1;
        const matchEndIndex = matchStartIndex + matchText.length;
        this.currentText = text;
        this.analyzedTokens = this.tokenizer
            .tokenize(allText)
            .filter(token => {
                const tokenIndex = token.word_position - 1;
                // (xxx)
                // ^   ^
                // -1  -2
                return matchResult
                    ? (matchStartIndex - 1) < tokenIndex && tokenIndex <= (matchEndIndex - 2)
                    : matchStartIndex < tokenIndex && tokenIndex <= matchEndIndex;
            })
            .map(rawToken => {
                return new Token(rawToken);
            });
        return this.analyzedTokens;
    }

    analyzeTestText(text) {
        this.testText = text;
        this.testTokens = this.tokenizer.tokenize(text).map(rawToken => {
            return new Token(rawToken);
        });
        return this.testTokens;
    }
}
