// LICENSE : MIT
"use strict";
require("usertiming");
require("bulma/css/bulma.css");
require("./index.css");
import React from "react";
import ReactDOM from "react-dom";
import AppBootStrap from "./component/container/AppBootStrap";
import AppLocator from "./AppLocator";
// store
import AppStoreGroup from "./js/store/AppStore";
// context
import { Context, Dispatcher } from "almin";
import AlminLogger from "almin-logger";
import { createHistory } from "history";

const history = createHistory();
// instances
const dispatcher = new Dispatcher();
const appStoreGroup = AppStoreGroup.create();
// context connect dispatch with stores
const appContext = new Context({
    dispatcher,
    store: appStoreGroup
});
// start logger
const logger = new AlminLogger();
logger.startLogging(appContext);
appContext.onErrorDispatch(error => {
    console.error(error);
});
// global
AppLocator.context = appContext;
AppLocator.history = history;

// entry point
ReactDOM.render(<AppBootStrap />, document.getElementById("js-app"));
