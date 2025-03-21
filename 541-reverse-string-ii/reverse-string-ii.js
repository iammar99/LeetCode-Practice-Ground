/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let slow = 0
    let fast = k
    let stack = []
    let arr = []
    while (fast <= s.length || slow < s.length) {
        while (slow < fast) {
            stack.push(s[slow])
            slow++
        }
        slow += k
        while (stack.length > 0) {
            arr.push(stack.pop())

        }
        while (fast < slow) {
            arr.push(s[fast])
            fast++
        }
        fast += k
    }
    return arr.join("")
};