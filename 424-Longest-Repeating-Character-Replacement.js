/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let map = {}
    let max = 0
    var longestWindow = 0
    let i = 0
    let j = 0
    while (j < s.length) {
        let r = s[j]
        if (!map[r]) {
            map[r] = 1
        } else {
            map[r]++
        }
        max = Math.max(max, map[r])

        while ((j - i + 1) - max > k) {
            const l = s.charAt(i)
            map[l] -= 1
            i++
        }
        longestWindow = Math.max(longestWindow, (j - i + 1))
        j++
    }
    return longestWindow
};