/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    let firstOccurence = new Array(26).fill(Number.MAX_VALUE)
    let lastOccurence = new Array(26).fill(-1)
    let res = 0
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 'a'.charCodeAt(0)
        firstOccurence[index] = Math.min(firstOccurence[index], i)
        lastOccurence[index] = i
    }
    for (let i = 0; i < firstOccurence.length; i++) {
        if (firstOccurence[i] < lastOccurence[i]) {
            const set = new Set(s.slice(firstOccurence[i] + 1, lastOccurence[i]))
            res += set.size
        }
    }
    return res
};