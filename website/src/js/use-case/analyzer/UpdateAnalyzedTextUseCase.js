// LICENSE : MIT
"use strict";
import { UseCase } from "almin";
import analyzedRepository from "../../infra/repository/AnalyzerRepository";
export default class UpdateAnalyzedTextUseCase extends UseCase {
    static create() {
        return new this({
            analyzedRepository
        });
    }

    /**
     * @param {AnalyzedRepository} analyzedRepository
     */
    constructor({ analyzedRepository }) {
        super();
        this.analyzedRepository = analyzedRepository;
    }

    /**
     * @param {string} text
     */
    execute(text) {
        const analyzer = this.analyzedRepository.lastUsed();
        analyzer.analyze(text);
        this.analyzedRepository.save(analyzer);
    }
}
