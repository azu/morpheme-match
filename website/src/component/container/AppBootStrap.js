// LICENSE : MIT
"use strict";
const React = require("react");
const parse = require("query-string").parse;
import App from "./App/App"
import AppLocator from "../../AppLocator";
import LoadingContainer from "../ui-kit/LoadingContainer/LoadingContainer";
import InitializeUseCase from "../../js/use-case/InitializeUseCase";
import ChangeURLStateUseCase from "../../js/use-case/routing/ChangeURLStateUseCase";
const AppLoading = LoadingContainer(App);
export default class AppBootStrap extends React.Component {
    render() {
        const location = AppLocator.history.getCurrentLocation();
        const query = parse(location.search);
        const context = AppLocator.context;
        const promise = context.useCase(InitializeUseCase.create()).execute({text: query.text}).catch(error => {
            console.error(error);
        });
        return <AppLoading promise={promise}/>;
    }
}
