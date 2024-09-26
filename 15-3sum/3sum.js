/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
        let res = []
    nums.sort((a,b)=>a-b)
    for(let i = 0 ; i < nums.length ; i++){
        if(i>0 && nums[i]==nums[i-1]){
            continue
        }
        let left_pointer = i + 1
        let right_pointer = nums.length - 1
        while(left_pointer < right_pointer){
            let sum = nums[i] + nums[left_pointer] + nums[right_pointer]
            if(sum == 0){
                res.push([nums[i] , nums[left_pointer] , nums[right_pointer]])
            while(nums[left_pointer + 1] == nums[left_pointer]){
                left_pointer++
            }
            while(nums[right_pointer] == nums[right_pointer - 1]){
                right_pointer--
            }
            }
            if(sum > 0){
                right_pointer--
            }
            else{
                left_pointer++
            }
        }
    }
    return res
};