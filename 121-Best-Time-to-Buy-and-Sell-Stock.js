/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let i = 0
    let j = i + 1
    let diff = 0
    while (i <= j && j < prices.length) {
        if (prices[j] - prices[i] > diff && prices[i] < prices[j]) {
            diff = prices[j] - prices[i]
        }
        if (prices[i] > prices[j]) i++
        if (prices[i] <= prices[j]) j++
    }
    return diff
};