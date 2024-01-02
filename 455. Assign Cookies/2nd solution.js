/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  var counter = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  for (var j = 0; j < s.length; j++) {
    if (g[i] <= s[j]) {
      counter++;
      i++;
    }
  }
  return counter;
};
