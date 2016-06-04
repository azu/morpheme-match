// LICENSE : MIT
"use strict";
export class AppLocator {
    constructor() {
        /**
         * @type {Context}
         * @private
         */
        this._context = null;
    }

    /**
     * @returns {Context}
     */
    get context() {
        return this._context;
    }

    /**
     * @param {Context} newContext
     */
    set context(newContext) {
        this._context = newContext;
    }
}

export default new AppLocator();