/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    let ans = 0
    let prev = values[0]
    for (let i = 1; i < values.length; i++) {
        ans = Math.max(ans, prev + values[i] - i)
        prev = Math.max(prev, values[i] + i)
    }
    return ans
};