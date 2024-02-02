/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let freqArr = [0, 0, 0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            freqArr[0]++
        } else if (nums[i] == 1) {
            freqArr[1]++
        } else {
            freqArr[2]++
        }
    }


    let j = 0
    while (freqArr[j] == 0) j++
    for (let i = 0; i < nums.length; i++) {
        if (freqArr[j] > 0) {
            nums[i] = j
            freqArr[j]--
            while (freqArr[j] == 0) j++
        } else  {
            j++
        }
    }
};