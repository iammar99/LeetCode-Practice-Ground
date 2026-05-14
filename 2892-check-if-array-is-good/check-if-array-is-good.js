/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    let n = nums.length
    if (n < Math.max(...nums)) return false
    const frequency = nums.filter(num => num === n - 1).length;
    if (frequency < 2) return false
    let newSet = new Set(nums)
    for (let i = 1; i < n; i++) {
        if (!newSet.has(i)) {
            console.log(i)
            return false
        }
    }
    return true
};