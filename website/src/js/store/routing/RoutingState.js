// LICENSE : MIT
"use strict";
import ReduceState from "../base/ReduceState";
import ChangeURLStateUseCase from "../../use-case/routing/ChangeURLStateUseCase";
export default class RoutingState extends ReduceState {
    constructor({ query } = {}) {
        super();
        const queryObject = query || {};
        this.text = queryObject.text;
    }

    get currentURL() {
        const origin =
            window.location.protocol +
            "//" +
            window.location.hostname +
            (window.location.port ? ":" + window.location.port : "");
        const query = this.text ? `?text=${this.text}` : "";
        return `${origin}${window.location.pathname}${query}`;
    }

    reduce(payload) {
        switch (payload.type) {
            case ChangeURLStateUseCase.Events.change:
                return new RoutingState(
                    Object.assign({}, this, {
                        query: payload.query
                    })
                );
            default:
                return this;
        }
    }
}
