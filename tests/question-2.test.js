const { getPositiveDivisors } = require('./../code/question-2.js');

describe('Test - Question-2: getPositiveDivisors()', () => {
  it('Should return a collection (array).', () => {
    const param = 10;
    expect(Array.isArray(getPositiveDivisors(param))).toBe(true);
  });
  it('Should return the collection [1, 2, 5, 10], if parameter is 10.', () => {
    const param = 10;
    const expected = [1, 2, 5, 10];
    expect(getPositiveDivisors(param)).toEqual(expected);
  });
  it('Should throw Error, when parameter is not natural numbers.', () => {
    const param = 3.123;
    expect(() => {
      getPositiveDivisors(param);
    }).toThrowError(
      Error(
        'The parameter provided should be a positive non-float number (i.e. 1, 20).'
      )
    );
  });
});
