/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let result = 0
    let i = 0
    let currentSum = 0
    while (i < k) {
        currentSum += arr[i]
        i++
    }
    i = 0
    let j = i + k - 1
    while (j < arr.length) {
        let avg = currentSum / k
        if (avg >= threshold) {
            result++
        }
        currentSum -= arr[i]
        i++
        j++
        currentSum += arr[j]
    }
    return result
};