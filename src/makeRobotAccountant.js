'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (first) => (second) => {
    count++;

    const sum = first + second;

    return count <= 3 || count % 2 !== 0 ? sum : 'Bzzz... Error!';
  };

  return getSum;
}

module.exports = makeRobotAccountant;
