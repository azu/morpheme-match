// LICENSE : MIT
"use strict";
const React = require("react");
export default class SideEffectLocationHash extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.text !== undefined && nextProps.text.length > 0;
    }

    render() {
        this._updateHash(this.props.text);
        return null;
    }


    _updateHash(text) {
        if (text && text.length > 0) {
            location.hash = text;
        }
    }
}
SideEffectLocationHash.propTypes = {
    updateText: React.PropTypes.func,
    text: React.PropTypes.string
};
