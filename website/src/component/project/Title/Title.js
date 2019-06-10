// LICENSE : MIT
"use strict";
const React = require("react");
const classname = require("classname");
export default class Title extends React.Component {
    render() {
        const className = classname("title", this.props.className);
        return <h1 className={className}>{this.props.children}</h1>;
    }
}
