/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let res = 0
    let pointer = 0
        let maxFreq = 0
        let map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s.charAt(i), (map.get(s.charAt(i)) || 0) + 1)
        maxFreq = Math.max(maxFreq, map.get(s.charAt(i)))
        while ((i - pointer + 1) - maxFreq > k) {
            map.set(s.charAt(pointer), map.get(s.charAt(pointer)) - 1)
            pointer++
        }
        res = Math.max(res, i - pointer + 1)
    }
    return res
};