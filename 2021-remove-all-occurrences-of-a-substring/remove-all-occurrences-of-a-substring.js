/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    let stack = []
    let n = part.length
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])
        const sub = stack.slice(-n).join("")
        if (sub == part) {
            stack.splice(stack.length - n, n)
        }
    }
    return stack.join("")
};