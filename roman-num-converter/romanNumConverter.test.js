const convertToRoman = require('./index');

describe('Converting one-digit numbers to Roman numerals', () => {
  test(`convertToRoman(2) should return 'II'`, () => {
    const expected = 'II';
    const actual = convertToRoman(2);
    expect(actual).toBe(expected);
  });
  test(`convertToRoman(3) should return 'III'`, () => {
    const expected = 'III';
    const actual = convertToRoman(3);
    expect(actual).toBe(expected);
  });
  test(`convertToRoman(4) should return 'IV'`, () => {
    const expected = 'IV';
    const actual = convertToRoman(4);
    expect(actual).toBe(expected);
  });
  test(`convertToRoman(5) should return 'V'`, () => {
    const expected = 'V';
    const actual = convertToRoman(5);
    expect(actual).toBe(expected);
  });
  test(`convertToRoman(6) should return 'VI'`, () => {
    const expected = 'VI';
    const actual = convertToRoman(6);
    expect(actual).toBe(expected);
  });
  test(`convertToRoman(9) should return 'IX'`, () => {
    const expected = 'IX';
    const actual = convertToRoman(9);
    expect(actual).toBe(expected);
  });
});
describe('Converting two-digit numbers to Roman numerals', () => {
  test(`convertToRoman(10) should return 'X'`, () => {
    const expected = 'X';
    const actual = convertToRoman(10);
    expect(actual).toBe(expected);
  });
  test(`convertToRoman(23) should return 'XXIII'`, () => {
    const expected = 'XXIII';
    const actual = convertToRoman(23);
    expect(actual).toBe(expected);
  });
});
// describe('Converting three-digit numbers to Roman numerals', () => {});
// describe('Converting four-digit numbers to Roman numerals', () => {});
