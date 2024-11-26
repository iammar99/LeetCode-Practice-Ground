/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0
    let arr = []
    for (let i = 0; i < s.length; i++) {
        let pointer = i
        while (!arr.includes(s.charAt(pointer))) {
            arr.push(s.charAt(pointer))
            pointer++
        }
        let cleanedArray = arr.filter(item => item != null && item !== "");
        max = Math.max(max, cleanedArray.length)
        arr = []
    }
    return max
};