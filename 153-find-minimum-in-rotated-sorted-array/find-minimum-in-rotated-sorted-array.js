/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0
    let right = nums.length - 1
    let res = Infinity
    while (left <= right) {
        if (nums[left] < nums[right]) {
            res = Math.min(res, nums[left])
            break
        }
        const mid = Math.floor((left + right) / 2)
        res = Math.min(nums[mid], res)
        if (nums[mid] >= nums[left]) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return res
};