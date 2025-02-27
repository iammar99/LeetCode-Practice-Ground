/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let length = strs[0].length
    let arr = []
    for (let i = 0; i < length; i++) {
        let str = ""
        for (let j = 0; j < strs.length; j++) {
            str += strs[j][i]
        }
        arr.push(str)
    }
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        for (let j = 0 ; j < str.length-1; j++) {
            if (str.charCodeAt(j) > str.charCodeAt(j + 1)) {
                count++
                break
            }
        }
    }
    return count
};