/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const nums = [];
  arr.forEach((elem) => {
    if (elem !== -1) nums.push(+elem);
  });
  nums.sort((a, b) => a - b);
  const res = [];
  let inums = 0;
  arr.forEach((elem) => {
    if (elem === -1) res.push(elem);
    else res.push(nums[inums++]);
  });
  return res;
}

module.exports = {
  sortByHeight
};
