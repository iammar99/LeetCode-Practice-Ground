/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let res = []
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i].includes(words[j])) {
                res.push(words[j])
            }
            if (words[j].includes(words[i])) {
                res.push(words[i])
            }
        }
    }
    let set = new Set(res)
    res = new Array(...set)
    return res
};