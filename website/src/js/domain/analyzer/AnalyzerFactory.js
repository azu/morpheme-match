// LICENSE : MIT
"use strict";
import Analyzer from "./Analyzer";
import KuromojiLoader from "../../infra/loader/KuromojiLoader";
export default class AnalyzerFactory {
    static create() {
        return KuromojiLoader.createKuormoji().then(tokenizer => {
            return new Analyzer({tokenizer});
        });
    }
}