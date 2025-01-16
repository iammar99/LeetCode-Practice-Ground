/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    const binary = n.toString(2)
    let ans = 0
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 1) ans++
    }
    return ans
};