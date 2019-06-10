// LICENSE : MIT
"use strict";
const React = require("react");
import AppLocator from "../../../AppLocator";
import UpdateAnalyzedTextUseCase from "../../../js/use-case/analyzer/UpdateAnalyzedTextUseCase";
import UpdateTestTextUseCase from "../../../js/use-case/analyzer/UpdateTestTextUseCase";
import ChangeURLStateUseCase from "../../../js/use-case/routing/ChangeURLStateUseCase";
// component
import Title from "../../project/Title/Title";
import InputForm from "../../project/InputForm/InputForm";
import AnalyzedTable from "../../project/AnalyzedTable/AnalyzedTable";
import AnalyzedJSONField from "../../project/AnalyzedJSONField/AnalyzedJSONField";
import TestInputForm from "../../project/TestInputForm/TestInputForm";
import SideEffectLocationHash from "../../project/SideEffectLocationHash/SideEffectLocationHash";
import TestMatchedTable from "../../project/TestMatchedTable/TestMatchedTable";
import GithubCorner from "react-github-corner";
export default class App extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = AppLocator.context.getState();
    }

    componentDidMount() {
        const context = AppLocator.context;
        // when change store, update component
        const onChangeHandler = () => {
            return requestAnimationFrame(() => {
                this.setState(context.getState());
            });
        };
        context.onChange(onChangeHandler);
    }

    render() {
        /**
         * @type {AnalyzerState}
         */
        const analyzer = this.state.analyzer;
        /**
         * @type {RoutingState}
         */
        const routing = this.state.routing;
        const matchResult = analyzer.testMatch;
        const updateAnalyzedText = text => {
            const context = AppLocator.context;
            context
                .useCase(UpdateAnalyzedTextUseCase.create())
                .execute(text)
                .then(() => {
                    return context.useCase(ChangeURLStateUseCase.create()).execute({ text });
                });
        };
        const updateTestText = text => {
            AppLocator.context.useCase(UpdateTestTextUseCase.create()).execute(text);
        };

        return (
            <div className="App">
                <SideEffectLocationHash text={routing.text} />
                <GithubCorner href="https://github.com/azu/morpheme-match" />
                <Title className="App-title">
                    <a href="https://github.com/azu/morpheme-match">morpheme-match</a>
                </Title>
                <h2 className="subtitle">
                    形態素解析したトークンを元に、文章にマッチするトークンが含まれているかをチェックするライブラリのデモ
                </h2>
                <div className="App-container">
                    <div className="App-InputForm">
                        <InputForm defaultValue={analyzer.currentText} onSubmit={updateAnalyzedText} />
                    </div>
                    <div className="App-Analyzed">
                        <AnalyzedTable label="解析結果" tokens={analyzer.tokens} />
                        <AnalyzedJSONField permanentURL={routing.currentURL} outputJSON={analyzer.outputJSON} />
                    </div>
                    <div className="App-Test">
                        <TestInputForm text={analyzer.testText} onSubmit={updateTestText} />
                        <TestMatchedTable match={matchResult.match} value={matchResult.value} />
                        <AnalyzedTable label="テストの解析結果" tokens={analyzer.testTokens} />
                    </div>
                </div>
            </div>
        );
    }
}
