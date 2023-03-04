/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const new_arr = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i < len - 3) {
          if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev')
            i = i + 1;
        }
        i++;
        break;
      case '--discard-prev':
        if (new_arr.length) new_arr.pop();
        break;
      case '--double-next':
        if (i != len - 1) new_arr.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (i != 0) new_arr.push(arr[i - 1]);
        break;
      default:
        new_arr.push(arr[i]);
    }
  }
  return new_arr;
}

function type(value) {
  let regex = /^\[object (\S+?)\]$/;
  let matches = Object.prototype.toString.call(value).match(regex) || [];
  return (matches[1] || 'undefined').toLowerCase();
}

module.exports = {
  transform
};
