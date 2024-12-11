/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
    nums.sort((a, b) => a - b);
    let maxLength = 0
    let pointer = 0;

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] - nums[pointer] > 2 * k) {
            pointer++;
        }
        maxLength = Math.max(maxLength, i - pointer+1)
    }
    return maxLength;
};