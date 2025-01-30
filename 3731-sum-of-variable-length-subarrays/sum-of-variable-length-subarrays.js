/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
    let subArrays = []
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        let start = Math.max(0, i - nums[i])
        let arr = nums.slice(start, i + 1)
        subArrays.push(arr)
    }
    for (let i = 0; i < subArrays.length; i++) {
        for (let j = 0; j < subArrays[i].length; j++) {
            ans += subArrays[i][j]
        }
    }
    return ans
};