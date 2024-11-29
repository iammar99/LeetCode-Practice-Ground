/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] != nums[i + 1] - 1) {
            return nums[i] + 1
        }
    }
    if (!nums.includes(0)) {
        return 0
    }
    return nums.length
};