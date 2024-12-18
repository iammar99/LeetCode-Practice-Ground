/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let res = []
    for (let i = 0; i < prices.length - 1; i++) {
        res.push(prices[i])
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                res[i] = prices[i] - prices[j]
                break
            }
        }
    }
    res.push(prices[prices.length - 1])
    return res
};