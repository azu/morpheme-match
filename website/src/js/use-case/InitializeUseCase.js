// LICENSE : MIT
"use strict";
import {UseCase} from "almin";
import analyzedRepository from "../infra/repository/AnalyzerRepository";
import AnalyzerFactory from "../domain/analyzer/AnalyzerFactory";
export default class UpdateAnalyzedTableUseCase extends UseCase {
    static create() {
        return new this({
            analyzedRepository
        });
    }

    /**
     * @param {AnalyzedRepository} analyzedRepository
     */
    constructor({analyzedRepository}) {
        super();
        this.analyzedRepository = analyzedRepository;
    }

    /**
     * @param {string} text
     */
    execute(text) {
        AnalyzerFactory.create().then((analyzer) => {
            this.analyzedRepository.save(analyzer);
        });
    }
}