/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let ans = []
    for (let i = 0; i < nums1.length; i++) {
        let max = -1
        if (nums2.indexOf(nums1[i]) != -1) {
            for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {

                if (nums1[i] < nums2[j]) {
                    max = nums2[j]
                    break
                }
            }
        }
        ans.push(max)
    }
    return ans
};