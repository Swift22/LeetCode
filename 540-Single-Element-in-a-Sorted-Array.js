/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let left = 0
    let right = nums.length

    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (mid % 2 !== 0) mid--;
        let val = nums[mid]
        if (val != nums[mid + 1] && val != nums[mid - 1]) {
            return val
        } else if (val == nums[mid - 1]) {
            right = mid
        } else {
            left = mid + 1
        }
    }

};