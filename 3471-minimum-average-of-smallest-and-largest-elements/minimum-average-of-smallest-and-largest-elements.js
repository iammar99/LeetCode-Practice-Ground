/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    let arr = Array(Math.max(...nums) + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]] += 1
    }
    let sorted = []
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] > 0) {
            sorted.push(i)
            arr[i]--
        }
    }
    let avg = []
    let left = 0
    let right = sorted.length - 1
    while (left < right) {
        avg.push((sorted[left] + sorted[right]) / 2)
        left++
        right--
    }
    return Math.min(...avg)
};