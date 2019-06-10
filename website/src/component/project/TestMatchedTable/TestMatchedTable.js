// LICENSE : MIT
"use strict";
const React = require("react");
export default class TestMatchedTable extends React.Component {
    render() {
        const match = this.props.match;
        const value = this.props.value;
        return (
            <div className="TestMatchedTable">
                <p className="TestMatchedTable-text">{match ? `\u2714 Matched: ${value}` : "\u274C No Matched"}</p>
            </div>
        );
    }
}
