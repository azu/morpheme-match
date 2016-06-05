// LICENSE : MIT
"use strict";
const React = require("react");
export default class TestInputForm extends React.Component {
    constructor() {
        super();
        this.input = null;
    }

    render() {
        const onSubmit = (e) => {
            e.preventDefault();
            const value = this.input && this.input.value || "";
            this.props.onSubmit(value);
        };
        return <form className="TestInputForm" onSubmit={onSubmit} autocomplete="off" autocorrect="off" autocapitalize="off">
            <label className="TestInputForm-label">テスト対象のテキスト</label>
            <div className="control has-addons">
                <input ref={(c) => this.input = c}
                       className="TestInputForm-input input is-expanded"
                       type="text" name="name" size="20"
                       defaultValue={this.props.defaultValue ? this.props.defaultValue: null}
                       autocomplete="off" autocorrect="off" autocapitalize="off"/>
                <p className="control">
                    <input className="button is-info" type="submit" value="テスト"/>
                </p>
            </div>
        </form>;
    }
}