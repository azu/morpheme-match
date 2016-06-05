// LICENSE : MIT
"use strict";
import Token from "../token/Token";
export default class Analyzer {
    constructor({tokenizer}) {
        this.currentText = "";
        this.analyzedTokens = [];
        this.tokenizer = tokenizer;
    }

    analyze(text) {
        this.currentText = text;
        this.analyzedTokens = this.tokenizer.tokenize(text).map(rawToken => {
            return new Token(rawToken);
        });
    }
}