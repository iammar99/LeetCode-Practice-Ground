/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let right = 0
    let left = 0
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        right += nums[i]
    }
    for (let i = 1; i < nums.length; i++) {
        left += nums[i]
        right -= nums[i]
        if (Math.abs(right - left) % 2 == 0) {
            ans++
        }
    }
    return ans
};