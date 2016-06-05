// LICENSE : MIT
"use strict";
import {UseCase} from "almin";
import analyzedRepository from "../infra/repository/AnalyzerRepository";
import AnalyzerFactory from "../domain/analyzer/AnalyzerFactory";
import UpdateAnalyzedTableUseCase from "./analyzer/UpdateAnalyzedTableUseCase";
export default class InitializeUseCase extends UseCase {
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

    execute({hash}) {
        const defaultText = hash || "日本語の文章を解析します。";
        return AnalyzerFactory.create().then((analyzer) => {
            this.analyzedRepository.save(analyzer);
            const initializeAnalyzedText = new UpdateAnalyzedTableUseCase({analyzedRepository: this.analyzedRepository});
            return this.context.useCase(initializeAnalyzedText).execute(defaultText);
        });
    }
}