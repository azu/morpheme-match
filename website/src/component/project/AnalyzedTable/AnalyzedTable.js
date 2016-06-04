// LICENSE : MIT
"use strict";
const React = require("react");
class AnalyzedTaken extends React.Component {
    render() {
        const token = this.props.token;
        return <tr>
            <td>{token.surface_form}</td>
            <td>{token.pos}</td>
            <td>{token.pos_detail_1}</td>
            <td>{token.pos_detail_2}</td>
            <td>{token.pos_detail_3}</td>
            <td>{token.conjugated_type}</td>
            <td>{token.conjugated_form}</td>
            <td>{token.basic_form}</td>
            <td>{token.reading}</td>
            <td>{token.pronunciation}</td>
        </tr>
    }
}
export default class AnalyzedTable extends React.Component {
    render() {
        const tokens = this.props.tokens;
        const tokenTrList = tokens.map((token, index) => {
            return <AnalyzedTaken key={index} token={token}/>
        });
        return <table width="100%" class="table">
            <thead>
            <tr>
                <th>表層形</th>
                <th>品詞</th>
                <th>品詞細分類1</th>
                <th>品詞細分類2</th>
                <th>品詞細分類3</th>
                <th>活用型</th>
                <th>活用形</th>
                <th>基本形</th>
                <th>読み</th>
                <th>発音</th>
            </tr>
            </thead>
            <tbody>
            {tokenTrList}
            </tbody>
        </table>
    }
}