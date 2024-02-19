/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let result = []
    let subArr = []
    
    let i = 0
    let j = 0
    while (i < nums.length) {
        while( subArr.length > 0 && subArr[0] < i -k +1){
            subArr.shift();
        }

        while( subArr.length > 0 && nums[subArr[subArr.length -1]] < nums[i]){
            subArr.pop()
        }

        subArr.push(i)

        if (i >= k - 1) {
            result.push(nums[subArr[0]]);
        }
        i++
    }
    return result
};
