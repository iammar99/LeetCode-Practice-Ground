/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let hashMap = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (hashMap.has(arr[i] * 2) || hashMap.has(arr[i] / 2)) {
            return true
        }
        hashMap.set(arr[i], i)
    }
    return false
};