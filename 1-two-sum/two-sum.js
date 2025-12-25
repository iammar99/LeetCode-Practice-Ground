/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        
        const complement = target - nums[i];
        const index = map.get(nums[i]);

        if (index !== undefined) return [index, i];
        map.set(complement, i);
    }
    return 0;
};