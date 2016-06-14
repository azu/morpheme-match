// LICENSE : MIT
"use strict";
import ReduceState from "../base/ReduceState";
import ChangeURLStateUseCase from "../../use-case/routing/ChangeURLStateUseCase";
export default class RoutingState extends ReduceState {
    constructor({query} = {}) {
        super();
        const queryObject = query || {};
        this.text = queryObject.text;
    }

    reduce(payload) {
        switch (payload.type) {
            case ChangeURLStateUseCase.Events.change:
                return new RoutingState(Object.assign({}, this, {
                    query: payload.query
                }));
            default:
                return this;
        }
    }
}