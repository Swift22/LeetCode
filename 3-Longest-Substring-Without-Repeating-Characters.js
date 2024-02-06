/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length == 0) return 0
    if (s.length == 1) return 1
    let maxCount = 0
    let i = 0
    let j = 0
    let set = new Set();
    while (j < s.length) {
        while (set.has(s[j])) {
            set.delete(s[i])
            i++
        }
        set.add(s[j])
        maxCount = Math.max(maxCount, j - i + 1)
        j++
    }

    return maxCount
}