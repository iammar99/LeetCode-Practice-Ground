/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let map = new Map()
    for(let i = 0 ; i < nums.length ; i++){
        map.set(nums[i],(map.get(nums[i])||0)+1)
    }
    for(const [key , val] of map){
        if (val > 2){
            return false
        }
    }
    return true
};