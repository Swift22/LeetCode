/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = new Map();
  var i1, i2;
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]] == undefined) {
      map[nums[i]] = [i];
    } else {
      map[nums[i]].push(i);
    }
  }
  for (key in map) {
    var temp = target - key;
    i1 = map[key][0];
    if (map[temp] != undefined) {
      i2 = map[temp][0];
      if (map[temp].length > 1) {
        i2 = map[temp][1];
      }
      break;
    }
  }
  return [i1, i2];
};
