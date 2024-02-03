/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    n = n.toString()
    while (n != 1) {
        n = n.toString()
        let sum = 0
        for (let i = 0; i < n.length; i++) {
            sum += parseInt(n[i]) ** 2
        }
        n = sum
        if (n == 4) return false
    }
    return true
};