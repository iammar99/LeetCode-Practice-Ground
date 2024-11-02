/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let left_pointer = 0
    let right_pointer = nums.length - 1
    let arr = [...nums]
    arr.sort((a, b) => a - b)
    while (left_pointer < right_pointer) {
        let sum = arr[left_pointer] + arr[right_pointer]
        if (sum == target) {
            let firstIndex = nums.indexOf(arr[left_pointer])
            nums[firstIndex] = "a"
            return [firstIndex, nums.indexOf(arr[right_pointer])]
        }
        else if (sum > target) {
            right_pointer--
        }
        else {
            left_pointer++
        }
    }
};