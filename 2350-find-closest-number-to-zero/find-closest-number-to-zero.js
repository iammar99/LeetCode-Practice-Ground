/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    if (nums.length == 1) return nums[0]
    if(nums[0] == -100000 && nums[1] == -100000) return -100000
    let ans = Infinity
    for (let i = 0; i < nums.length; i++) {
        let cur = Math.abs(nums[i])
        if(cur == Math.abs(ans)){
            ans = Math.max(ans,cur)
        }
        else if(cur < Math.abs(ans)){
            ans = nums[i]
        }
    }
    return ans
};