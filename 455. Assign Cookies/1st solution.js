/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  var counter = 0;
  var lowestCookie;
  var lowestCookieIndex = 0;
  var firstEncounter;

  for (var i = 0; i < g.length; i++) {
    lowestCookie = 0;
    firstEncounter = 0;

    for (var j = 0; j < s.length; j++) {
      if (s[j] >= g[i]) {
        if (firstEncounter == 0) {
          lowestCookie = s[j];
          lowestCookieIndex = j;
          firstEncounter = 1;
        } else if (lowestCookie > s[j]) {
          lowestCookieIndex = j;
          lowestCookie = s[j];
        }
      }
    }

    if (firstEncounter != 0) {
      counter++;
      s.splice(lowestCookieIndex, 1);
    }
  }
  return counter;
};
