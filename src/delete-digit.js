function deleteDigit(n) {
  const str = `${n}`;
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    const tmp = str.substr(0, i) + str.slice(i + 1);
    if (max < +tmp) {
      max = +tmp;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
