// LICENSE : MIT
"use strict";
import expectTokenStream from "../src/morpheme-match";
const assert = require("power-assert");
describe("expectTokenStream", function() {
    it("should return {match, tokens}", function() {
        // http://localhost:8080/#名詞(かも)しれない
        const expectToken = expectTokenStream([
            {
                "surface_form": "かも",
                "pos": "助詞",
                "pos_detail_1": "副助詞",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "かも",
                "reading": "カモ",
                "pronunciation": "カモ"
            },
            {
                "surface_form": "、",
                "_skippable": true,
            },
            {
                "surface_form": "、",
                "_skippable": true,
            },
            {
                "surface_form": "しれ",
            },
            {
                "surface_form": "、",
                "_skippable": true,
            },
            {
                "surface_form": "、",
                "_skippable": true,
            },
        ]);
        const tokens = [
            {
                "surface_form": "名詞",
                "pos": "名詞",
                "pos_detail_1": "一般",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "名詞",
                "reading": "メイシ",
                "pronunciation": "メイシ"
            },
            // Hit!
            {
                "surface_form": "かも",
                "pos": "助詞",
                "pos_detail_1": "副助詞",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "かも",
                "reading": "カモ",
                "pronunciation": "カモ"
            },
            {
                "surface_form": "しれ",
                "pos": "動詞",
                "pos_detail_1": "自立",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "一段",
                "conjugated_form": "未然形",
                "basic_form": "しれる",
                "reading": "シレ",
                "pronunciation": "シレ"
            },
            {
                "surface_form": "ない",
                "pos": "助動詞",
                "pos_detail_1": "*",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "特殊・ナイ",
                "conjugated_form": "基本形",
                "basic_form": "ない",
                "reading": "ナイ",
                "pronunciation": "ナイ"
            }
        ];
        let resultTokens = [];
        const result = tokens.some(token => {
            const {match, tokens} = expectToken(token);
            if (!match) {
                assert(tokens === undefined);
            }
            resultTokens = tokens;
            return match;
        });
        assert(result);
        assert.equal(resultTokens.length, 2);
    });
});
