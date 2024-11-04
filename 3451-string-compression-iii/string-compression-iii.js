/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    let count = 0
    let res = ""
    let char = word[0]
    for (let i = 0; i < word.length; i++) {
        if (count < 9 && word[i] == char) {
            count++
        }
        else {
            res += count + char
            char = word[i]
            count = 1
        }
    }
    res += count + char
    return res
};