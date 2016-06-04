// LICENSE : MIT
"use strict";
const React = require("react");
export default class InputForm extends React.Component {
    constructor(){
        super();
        this.input = null;
    }
    render() {
        const onSubmit = (e) => {
            e.preventDefault();
            const value = this.input && this.input.value || "";
            this.props.onSubmit(value);
        };
        return <form onSubmit={onSubmit}>
            <fieldset>
                <legend>解析したい内容</legend>
                テキスト：<input ref={(c) => this.input = c} type="text" name="name" size="20"/>
            </fieldset>
            <input type="submit" value="送信"/>
        </form>;
    }
}