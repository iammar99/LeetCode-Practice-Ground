/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
    let map = new Map()
    let ans = 0
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let prod = nums[i] * nums[j]
            ans += (map.get(prod) || 0)
            map.set(prod, (map.get(prod) || 0) + 1)
        }
    }
    return ans * 8
};