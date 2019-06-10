// LICENSE : MIT
"use strict";
import { StoreGroup } from "almin";
import AnalyzerStore from "./analyzer/AnalyzerStore";
import RoutingStore from "./routing/RoutingStore";
import analyzedRepository from "../infra/repository/AnalyzerRepository";
export default class AppStore {
    static create() {
        return new StoreGroup([new AnalyzerStore({ analyzedRepository }), new RoutingStore()]);
    }
}
