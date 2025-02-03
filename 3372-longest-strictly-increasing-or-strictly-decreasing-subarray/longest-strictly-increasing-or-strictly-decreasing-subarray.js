/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    if (nums.length == 1) return 1
    let inc = 0
    let dec = 0
    let ans = 0
    // Checking increasing
    let cur = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            cur++
        }
        else {
            cur = 1
        }
        inc = Math.max(cur, inc)
    }
    // Checking decreasing
    cur = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            cur += 1
        }
        else {
            cur = 1
        }
        dec = Math.max(cur, dec)
    }
    ans = Math.max(inc, dec)
    return ans
};