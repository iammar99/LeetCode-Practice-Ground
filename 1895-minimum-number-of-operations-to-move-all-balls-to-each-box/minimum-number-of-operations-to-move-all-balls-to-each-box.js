/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    let ones = []
    let ans = []
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] == "1") {
            ones.push(i)
        }
    }
    for (let i = 0; i < boxes.length; i++) {
        let sum = 0
        for (let j = 0; j < ones.length; j++) {
            let dist = Math.abs(i - ones[j])
            sum += dist
        }
        ans.push(sum)
    }
    return ans
};