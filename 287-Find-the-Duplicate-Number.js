/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let pointer = Math.abs(nums[i])
        if (nums[pointer] < 0) return pointer
        nums[pointer] = -nums[pointer]
    }
};