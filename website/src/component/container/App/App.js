// LICENSE : MIT
"use strict";
const React = require("react");
import InputForm from "../../project/InputForm/InputForm";
import AnalyzedTable from "../../project/AnalyzedTable/AnalyzedTable";
import AppLocator from "../../../AppLocator";
import UpdateAnalyzedTableUseCase from "../../../js/use-case/analyzer/UpdateAnalyzedTableUseCase";
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
        const onSubmit = (text) => {
            AppLocator.context.useCase(UpdateAnalyzedTableUseCase.create()).execute(text);
        };
        return <div className="App">
            <div className="App-InputForm">
                <InputForm onSubmit={onSubmit}/>
            </div>
            <AnalyzedTable tokens={analyzer.tokens}/>
        </div>
    }
}