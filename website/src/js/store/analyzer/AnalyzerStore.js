// LICENSE : MIT
"use strict";
import ReduceStore from "../base/ReduceStore";
import AnalyzerState from "./AnalyzerState";
export default class AnalyzerStore extends ReduceStore {
    constructor({ analyzedRepository }) {
        super();
        this.state = new AnalyzerState();
        this.onDispatch(payload => {
            this.setState(this.state.reduce(payload));
        });
        analyzedRepository.onChange(analyzer => {
            this.setState(new AnalyzerState(Object.assign({}, this.state, { analyzer })));
        });
    }

    getState() {
        return this.state
    }
}
