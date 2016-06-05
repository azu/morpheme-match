// LICENSE : MIT
"use strict";
const React = require("react");
export default class AnalyzedJSONField extends React.Component {
    render() {
        const outputJSON = this.props.outputJSON;
        return <div className="AnalyzedJSONField">
            <label className="AnalyzedJSONField-label">解析結果(JSON)</label>
            <p className="control">
                <textarea className="textarea" placeholder="Textarea" value={outputJSON} readOnly/>
            </p>
        </div>;
    }
}