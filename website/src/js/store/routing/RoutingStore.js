// LICENSE : MIT
"use strict";
import ReduceStore from "../base/ReduceStore";
import RoutingState from "./RoutingState";
export default class RoutingStore extends ReduceStore {
    constructor() {
        super();
        this.state = new RoutingState();
        this.onDispatch(payload => {
            this.setState(this.state.reduce(payload));
        });
    }

    getState() {
        return this.state;
    }
}
