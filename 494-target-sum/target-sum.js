/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    const helper = (nums, target, index, curSum) => {
        if (index == nums.length) {
            return curSum === target ? 1 : 0
        }
        let add = helper(nums, target, index + 1, curSum + nums[index])
        let sub = helper(nums, target, index + 1, curSum - nums[index])
        return add + sub
    }
    return helper(nums, target, 0, 0)
};