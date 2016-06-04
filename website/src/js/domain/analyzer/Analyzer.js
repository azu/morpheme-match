// LICENSE : MIT
"use strict";
export default class Analyzer {
    constructor({tokenizer}) {
        this.currentText = "";
        this.analyzedTokens = [];
        this.tokenizer = tokenizer;
    }

    analyze(text) {
        this.currentText = text;
        this.analyzedTokens = this.tokenizer.tokenize(text);
    }
}