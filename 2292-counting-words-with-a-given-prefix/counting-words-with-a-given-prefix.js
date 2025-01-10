/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let count = 0
    for (let i = 0; i < words.length; i++) {
        const word = words[i].slice(0, pref.length)
        if (word == pref) count++
    }
    return count
};