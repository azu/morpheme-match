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

    get outputJSON() {
        return JSON.stringify(this.tokens, null, 4);
    }
}