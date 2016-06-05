// LICENSE : MIT
"use strict";
const getTokenizer = require("kuromojin").getTokenizer;
const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
export default class KuromojiLoader {
    /**
     * create kuromojin
     * @returns {Promise}
     */
    static createKuormoji() {
        const options = isNode ? undefined : {dicPath: "./dict"};
        return getTokenizer(options);
    }
}