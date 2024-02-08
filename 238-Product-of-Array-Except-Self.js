/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    var multsLeft = []
    var multsRight = []
    let prodLeft = 1
    let prodRight = 1
    let j = nums.length - 1
    for (var i = 0; i < nums.length; i++) {
        multsLeft.push(prodLeft)
        multsRight.push(prodRight)
        prodLeft *= nums[i]
        prodRight *= nums[j]
        j--
    }
    j = nums.length - 1
    for (var i = 0; i < nums.length; i++) {
        nums[i] = multsLeft[i] * multsRight[j]
        j--
    }
    return nums
};