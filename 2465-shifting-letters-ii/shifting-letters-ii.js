/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
    let arr = s.split("")
    let count = new Array(s.length + 1).fill(0)
    for (const [start, end, direction] of shifts) {
        const value = direction === 1 ? 1 : -1;
        count[start] += value;
        count[end + 1] -= value;
    }
    for (let i = 1; i < s.length; i++) {
        count[i] += count[i - 1];
    }
    for (let i = 0; i < arr.length; i++) {
        const oldIndex = alphabets.indexOf(arr[i]);
        let index = (count[i] + oldIndex) % 26;
        if (index < 0) {
            index += 26;
        }
        arr[i] = alphabets[index];
    }
    return arr.join("")
};