/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == \+\) {
            let y = stack.pop()
            let x = stack.pop()
            stack.push(x + y)
        } else if (tokens[i] == \*\) {
            let y = stack.pop()
            let x = stack.pop()
            stack.push(x * y)
        } else if (tokens[i] == \/\) {
            let y = stack.pop()
            let x = stack.pop()
            stack.push(Math.trunc(x/y))
            
        } else if (tokens[i] == \-\) {
            let y = stack.pop()
            let x = stack.pop()
            stack.push(x - y)
        } else {
            stack.push(parseFloat(tokens[i]))
        }
    }
    return stack[0]

};