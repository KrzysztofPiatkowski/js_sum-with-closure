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

    if (count > 3) {
      return count % 2 === 0 ? 'Bzzz... Error!' : first + second;
    }
  };

  return getSum;
}

module.exports = makeRobotAccountant;
