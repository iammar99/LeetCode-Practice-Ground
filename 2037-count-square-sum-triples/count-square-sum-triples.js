/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
    let ans = 0
    for (let i = 3; i < n; i++) {
        let sqA = i * i
        for (let j = 3; j < n; j++) {
            let sqSum = sqA + j * j
            let c = Math.floor(Math.sqrt(sqSum))
            if (c > n) {
                break
            }
            if (c * c == sqSum) {
                ans++
            }
        }
    }
    return ans
};