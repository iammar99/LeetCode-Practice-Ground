/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    let arr = nums
    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = (arr[i] + arr[i + 1]) % 10
        }
        arr.pop()
    }
    return arr[0]
};