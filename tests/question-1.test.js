const { isNullorEmpty } = require('./../code/question-1.js');

describe('Test - Question-1: isNullorEmpty()', () => {
  it('Should be true, when parameter is null.', () => {
    const param = null;
    expect(isNullorEmpty(param)).toBe(true);
  });
  it('Should be true, when parameter is empty string "".', () => {
    const param = '';
    expect(isNullorEmpty(param)).toBe(true);
  });
  it('Should be true, when parameter is empty string with spaces "  ".', () => {
    const param = '   ';
    expect(isNullorEmpty(param)).toBe(true);
  });
  it('Should be false, when parameter is "a".', () => {
    const param = 'a';
    expect(isNullorEmpty(param)).toBe(false);
  });
  it('Should be false, when parameter is "null".', () => {
    const param = 'null';
    expect(isNullorEmpty(param)).toBe(false);
  });
  it('Should be false, when parameter is object.', () => {
    const param = {};
    expect(isNullorEmpty(param)).toBe(false);
  });
  it('Should be false, when parameter is boolean.', () => {
    const param = true;
    expect(isNullorEmpty(param)).toBe(false);
  });
  it('Should throw Error, when parameter is undefined.', () => {
    expect(() => {
      isNullorEmpty();
    }).toThrowError(
      Error('Parameter to function isNullorEmpty should be defined.')
    );
  });
});
