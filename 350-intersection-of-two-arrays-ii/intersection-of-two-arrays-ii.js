/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let left_pointer = 0
    let right_pointer = 0
    let res = []
    while (left_pointer < nums1.length && right_pointer < nums2.length) {
        if (nums1[left_pointer] == nums2[right_pointer]) {
            res.push(nums2[right_pointer])
            right_pointer++
            left_pointer++
        }
        else if (nums1[left_pointer] < nums2[right_pointer]) {
            left_pointer++
        }
        else {
            right_pointer++
        }
    }
    console.log(left_pointer, right_pointer)
    return res
};