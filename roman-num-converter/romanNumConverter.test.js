const convertToRoman = require('./index');

const { TestResult } = require('@jest/types');

// const testCases = [
//   convertToRoman(2),
//   convertToRoman(3),
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
// ];

describe('Converting two-digit numbers to Roman numerals', () => {
  test(`convertToRoman(2) should return 'II'`, () => {
    const expected = 'II';
    const actual = convertToRoman(2);
    expect(actual).toBe(expected);
  });
});
// describe('Converting three-digit numbers to Roman numerals', () => {});
// describe('Converting four-digit numbers to Roman numerals', () => {});
