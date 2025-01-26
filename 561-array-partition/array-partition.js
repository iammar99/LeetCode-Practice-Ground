/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let ans = 0
    // let max = Math.max(...nums)
    // let count = Array(max + 1).fill(0)
    // for (let i = 0; i < nums.length; i++) {
    //     count[nums[i]] += 1
    // }
    // let newArr = []
    // for (let i = 0; i < count.length; i++) {
    //     while (count[i] > 0) {
    //         newArr.push(i)
    //         count[i]--
    //     }
    // }
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length - 1; i += 2) {
        ans += Math.min(nums[i], nums[i + 1])
    }
    return ans
};