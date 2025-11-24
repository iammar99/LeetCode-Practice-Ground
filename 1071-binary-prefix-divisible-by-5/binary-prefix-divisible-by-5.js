/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
    let val = 0
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        val = ((val * 2) + nums[i]) % 5
        arr.push(val == 0)
    }
    return arr
};