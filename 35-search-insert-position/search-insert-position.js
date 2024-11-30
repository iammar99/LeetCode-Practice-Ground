/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left_pointer = 0
    let right_pointer = nums.length - 1
    for (let i = 0 ; i < nums.length ; i++)  {
        let mid = Math.floor((left_pointer + right_pointer) / 2)
        if (target <= nums[0]) {

            return 0;
        }
        if (nums[mid] == target) {
            return mid
        }
        else if (right_pointer <= left_pointer) {
            if (target > nums[left_pointer]) {

                return left_pointer + 1;
            } else {

                return left_pointer;
            }
        }
        else if (nums[mid] > target) {
            right_pointer = mid - 1;
        }
        else {
            left_pointer = mid + 1
        }
    }
};