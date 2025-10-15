/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function (nums) {
    let cur = 1
    let pre = 0
    let ans = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            cur++
        }
        else {
            pre = cur
            cur = 1
        }
        ans = Math.max(
            ans,
            Math.floor(cur / 2),
            Math.min(pre, cur)
        );
    }
    return ans
};