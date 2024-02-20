/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    if (k == 1) {
        let closestIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Math.abs(arr[i] - x) < Math.abs(arr[closestIndex] - x)) {
                closestIndex = i;
            }
        }
        return [arr[closestIndex]];
    }
    let weightArr = arr.map(a => Math.abs(a - x));
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += weightArr[i]
    }
    let min = {
        minVal: sum,
        i: 0,
    }
    let i = 1
    while (i + k <= weightArr.length) {
        sum = sum - weightArr[i - 1] + weightArr[i + k - 1];
        if (min.minVal > sum || (sum == min.minVal && arr[i] < arr[min.i])) {
            min.minVal = sum;
            min.i = i;
        }
        console.log(min, weightArr[i], \ : \, weightArr[i + k], \sum \, sum)
        i++
    }
    return arr.slice(min.i, min.i + k);
};