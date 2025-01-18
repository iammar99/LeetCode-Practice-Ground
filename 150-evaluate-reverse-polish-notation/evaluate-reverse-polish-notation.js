/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    let operations = ["+", "-", "*", "/"]
    for (let i = 0; i < tokens.length; i++) {
        if (operations.includes(tokens[i])) {
            let a = parseInt(stack.pop())
            let b = parseInt(stack.pop())
            let operator = tokens[i]
            let ans = 0
            if (operator === "+") {
                ans = b + a;
            } else if (operator === "-") {
                ans = b - a;
            } else if (operator === "*") {
                ans = b * a;
            } else if (operator === "/") {
                ans = b / a;
            }
            stack.push(ans)
        }
        else {
            stack.push(tokens[i])
        }
    }
    return parseInt(stack[0])
};