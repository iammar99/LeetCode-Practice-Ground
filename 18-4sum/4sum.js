/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let left = j + 1
            let right = nums.length - 1
            let newTarget = target - (nums[i] + nums[j])
            while (left < right) {
                let ans = nums[left] + nums[right]
                if (ans == newTarget) {
                    res.push([nums[left], nums[right], nums[i], nums[j]])
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++
                    right--
                }
                else if (ans > newTarget) {
                    right--
                }
                else {
                    left++
                }
            }
        }
    }
    return res
};