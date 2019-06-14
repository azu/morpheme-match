// MIT © 2016 azu
"use strict";
export const dictionariesMultiple = [
    {
        // https://azu.github.io/morpheme-match/?text=動作の(確認を行わなければ)ならない
        message: `"確認を行わなければ"は冗長な表現です。"確認しなければ"など簡潔な表現にすると文章が明瞭になります。
参考: http://www.atmarkit.co.jp/ait/articles/1001/19/news106_2.html`,
        tokens: [
            {
                "surface_form": "確認",
                "pos": "名詞",
                "pos_detail_1": "サ変接続",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "確認",
                "reading": "カクニン",
                "pronunciation": "カクニン"
            },
            {
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "pos_detail_2": "一般",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "を",
                "reading": "ヲ",
                "pronunciation": "ヲ"
            },
            {
                "surface_form": "行わ",
                "pos": "動詞",
                "pos_detail_1": "自立",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "五段・ワ行促音便",
                "conjugated_form": "未然形",
                "basic_form": "行う",
                "reading": "オコナワ",
                "pronunciation": "オコナワ"
            },
            {
                "surface_form": "なけれ",
                "pos": "助動詞",
                "pos_detail_1": "*",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "特殊・ナイ",
                "conjugated_form": "仮定形",
                "basic_form": "ない",
                "reading": "ナケレ",
                "pronunciation": "ナケレ"
            },
            {
                "surface_form": "ば",
                "pos": "助詞",
                "pos_detail_1": "接続助詞",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "ば",
                "reading": "バ",
                "pronunciation": "バ"
            }
        ]
    },
    {
        // https://azu.github.io/morpheme-match/?text=必要(であると考えている)
        message: `"であると考えている"は冗長な表現です。`,
        expected: "である",
        tokens: [
            {
                "surface_form": "で",
                "pos": "助動詞",
                "pos_detail_1": "*",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "特殊・ダ",
                "conjugated_form": "連用形",
                "basic_form": "だ",
                "reading": "デ",
                "pronunciation": "デ"
            },
            {
                "surface_form": "ある",
                "pos": "助動詞",
                "pos_detail_1": "*",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "五段・ラ行アル",
                "conjugated_form": "基本形",
                "basic_form": "ある",
                "reading": "アル",
                "pronunciation": "アル"
            },
            {
                "surface_form": "と",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "pos_detail_2": "引用",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "と",
                "reading": "ト",
                "pronunciation": "ト"
            },
            {
                "surface_form": "考え",
                "pos": "動詞",
                "pos_detail_1": "自立",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "一段",
                "conjugated_form": "連用形",
                "basic_form": "考える",
                "reading": "カンガエ",
                "pronunciation": "カンガエ"
            },
            {
                "surface_form": "て",
                "pos": "助詞",
                "pos_detail_1": "接続助詞",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "て",
                "reading": "テ",
                "pronunciation": "テ"
            },
            {
                "pos": "動詞",
                "pos_detail_1": "非自立",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "basic_form": "いる"
            },
        ]
    }
];
