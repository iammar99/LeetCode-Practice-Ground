/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let ans = 0
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    let temp = 0
    for (let i = 0; i < nums.length - 1; i++) {
        temp += nums[i]
        let diff = Math.abs(temp - Math.abs(sum - temp))
        if (diff % 2 == 0) {
            ans++
        }
    }
    return ans
};