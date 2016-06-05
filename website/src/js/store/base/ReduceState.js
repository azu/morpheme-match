// LICENSE : MIT
"use strict";
/**
 * ReduceState class is an abstraction class.
 * It provide redux like mechanism.
 * You should override `reduce(payload): ReduceState`.
 */
export default class ReduceState {
    /**
     * Compare `this` properties and `targetState` properties
     * If all properties is matched, return true.
     * @param {ReduceState} targetState
     * @returns {boolean}
     */
    equals(targetState) {
        if (this === targetState) {
            return true;
        }
        return Object.keys(this).every((key) => {
            return this[key] === targetState[key];
        });
    }

    /**
     * It default `reduce` method.
     * The `reduce` method should be override by inherited state.
     * @param {Object} payload
     * @returns {ReduceState}
     */
    reduce(payload) {
        switch (payload.type) {
            default:
                return this;
        }
    }
}
