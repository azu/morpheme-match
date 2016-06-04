// LICENSE : MIT
"use strict";
export default class Token {
    constructor(object = {}) {
        // 辞書内での単語ID
        this.word_id = object.word_id;
        // 単語タイプ(辞書に登録されている単語ならKNOWN; 未知語ならUNKNOWN)
        this.word_type = object.word_type;
        // 単語の開始位置
        this.word_position = object.word_position;
        // 表層形
        this.surface_form = object.surface_form;
        // 品詞
        this.pos = object.pos;
        // 品詞細分類1
        this.pos_detail_1 = object.pos_detail_1;
        // 品詞細分類2
        this.pos_detail_2 = object.pos_detail_2;
        // 品詞細分類3
        this.pos_detail_3 = object.pos_detail_3;
        // 活用型
        this.conjugated_type = object.conjugated_type;
        // 活用形
        this.conjugated_form = object.conjugated_form;
        // 基本形
        this.basic_form = object.basic_form;
        // 読み
        this.reading = object.reading;
        // 発音
        this.pronunciation = object.pronunciation;
    }
}