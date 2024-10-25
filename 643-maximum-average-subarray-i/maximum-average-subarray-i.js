/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let max_sum = 0
    for (let i = 0 ; i  < k ; i++){
        max_sum += nums[i]
    }
    let curr_sum = max_sum
    for(let i = k ; i < nums.length ; i++){
        curr_sum += nums[i]
        curr_sum -= nums[i-k]
        max_sum = Math.max(curr_sum ,max_sum)
    }
    return max_sum / k
};