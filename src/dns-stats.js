/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const map = new Map();
  domains.forEach((elem) => {
    const parts = elem.split('.');
    let tmp = '';
    for (let i = parts.length - 1; i >= 0; i--) {
      tmp += `.${parts[i]}`;
      if (map.has(tmp)) {
        map.set(tmp, map.get(tmp) + 1);
      } else {
        map.set(tmp, 1);
      }
    }
  });
  return Object.fromEntries(map);
}

module.exports = {
  getDNSStats
};
