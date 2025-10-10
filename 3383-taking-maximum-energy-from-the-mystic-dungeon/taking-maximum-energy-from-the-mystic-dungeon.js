/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function (energy, k) {
    let dp = Array(energy.length).fill(0)
    let ans = -Infinity
    let n = energy.length
    for (let i = n - 1; i >= 0; i--) {
        dp[i] = energy[i] + ((i + k < n) ? dp[i + k] : 0)
        ans = Math.max(dp[i], ans)
    }
    return ans
};