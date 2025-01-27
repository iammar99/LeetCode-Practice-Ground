/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let max = Math.max(...citations)
    let count = Array(max + 1).fill(0)
    for (let i = 0; i < citations.length; i++) {
        count[citations[i]]++
    }
    let newArr = []
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            newArr.push(i)
            count[i]--
        }
    }
    let ans = 0
    for (let i = 0; i < newArr.length; i++) {
        if (newArr.length - i <= newArr[i]) {
            return newArr.length - i
        }
    }
    return 0
};