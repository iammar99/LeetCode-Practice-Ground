/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++
        } else {
            map[arr[i]] = 1
        }
    }
    let ans = []
    for (const key in map) {
        const val = map[key]
        if (ans.indexOf(val) != -1) {
            return false
        }
        else {
            ans.push(val)
        }
    }
    return true
};