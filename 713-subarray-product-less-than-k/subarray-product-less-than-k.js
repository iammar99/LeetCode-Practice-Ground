/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let product = 1;

        for (let j = i; j < nums.length; j++) {
            product *= nums[j]; // Update product dynamically
            if (product >= k) break; // Stop further checks if product exceeds or equals k
            count++; // Increment count for a valid subarray
        }
    }

    return count;
    // let res = []
    // for (let i = 0; i < nums.length; i++) {
    //     let arr = [nums[i]]
    //     let product = arr.reduce((acc, curr) => acc * curr, 1)
    //     if (product < k) {
    //         res.push(arr)
    //     }
    //     if (nums[i + 1] == undefined) {
    //         break
    //     }
    //     arr = [nums[i]]
    //     for (let j = i + 1; j < nums.length; j++) {
    //         arr.push(nums[j])
    //         product = arr.reduce((acc, curr) => acc * curr, 1)
    //         if (product < k) {
    //             res.push([...arr])
    //         }
    //     }
    // }
    // return res.length
};