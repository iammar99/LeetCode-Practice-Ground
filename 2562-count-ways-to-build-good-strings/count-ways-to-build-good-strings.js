/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
    const mod = 1e9 + 7;
    const dp = Array(high + 1).fill(0);
    dp[0] = 1; // Base case: 1 way to create an empty string

    for (let i = 0; i <= high; i++) {
        if (dp[i] > 0) {
            if (i + zero <= high) {
                dp[i + zero] = (dp[i + zero] + dp[i]) % mod;
            }
            if (i + one <= high) {
                dp[i + one] = (dp[i + one] + dp[i]) % mod;
            }
        }
    }

    let result = 0;
    for (let i = low; i <= high; i++) {
        result = (result + dp[i]) % mod;
    }
    return result;
};