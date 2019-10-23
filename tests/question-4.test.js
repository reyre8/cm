const { getMostCommon } = require('./../code/question-4.js');

describe('Test - Question-4: getMostCommon()', () => {
  it('Should return a collection (array) with values [4, 5].', () => {
    const param = [5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4];
    const expected = [4, 5];
    expect(getMostCommon(param)).toStrictEqual(expected);
  });
  it('Should return a collection (array) with values [1].', () => {
    const param = [1, 2, 3, 4, 5, 1, 6, 7];
    const expected = [1];
    expect(getMostCommon(param)).toStrictEqual(expected);
  });
  it('Should return a collection (array) with values [1, 2, 3, 4, 5, 6, 7].', () => {
    const param = [1, 2, 3, 4, 5, 6, 7];
    const expected = [1, 2, 3, 4, 5, 6, 7];
    expect(getMostCommon(param)).toStrictEqual(expected);
  });
  it('Should return a collection (array).', () => {
    const param = [1, 2, 3];
    expect(Array.isArray(getMostCommon(param))).toBe(true);
  });
  it('Should throw Error, when parameter is not array.', () => {
    const param = 1;
    expect(() => {
      getMostCommon(param);
    }).toThrowError(
      Error(
        'The parameter provided should be an array of natural numbers (i.e. [1, 2, 3]).'
      )
    );
  });
  it('Should throw Error, when parameter is not an array of natural numbers.', () => {
    const param = [1, 2, null];
    expect(() => {
      getMostCommon(param);
    }).toThrowError(
      Error(
        'The parameter provided should be an array of natural numbers (i.e. [1, 2, 3]).'
      )
    );
  });
});
