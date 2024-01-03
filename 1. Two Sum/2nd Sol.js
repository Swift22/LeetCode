/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    var diff = target - nums[i];

    if (map.has(`${diff}`)) {
      return [i, map.get(`${diff}`)];
    }

    map.set(`${nums[i]}`, i);
  }
};
