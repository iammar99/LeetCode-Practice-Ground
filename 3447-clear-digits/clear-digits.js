/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])
        if (s.charCodeAt(i) <= 57 && s.charCodeAt(i) >= 48) {
            stack.pop()
            stack.pop()
        }
    }
    return stack.join("")
};