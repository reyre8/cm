const { calcTriangleArea } = require('./../code/question-3.js');
const { TriangleException } = require('./../code/exception');

describe('Test - Question-3: calcTriangleArea()', () => {
  it('Should return 6, if parameters are 3, 4 and 5.', () => {
    const param1 = 3;
    const param2 = 4;
    const param3 = 5;
    const expected = 6;
    expect(calcTriangleArea(param1, param2, param3)).toBe(expected);
  });
  it('Should throw TriangleException, when parameters are undefined.', () => {
    expect(() => {
      calcTriangleArea();
    }).toThrow(
      new TriangleException(
        'Function calcTriangleArea requires three (3) parameters.'
      )
    );
  });
  it('Should throw TriangleException, when parameters are not natural numbers.', () => {
    expect(() => {
      calcTriangleArea('1', null, 3);
    }).toThrow(
      new TriangleException(
        'The parameters provided should be positive non-float numbers (i.e. 1, 20).'
      )
    );
  });
});
