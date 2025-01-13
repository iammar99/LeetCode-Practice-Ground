/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    if (s.length < 3) {
        return s.length
    }
    let count = new Map()
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        count.set(s[i], (count.get(s[i]) || 0) + 1)
    }
    for (let [key, val] of count) {
        while (val >= 3) {
            ans += 2
            val -= 2
        }
    }
    ans = s.length - ans
    return ans
};