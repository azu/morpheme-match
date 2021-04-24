// LICENSE : MIT
"use strict";
import { getTokenizer } from "kuromojin";
const isNode = typeof process !== "undefined" && process.versions && process.versions.node;
export default class KuromojiLoader {
    /**
     * create kuromojin
     * @returns {Promise}
     */
    static createKuormoji() {
        const options = isNode ? undefined : { dicPath: "./dict" };
        return getTokenizer(options);
    }
}
