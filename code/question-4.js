const { isArrayOfNatural } = require('./util');

module.exports = {
  getMostCommon: param => {
    if (!isArrayOfNatural(param))
      throw Error(
        'The parameter provided should be an array of natural numbers (i.e. [1, 2, 3]).'
      );

    const result = [];

    // Counting and calculating max appear
    const count = {};
    let max = 0;
    param.forEach(number => {
      count[number] = (count[number] || 0) + 1;
      if (count[number] > max) max = count[number];
    });

    // Getting values that appear the most
    Object.keys(count).forEach(number => {
      if (count[number] === max) result.push(parseInt(number, 10));
    });

    return result.sort();
  }
};
