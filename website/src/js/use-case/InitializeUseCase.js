// LICENSE : MIT
"use strict";
import {UseCase} from "almin";
import analyzedRepository from "../infra/repository/AnalyzerRepository";
import AnalyzerFactory from "../domain/analyzer/AnalyzerFactory";
import UpdateAnalyzedTextUseCase from "./analyzer/UpdateAnalyzedTextUseCase";
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

    execute({text} = {}) {
        const defaultText = text || "日本語の文章を解析します。";
        return AnalyzerFactory.create().then((analyzer) => {
            this.analyzedRepository.save(analyzer);
            const initializeAnalyzedText = new UpdateAnalyzedTextUseCase({analyzedRepository: this.analyzedRepository});
            return this.context.useCase(initializeAnalyzedText).execute(defaultText);
        }).then(() => {
            this.dispatch({type: InitializeUseCase.Events.didInitialized})
        });
    }
}
InitializeUseCase.Events = {
    didInitialized: "didInitialized"
};