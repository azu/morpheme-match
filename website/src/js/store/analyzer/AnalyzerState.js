// LICENSE : MIT
"use strict";
import ReduceState from "../base/ReduceState";
export default class AnalyzerState extends ReduceState {
    /**
     * @param {Analyzer} analyzer
     */
    constructor({analyzer = {}} = {}) {
        super();
        this.tokens = analyzer.analyzedTokens || [];
    }
}