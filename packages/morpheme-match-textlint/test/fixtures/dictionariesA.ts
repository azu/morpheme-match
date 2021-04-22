// MIT © 2016 azu
"use strict";
export const dictionariesA = [
    {
        // https://azu.github.io/morpheme-match/?text=必要(であると考えている)
        message: `"であると考えている"は冗長な表現です。`,
        expected: "である",
        tokens: [
            {
                surface_form: "で",
                pos: "助動詞",
                pos_detail_1: "*",
                pos_detail_2: "*",
                pos_detail_3: "*",
                conjugated_type: "特殊・ダ",
                conjugated_form: "連用形",
                basic_form: "だ",
                reading: "デ",
                pronunciation: "デ"
            },
            {
                surface_form: "ある",
                pos: "助動詞",
                pos_detail_1: "*",
                pos_detail_2: "*",
                pos_detail_3: "*",
                conjugated_type: "五段・ラ行アル",
                conjugated_form: "基本形",
                basic_form: "ある",
                reading: "アル",
                pronunciation: "アル"
            },
            {
                surface_form: "と",
                pos: "助詞",
                pos_detail_1: "格助詞",
                pos_detail_2: "引用",
                pos_detail_3: "*",
                conjugated_type: "*",
                conjugated_form: "*",
                basic_form: "と",
                reading: "ト",
                pronunciation: "ト"
            },
            {
                surface_form: "考え",
                pos: "動詞",
                pos_detail_1: "自立",
                pos_detail_2: "*",
                pos_detail_3: "*",
                conjugated_type: "一段",
                conjugated_form: "連用形",
                basic_form: "考える",
                reading: "カンガエ",
                pronunciation: "カンガエ"
            },
            {
                surface_form: "て",
                pos: "助詞",
                pos_detail_1: "接続助詞",
                pos_detail_2: "*",
                pos_detail_3: "*",
                conjugated_type: "*",
                conjugated_form: "*",
                basic_form: "て",
                reading: "テ",
                pronunciation: "テ"
            },
            {
                pos: "動詞",
                pos_detail_1: "非自立",
                pos_detail_2: "*",
                pos_detail_3: "*",
                basic_form: "いる"
            }
        ]
    }
];
