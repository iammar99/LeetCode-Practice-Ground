/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let max = Infinity
    let count = 0
    let cur = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            count++
        }
        if(nums[i]>0) {
            cur++
            count = Math.max(count, cur)
        }
    }
    return count
};