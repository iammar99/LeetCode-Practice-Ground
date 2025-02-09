/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    let map = new Map()
    let n = nums.length 
    let good = 0
    let total = n * ((n-1)/2)
    for(let i = 0 ; i < nums.length ; i++){
        map.set(nums[i]-i,(map.get(nums[i]-i)||0)+1)
    }
    for (let count of map.values()) {
        good += (count * (count - 1)) / 2;
    }
    return total - good
};