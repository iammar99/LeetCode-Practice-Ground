/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++
        }
        else {
            map[nums[i]] = 1
        }
    }
    let count = 0
    let max = -Infinity
    console.log(map)
    for (const [key, val] of Object.entries(map)) {
        console.log(key, val)
        max = Math.max(max, val)
    }

    for (const [key, val] of Object.entries(map)) {
        if (val === max) {
            count++
        }
    }
    return count * max
};