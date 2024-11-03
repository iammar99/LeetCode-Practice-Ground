/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let map = {}
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        res += map[nums[i]] || 0
        map[nums[i]] = (map[nums[i]] || 0) + 1
    }
    return res
};