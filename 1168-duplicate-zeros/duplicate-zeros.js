/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        if (arr[i] == 0) {
            arr.splice(i + 1, 0, 0);
            i++
        }
    }
    arr.splice(length)
    return arr
};