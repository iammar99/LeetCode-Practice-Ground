/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let ans = []
    let r1 = "qwertyuiop"
    let r2 = "asdfghjkl"
    let r3 = "zxcvbnm"
    for (let i = 0; i < words.length; i++) {
        let flag = true
        const word = words[i]
        const converted_word = words[i].toLowerCase()
        if (r1.includes(converted_word[0])) {
            for (let j = 0; j < converted_word.length; j++) {
                if (!r1.includes(converted_word[j])) {
                    flag = false
                    break
                }
            }
            if (flag) {
                ans.push(word)
            }
        }
        else if (r2.includes(converted_word[0])) {
            for (let j = 0; j < converted_word.length; j++) {
                if (!r2.includes(converted_word[j])) {
                    flag = false
                    break
                }
            }
            if (flag) {
                ans.push(word)
            }
        }
        else {
            for (let j = 0; j < converted_word.length; j++) {
                if (!r3.includes(converted_word[j])) {
                    flag = false
                    break
                }
            }
            if (flag) {
                ans.push(word)
            }
        }
    }
    return ans
};