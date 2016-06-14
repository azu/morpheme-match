// LICENSE : MIT
"use strict";
const React = require("react");
import AppLocator from "../../../AppLocator";
export default class SideEffectLocationHash extends React.Component {

    constructor() {
        super();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.text !== undefined && nextProps.text.length > 0;
    }

    render() {
        if (this.props.text) {
            AppLocator.history.push({
                search: `?text=${this.props.text}`,
            });
        } else {
            // empt
            AppLocator.history.push({
                search: null
            });
        }
        return null;
    }


    _updateHash(text) {
        if (text && text.length > 0) {
            location.hash = text;
        }
    }
}
SideEffectLocationHash.propTypes = {
    text: React.PropTypes.string,
    isFirstTime: React.PropTypes.bool
};
