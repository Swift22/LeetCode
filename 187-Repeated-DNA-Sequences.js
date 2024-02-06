/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    if (s.length <= 10) return []
    const map = new Map()
    const result = []
    for (let i = 0; i < s.length; i++) {
        let j = i + 10;
        if (j <= s.length) {
            const subString = s.slice(i, j)
            if (map.has(subString)) {
                map.set(subString, map.get(subString) + 1)
                if (map.get(subString) <= 2)
                    result.push(subString)
            } else {
                map.set(subString, 1)
            }
        }
    }
    return result
};