/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
    let max = 1
    let left = 0
    let used = 0
    for (let i = 0; i < nums.length ; i++) {
        while ((used & nums[i]) != 0) {
            used ^= nums[left]
            left++
        }
        used |= nums[i]
        max = Math.max(max, i - left + 1)
    }
    return max
};