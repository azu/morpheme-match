// LICENSE : MIT
"use strict";
const React = require("react");
import AppLocator from "../../../AppLocator";
import UpdateAnalyzedTextUseCase from "../../../js/use-case/analyzer/UpdateAnalyzedTextUseCase";
import UpdateTestTextUseCase from "../../../js/use-case/analyzer/UpdateTestTextUseCase";
// component
import Title from "../../project/Title/Title";
import InputForm from "../../project/InputForm/InputForm";
import AnalyzedTable from "../../project/AnalyzedTable/AnalyzedTable";
import AnalyzedJSONField from "../../project/AnalyzedJSONField/AnalyzedJSONField";
import TestInputForm from "../../project/TestInputForm/TestInputForm";
import SideEffectLocationHash from "../../project/SideEffectLocationHash/SideEffectLocationHash";
import TestMatchedTable from "../../project/TestMatchedTable/TestMatchedTable";
import GithubCorner from 'react-github-corner';
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
            })
        };
        context.onChange(onChangeHandler);
    }

    render() {
        /**
         * @type {AnalyzerState}
         */
        const analyzer = this.state.analyzer;
        const matchResult = analyzer.testMatch;
        const updateAnalyzedText = (text) => {
            AppLocator.context.useCase(UpdateAnalyzedTextUseCase.create()).execute(text);
        };
        const updateTestText = (text) => {
            AppLocator.context.useCase(UpdateTestTextUseCase.create()).execute(text);
        };
        const hashChangeComponent = analyzer.initialized ? <SideEffectLocationHash text={analyzer.currentText}/> : null;
        return <div className="App">
            {hashChangeComponent}
            <GithubCorner href="https://github.com/azu/morpheme-match"/>
            <Title className="App-title"><a href="https://github.com/azu/morpheme-match">morpheme-match</a></Title>
            <h2 class="subtitle">形態素解析したトークンを元に、文章にマッチするトークンが含まれているかをチェックするライブラリのデモ</h2>
            <div className="App-container">
                <div className="App-InputForm">
                    <InputForm defaultValue={analyzer.currentText} onSubmit={updateAnalyzedText}/>
                </div>
                <div className="App-Analyzed">
                    <AnalyzedTable label="解析結果" tokens={analyzer.tokens}/>
                    <AnalyzedJSONField permanentURL={analyzer.permanentURL} outputJSON={analyzer.outputJSON}/>
                </div>
                <div className="App-Test">
                    <TestInputForm text={analyzer.testText} onSubmit={updateTestText}/>
                    <TestMatchedTable match={matchResult.match} value={matchResult.value}/>
                    <AnalyzedTable label="テストの解析結果" tokens={analyzer.testTokens}/>
                </div>
            </div>
        </div>
    }
}