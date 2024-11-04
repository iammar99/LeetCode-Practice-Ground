/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] === s[i] && s[i] === s[i + 1]) {
            continue
        }
        else {
            stack.push(s[i])
        }
    }
    return stack.join("")
};