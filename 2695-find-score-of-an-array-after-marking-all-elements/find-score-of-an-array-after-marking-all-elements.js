/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
    let ans = 0
    let used = Array(nums.length).fill(false)
    let indices = Array.from({length : nums.length},(_,i) => i).sort((a,b)=>nums[a]-nums[b]);
    for(let i = 0 ; i < indices.length ; i++){
        if(!used[indices[i]]){
            ans += nums[indices[i]]
            used[indices[i]] = true
            if(indices[i] > 0){
            used[indices[i]-1] = true
            }
            if(indices[i]+1< nums.length){
                used[indices[i]+1] = true
            }
        }
    }
    return ans
};