/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let newName = ''

  if (!Array.isArray(members)) {
    return false
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      newName += members[i]
        .trim()
        .substr(0, 1)
    }
  }
  return newName
    .toLocaleLowerCase()
    .split('')
    .sort()
    .join('')
    .toUpperCase()
}

module.exports = {
  createDreamTeam
};
