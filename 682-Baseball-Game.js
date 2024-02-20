/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = []
    for (let i = 0; i < operations.length; i++) {
        let currOp = operations[i]
        if (currOp == \+\) {
            stack.push((stack[stack.length - 1] + stack[stack.length - 2]))
        } else if (currOp == \D\) {
            stack.push((stack[stack.length - 1] * 2))
        } else if (currOp == \C\) {
            stack.pop();
        } else {
            stack.push(parseInt(currOp))
        }
    }
    let sum = 0;
    stack.forEach(num => {
        sum += (num);
    })
    return sum
};