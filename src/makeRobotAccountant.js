'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (first) => (second) => {
    count++;

    if (count <= 3) {
      return first + second;
    }

    return count % 2 === 0 ? 'Bzzz... Error!' : first + second;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
