/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    if (nums.length == 1) return nums[0]
    let sum = nums[0]
    let arr = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            sum += nums[i]
        }
        else {
            arr.push(sum)
            sum = nums[i]
        }
        if (i == nums.length - 1) {
            arr.push(sum)
        }
    }
    return Math.max(...arr)
};