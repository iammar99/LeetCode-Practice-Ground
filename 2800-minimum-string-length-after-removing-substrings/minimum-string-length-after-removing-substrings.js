/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let stack = []
    for (let i in s) {
        if (s[i] == "B" && stack[stack.length - 1] == "A") {
            stack.pop()
            i++
            // break
        }
        else if (s[i] == "D" && stack[stack.length - 1] == "C") {
            stack.pop()
            i++
        }
        else {
            stack.push(s[i])
        }
    }
    return stack.length
};