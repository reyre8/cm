const { isNatural, isArrayOfNatural } = require('./../code/util.js');

describe('Test - Util: isNatural()', () => {
  it('Should be true, when param is positive non-float number.', () => {
    const param = 1;
    expect(isNatural(param)).toBe(true);
  });
  it('Should be false, when param is float.', () => {
    const param = 1.123;
    expect(isNatural(param)).toBe(false);
  });
  it('Should be false, when param is zero (0).', () => {
    const param = 0;
    expect(isNatural(param)).toBe(false);
  });
  it('Should be false, when param is string.', () => {
    const param = '1';
    expect(isNatural(param)).toBe(false);
  });
  it('Should be false, when param is object.', () => {
    const param = {};
    expect(isNatural(param)).toBe(false);
  });
  it('Should throw Error, when param is undefined.', () => {
    expect(() => {
      isNatural();
    }).toThrowError(
      Error('Parameter to function isNatural should be defined.')
    );
  });
});
describe('Test - Util: isArrayOfNatural()', () => {
  it('Should be true, when param is a collection (array) of natural numbers.', () => {
    const param = [1, 2, 3, 2, 3, 6];
    expect(isArrayOfNatural(param)).toBe(true);
  });
  it('Should be false, when param is not a collection (array).', () => {
    const param = 10;
    expect(isArrayOfNatural(param)).toBe(false);
  });
  it('Should be false, when param is not a collection (array) of natural numbers.', () => {
    const param = [1, 2, '3', 'b'];
    expect(isArrayOfNatural(param)).toBe(false);
  });
  it('Should throw Error, when param is undefined.', () => {
    expect(() => {
      isArrayOfNatural();
    }).toThrowError(
      Error('Parameter to function isArrayOfNatural should be defined.')
    );
  });
});
