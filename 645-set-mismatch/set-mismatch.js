/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let set = new Set(nums)
    let max = Math.max(...nums)
    let miss
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            miss = i
        }
    }
    let count = new Array(max + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] += 1
    }
    let double = count.indexOf(2)
    return [double, miss]
};