/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let res = ""
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i][i] == "1"){
            res += "0"
        }
        else{
            res += "1"
        }
    }
    return res
};