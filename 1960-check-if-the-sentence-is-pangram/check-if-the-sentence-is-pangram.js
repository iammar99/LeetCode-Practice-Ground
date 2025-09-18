/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    if (sentence.length < 26) return false
    let arr = Array(26).fill(0)
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence.charCodeAt(i) - 97
        arr[char] += 1
    }
    return arr.indexOf(0) == -1
};