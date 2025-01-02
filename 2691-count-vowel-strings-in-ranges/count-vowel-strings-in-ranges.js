/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
    let prefix = []
    let res = []
    let vowels = ["a", "e", "i", "o", "u"]
    let count = 0
    for (let i = 0; i < words.length; i++) {
        let firstChar = words[i][0]
        let lastChar = words[i][words[i].length - 1]
        if (vowels.includes(firstChar) && vowels.includes(lastChar)) {
            count += 1
        }
        prefix.push(count)
    }
    for (let i = 0; i < queries.length; i++) {
        res.push(prefix[queries[i][1]] - (prefix[queries[i][0] - 1] || 0))
    }
    return res
};