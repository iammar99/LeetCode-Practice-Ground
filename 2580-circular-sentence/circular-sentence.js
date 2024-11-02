/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    let firstChar = sentence[0]
    let ans = true
    for (let i = 0; i < sentence.length; i++) {
        let char = ""
        if (sentence[i + 1] == " " || sentence[i + 1] == undefined) {
            char = sentence[i]
        if (sentence[i + 2] == undefined) {
            ans = char == firstChar
        }
        else {
            ans = char == sentence[i + 2]
        }
        }
        if (ans == false) {
            return false
        }
    }
    return ans
};