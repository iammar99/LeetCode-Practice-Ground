/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if(nums.length == 0) return []
    let res = []
    let sub = []
    let range = []
    sub.push(nums[0])
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] + 1 == nums[i]) {
            sub.push(nums[i])
        }
        else {
            res.push(sub)
            sub = [nums[i]]
        }
    }
    res.push(sub)
    for (let i = 0; i < res.length; i++) {
        const arr = res[i]
        if (arr.length > 1) {
            console.log(arr)
            let start = arr[0]
            let end = arr[arr.length - 1]
            range.push(start + "->" + end)
        }
        else {
            range.push(JSON.stringify(arr[0]))
        }
    }
    return range
};