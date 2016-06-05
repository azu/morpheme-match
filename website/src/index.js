// LICENSE : MIT
"use strict";
import React from "react";
import ReactDOM from "react-dom";
import AppBootStrap from "./component/container/AppBootStrap";
import AppLocator from "./AppLocator";
// store
import AppStoreGroup from "./js/store/AppStore";
// context
import {Context, Dispatcher}  from "almin";
import AlminLogger from "almin-logger";
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
// global
AppLocator.context = appContext;
// entry point
ReactDOM.render(<AppBootStrap />, document.getElementById("js-app"));