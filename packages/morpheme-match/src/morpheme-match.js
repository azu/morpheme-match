// LICENSE : MIT
"use strict";
function matchToken(token, expectShape) {
    return Object.keys(expectShape).every(key => {
        // Ignore start with _ key
        if (key[0] === "_") {
            return true;
        }
        const actualValue = token[key];
        // support multiple value
        // "pos": ["名詞", "副詞"]
        const expectedValues = Array.isArray(expectShape[key]) ? expectShape[key] : [expectShape[key]];
        return expectedValues.some(expectedValue => {
            return actualValue === expectedValue;
        });
    })
}

/**
 * Create matcher function that return { match : true , tokens []} if match the `token`.
 * @param {Object[]} matchedTokens
 * @returns {function(token:Object)}
 */
module.exports = function createTokenMatcher(matchedTokens) {
    let currentTokenPosition = 0;
    const tokenCount = matchedTokens.length;
    const matchTokens = [];
    const matchSkipped = [];
    return (token, index) => {
        while (currentTokenPosition < tokenCount) {
            const expectedToken = matchedTokens[currentTokenPosition];
            if (matchToken(token, expectedToken)) {
                matchTokens.push(token);
                matchSkipped.push(false);
                currentTokenPosition += 1;
                break;
            } else if (expectedToken["_skippable"]) {
                currentTokenPosition += 1;
                matchSkipped.push(true);
            } else {
                // reset position
                matchTokens.length = 0;
                matchSkipped.length = 0;
                currentTokenPosition = 0;
                break;
            }
        }
        // match all tokens
        if (currentTokenPosition === tokenCount) {
            const tokens = matchTokens.slice();
            const skipped = matchSkipped.slice();
            // match -> reset
            currentTokenPosition = 0;
            matchTokens.length = 0;
            matchSkipped.length = 0;
            return {
                match: true,
                tokens: tokens,
                skipped: skipped,
            };
        }
        return {
            match: false
        };
    }
};
