/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
    let cnt = 0
    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + 1
        while (j < nums.length) {
            if ((nums[i] + nums[j]) < target) {
                cnt++
            }
            j++
        }
    }
    return cnt
};