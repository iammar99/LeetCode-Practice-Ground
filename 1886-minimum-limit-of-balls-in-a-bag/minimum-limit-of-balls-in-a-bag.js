/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
    const helperFunction = (nums,maxSiz , maxOperation) => {
        let operation  = 0
        for(let num of nums){
            operation += Math.floor((num-1)/maxSiz)
        }
        return operation <= maxOperation
    }
    let left = 1
    let right = Math.max(...nums)
    while(left < right){
        let mid = Math.floor((left+right)/2)
        if(helperFunction(nums,mid,maxOperations)){
            right = mid
        }
        else{
            left = mid + 1
        }
    }
    return left
};