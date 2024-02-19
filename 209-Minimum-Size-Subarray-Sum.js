/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let i = 0
    let j =0
    let sum = nums[i]
    let min = Infinity
    while (j < nums.length) {
        if (sum >= target) {
            min = Math.min(min, j - i + 1)
            sum -= nums[i]
            i++
        } else {
            j++
            sum += nums[j]
        }
    }
    return min == Infinity ? 0 : min
};