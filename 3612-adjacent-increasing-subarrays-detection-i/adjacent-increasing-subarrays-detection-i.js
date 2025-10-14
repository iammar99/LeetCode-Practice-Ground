/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums, k) {
    let pre = 0
    let cur = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            cur++
        }
        else {
            pre = cur
            cur = 1
        }
        if (cur >= (2 * k) || (cur >= k && pre >= k)) {
            return true
        }
    }
    return false
};