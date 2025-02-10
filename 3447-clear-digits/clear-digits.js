/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
            stack.pop()
        } else {
            stack.push(s.charAt(i))
        }
    }
    return stack.join("")
};