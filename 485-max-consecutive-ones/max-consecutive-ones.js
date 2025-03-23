/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = -Infinity
    let cur = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            cur++
        }
        else {
            max = Math.max(cur, max)
            cur = 0
        }
        max = Math.max(cur, max)
    }
    return max
};