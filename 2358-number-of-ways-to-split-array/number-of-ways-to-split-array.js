/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
    let count = []
    let sum = 0
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    for (let i = 0; i < nums.length; i++) {
        count.push(sum)
        sum -= nums[i]
    }
    let left = nums[0]
    for (let i = 1; i < count.length; i++) {
        if (left >= count[i]) {
            res += 1
        }
        left += nums[i]
    }
    return res
};