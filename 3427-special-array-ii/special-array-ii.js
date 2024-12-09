/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
    let prefix = Array(nums.length).fill(0)
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1]
        if ((nums[i] + nums[i - 1]) % 2 == 0) {
            prefix[i]++;
        }
    }
    let res = []
    for (let i = 0; i < queries.length; i++) {
        const [start, end] = queries[i]
        const count = prefix[end] - (start > 0 ? prefix[start] : 0)
        res.push(count == 0)
    }
    return res
};