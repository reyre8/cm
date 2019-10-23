const { isNatural } = require('./util');
const { TriangleException } = require('./exception');

module.exports = {
  calcTriangleArea: (param1, param2, param3) => {
    if (
      typeof param1 === 'undefined' ||
      typeof param2 === 'undefined' ||
      typeof param3 === 'undefined'
    )
      throw new TriangleException(
        'Function calcTriangleArea requires three (3) parameters.'
      );

    if (!isNatural(param1) || !isNatural(param2) || !isNatural(param3))
      throw new TriangleException(
        'The parameters provided should be positive non-float numbers (i.e. 1, 20).'
      );

    // Calculate half-perimeter
    const s = (param1 + param2 + param3) / 2;

    // Calculate and return area
    return Math.sqrt(s * (s - param1) * (s - param2) * (s - param3));
  }
};
