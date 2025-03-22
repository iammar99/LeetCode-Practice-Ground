/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let stack = []
    let res = []
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i)
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            stack.push(s.charAt(i))
        }
    }
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i)
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            res.push(stack.pop())
        }
        else {
            res.push(s.charAt(i))
        }
    }
    return res.join("")
};