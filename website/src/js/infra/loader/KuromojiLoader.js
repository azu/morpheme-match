// LICENSE : MIT
"use strict";
const getTokenizer = require("kuromojin").getTokenizer;
export default class KuromojiLoader {
    /**
     * create kuromojin
     * @returns {Promise}
     */
    static createKuormoji() {
        return getTokenizer({dicPath: "./dict"});
    }
}