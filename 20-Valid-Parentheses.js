/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 != 0) return false
    let stack = []
    let map = {
        \]\: \[\,
        \}\: \{\,
        \)\: \(\,
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            if (stack && stack[stack.length - 1] == map[s[i]]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }
    return !stack.length
};