/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let check = true;
  if (`${n}`.split('-').length !== 6) {
    check = false;
  }
  if (check) {
    const arr = `${n}`.split('-');
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i];
      if (elem.length !== 2) {
        check = false;
        break;
      }
      if (!((elem[0] >= '0' && elem[0] <= '9')
        || (elem[0] >= 'A' && elem[0] <= 'F'))) {
        check = false;
        break;
      }
      if (!((elem[1] >= '0' && elem[1] <= '9')
        || (elem[1] >= 'A' && elem[1] <= 'F'))) {
        check = false;
        break;
      }
    }
  }
  return check;
}

module.exports = {
  isMAC48Address
};
