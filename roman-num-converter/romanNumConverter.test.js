const convertToRoman = require('./index');

const { TestResult } = require('@jest/types');

//   convertToRoman(2),✅
//   convertToRoman(3),✅
//   convertToRoman(4),
//   convertToRoman(5),
//   convertToRoman(44),
//   convertToRoman(68),
//   convertToRoman(400),
//   convertToRoman(500),
//   convertToRoman(501),
//   convertToRoman(1000),
//   convertToRoman(1004),
//   convertToRoman(1006),
//   convertToRoman(1023),
//   convertToRoman(2014),
//   convertToRoman(3999),

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
// describe('Converting two-digit numbers to Roman numerals', () => {});
// describe('Converting three-digit numbers to Roman numerals', () => {});
// describe('Converting four-digit numbers to Roman numerals', () => {});
