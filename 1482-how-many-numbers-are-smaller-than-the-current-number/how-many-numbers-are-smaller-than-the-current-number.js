/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let max = Math.max(...nums)
    let count = Array(max + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++
    }
    let sortedArr = []
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sortedArr.push(i)
            count[i]--
        }
    }
    let res = []
    let map = new Map()
    let cnt = 0
    for (let i = 0; i < sortedArr.length; i++) {
        if (map.get(sortedArr[i]) == undefined) {
            map.set(sortedArr[i], cnt)
        }
        cnt++
    }
    for (let i = 0; i < nums.length; i++) {
        res.push(map.get(nums[i]))
    }
    return res
};