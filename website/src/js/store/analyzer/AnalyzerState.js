// LICENSE : MIT
"use strict";
import ReduceState from "../base/ReduceState";
export default class AnalyzerState extends ReduceState {
    /**
     * @param {Analyzer} analyzer
     */
    constructor({analyzer = {}} = {}) {
        super();
        this.currentText = analyzer.currentText;
        this.tokens = analyzer.analyzedTokens || [];
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
}