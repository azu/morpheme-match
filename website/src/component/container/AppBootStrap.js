// LICENSE : MIT
"use strict";
const React = require("react");
import App from "./App/App"
import AppLocator from "../../AppLocator";
import LoadingContainer from "../ui-kit/LoadingContainer/LoadingContainer";
import InitializeUseCase from "../../js/use-case/InitializeUseCase";
const AppLoading = LoadingContainer(App);
export default class AppBootStrap extends React.Component {
    render() {
        const hashString = location.hash.slice(1);
        const hash = hashString ? decodeURIComponent(hashString) : undefined;
        const promise = AppLocator.context.useCase(InitializeUseCase.create()).execute({hash});
        return <AppLoading promise={promise}/>;
    }
}
