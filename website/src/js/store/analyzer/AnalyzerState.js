// LICENSE : MIT
"use strict";
import ReduceState from "../base/ReduceState";
const createTokenMatcher = require("morpheme-match");
import UpdateAnalyzedTextUseCase from "../../use-case/analyzer/UpdateAnalyzedTextUseCase";
import InitializeUseCase from "../../use-case/InitializeUseCase";
export default class AnalyzerState extends ReduceState {
    /**
     * @param {Analyzer} analyzer
     */
    constructor({analyzer = {}, initialized} = {}) {
        super();
        this.analyzer = analyzer;
        this.initialized = initialized;
        this.currentText = analyzer.currentText;
        this.tokens = analyzer.analyzedTokens || [];
        this.testText = analyzer.testText;
        this.testTokens = analyzer.testTokens || [];
    }

    get isChangedByUser() {
        return this.initialized;
    }

    get testMatch() {
        let matchedToken = [];
        const matchedTokens = this.tokens.map(token => token.toJSON());
        const expectToken = createTokenMatcher(matchedTokens);
        const isMatch = this.testTokens.some(token => {
            const {match, tokens} = expectToken(token);
            matchedToken = tokens;
            return match;
        });
        if (isMatch) {
            const value = matchedToken.map(token => token.surface_form).join("");
            return {
                match: isMatch,
                value
            }
        }
        return {
            match: isMatch
        }
    }

    // return "<value>"
    get permanentURL() {
        const origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        const hash = this.currentText ? `#${this.currentText}` : "";
        return `${origin}${window.location.pathname}${hash}`;
    }

    get outputJSON() {
        return JSON.stringify(this.tokens, null, 4);
    }

    reduce(payload) {
        switch (payload.type) {
            case UpdateAnalyzedTextUseCase.Events.initialize:
                return new AnalyzerState(Object.assign({}, this, {
                    initialized: true
                }));
            // by initial event
            case InitializeUseCase.Events.initialize:
                return new AnalyzerState(Object.assign({}, this, {
                    initialized: false
                }));
            default:
                return this;
        }
    }
}