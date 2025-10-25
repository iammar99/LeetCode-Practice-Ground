/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let prevMon = 1
    let prev = 1
    let money = 0
    for (let i = 1; i <= n; i++) {
        money += prev
        prev++
        if (i % 7 == 0) {
            prevMon++
            prev = prevMon
        }
    }
    return money
};