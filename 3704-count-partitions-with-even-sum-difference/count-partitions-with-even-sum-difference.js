/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
   let total = nums.reduce((acc, curr) => acc + curr, 0);
    let left = 0;
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) { 
        left += nums[i];
        let right = total - left;
         if ((left + right) % 2 === 0) {
            count++;
        }
    }

    return count;
};