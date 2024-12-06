/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i])
        if (banned.includes(arr[i])) {
            stack.pop()
        }
    }
    let sum = 0;
    let count = 0;
    for (let i = 0; i < stack.length; i++) {
        if (sum + stack[i] <= maxSum) {
            count++
            sum += stack[i]
        }
        else {
            break
        }
    }
    return count;
};