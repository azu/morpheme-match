import * as assert from "assert";
import { createTokenMatcher, Token } from "../src/morpheme-match";

describe("createTokenMatcher", function() {
    it("should return {match, tokens, skipped}", function() {
        // http://localhost:8080/#名詞(かも)しれない
        const matchToken = createTokenMatcher([
            {
                surface_form: "かも",
                pos: "助詞",
                pos_detail_1: "副助詞",
                pos_detail_2: "*",
                pos_detail_3: "*",
                conjugated_type: "*",
                conjugated_form: "*",
                basic_form: "かも",
                reading: "カモ",
                pronunciation: "カモ"
            },
            {
                surface_form: "、",
                _skippable: true
            },
            {
                surface_form: "、",
                _skippable: true
            },
            {
                surface_form: "しれ",
                _skippable: true
            },
            {
                surface_form: "、",
                _skippable: true
            },
            {
                surface_form: "、",
                _skippable: true
            }
        ]);
        const tokens = [
            {
                surface_form: "名詞",
                pos: "名詞",
                pos_detail_1: "一般",
                pos_detail_2: "*",
                pos_detail_3: "*",
                conjugated_type: "*",
                conjugated_form: "*",
                basic_form: "名詞",
                reading: "メイシ",
                pronunciation: "メイシ"
            },
            // Hit!
            {
                surface_form: "かも",
                pos: "助詞",
                pos_detail_1: "副助詞",
                pos_detail_2: "*",
                pos_detail_3: "*",
                conjugated_type: "*",
                conjugated_form: "*",
                basic_form: "かも",
                reading: "カモ",
                pronunciation: "カモ"
            },
            {
                surface_form: "しれ",
                pos: "動詞",
                pos_detail_1: "自立",
                pos_detail_2: "*",
                pos_detail_3: "*",
                conjugated_type: "一段",
                conjugated_form: "未然形",
                basic_form: "しれる",
                reading: "シレ",
                pronunciation: "シレ"
            },
            {
                surface_form: "ない",
                pos: "助動詞",
                pos_detail_1: "*",
                pos_detail_2: "*",
                pos_detail_3: "*",
                conjugated_type: "特殊・ナイ",
                conjugated_form: "基本形",
                basic_form: "ない",
                reading: "ナイ",
                pronunciation: "ナイ"
            }
        ];
        let resultTokens: Token[] = [];
        let resultSkipped: boolean[] = [];
        const result = tokens.some(token => {
            const { match, tokens, skipped } = matchToken(token);
            if (!match) {
                assert.deepStrictEqual(tokens, []);
            }
            resultTokens = tokens;
            resultSkipped = skipped;
            return match;
        });
        assert.ok(result);
        assert.strictEqual(resultTokens.length, 2);
        assert.deepStrictEqual(resultSkipped, [false, true, true, false, true, true]);
    });
});
