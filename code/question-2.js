const { isNatural } = require('./util');

module.exports = {
  getPositiveDivisors: param => {
    if (!isNatural(param))
      throw Error(
        'The parameter provided should be a positive non-float number (i.e. 1, 20).'
      );

    const collection = [];
    for (let i = 1; i <= param; i++) {
      if (param % i === 0) collection.push(i);
    }
    return collection;
  }
};
