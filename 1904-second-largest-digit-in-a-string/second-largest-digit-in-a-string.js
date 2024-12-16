/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let nums = []
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s.charAt(i))) {
            nums.push(parseInt(s[i]))
        }
    }
    nums.sort((a, b) => a - b)
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] != nums[i-1] && nums[i] != undefined && nums[i-1] != undefined) {
            return nums[i - 1]
        }
    }
    return -1
};