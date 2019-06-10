// LICENSE : MIT
"use strict";
import { UseCase } from "almin";
/**
 * Change URL Query for preserve state
 */
export default class ChangeURLStateUseCase extends UseCase {
    static create() {
        return new this();
    }

    execute(query) {
        this.dispatch({
            type: ChangeURLStateUseCase.Events.change,
            query: query
        });
    }
}
ChangeURLStateUseCase.Events = {
    change: "ChangeURLStateUseCase"
};
