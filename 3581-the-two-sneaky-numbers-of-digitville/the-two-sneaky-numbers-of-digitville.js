/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    let map = {}
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            arr.push(nums[i])
        }
        else {
            map[nums[i]] = 1
        }
    }
    return arr
};