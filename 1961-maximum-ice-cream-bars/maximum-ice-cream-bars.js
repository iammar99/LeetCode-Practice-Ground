/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    let ans = 0
    let max = Math.max(...costs)
    let count = Array(max + 1).fill(0)
    for (let i = 0; i < costs.length; i++) {
        count[costs[i]] += 1
    }
    let newArr = []
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            newArr.push(i)
            count[i]--
        }
    }
    let pointer = 0
    while (coins > 0 && pointer < newArr.length) {
        if (coins - newArr[pointer] < 0) break
        coins -= newArr[pointer]
        ans++
        pointer++
    }
    return ans
};