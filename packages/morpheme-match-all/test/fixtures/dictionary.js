// MIT © 2016 azu
"use strict";
module.exports = [
    {
        // https://azu.github.io/morpheme-match/?text=解析(することができます)。
        message: `"することができる"は有害 http://qiita.com/takahi-i/items/a93dc2ff42af6b93f6e0`,
        tokens: [
            {
                "surface_form": "する",
                "pos": "動詞",
                "pos_detail_1": "自立",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "サ変・スル",
                "conjugated_form": "基本形",
                "basic_form": "する",
                "reading": "スル",
                "pronunciation": "スル"
            },
            {
                "surface_form": "こと",
                "pos": "名詞",
                "pos_detail_1": "非自立",
                "pos_detail_2": "一般",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "こと",
                "reading": "コト",
                "pronunciation": "コト"
            },
            {
                "surface_form": "が",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "pos_detail_2": "一般",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "が",
                "reading": "ガ",
                "pronunciation": "ガ"
            },
            {
                "surface_form": "、",
                "_skippable": true,
            },
            {
                "pos": "動詞",
                "pos_detail_1": "自立",
                "conjugated_type": "一段",
                "conjugated_form": "連用形",
                "basic_form": "できる",
            }
        ]
    }
];
