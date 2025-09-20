/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let ans = 0
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        let found = true
        for (let j = 0; j < word.length; j++) {
            const char = word[j]
            if (!allowed.includes(char)) {
                found = false
                break
            }
        }
        if (found) {
            ans++
        }
    }
    return ans
};