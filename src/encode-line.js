/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const tmp = str.split('');
  let res = '';
  for (let i = 0; i < tmp.length; i++) {
    const ch = tmp[i];
    let count = 1;
    while (i + 1 < tmp.length && ch === tmp[i + 1]) {
      count++;
      i++;
    }
    res += count === 1 ? ch : `${count}${ch}`;
  }
  return res;
}

module.exports = {
  encodeLine
};
