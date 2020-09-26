//Convert the given number into a roman numeral.

const { formatResultsErrors } = require('jest-message-util');

function convertToRoman(num) {
  const numeralParts = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  //1, 5, 10, 50, 100, 500, 1000
  let result = [];
  //---Breaking the number down:---
  //TODO: Can move this below to its own function to abstract away!
  let remaining = num;
  let thousands = Math.floor(remaining / 1000);
  remaining = remaining % 1000;
  let hundreds = Math.floor(remaining / 100);
  remaining = remaining % 100;
  let tens = Math.floor(remaining / 10);
  let ones = remaining % 10;
  console.log({ thousands, hundreds, tens, ones });
  //---thousands---:
  //---hundreds---:
  //---tens---:
  while (tens > 0) {
    switch (true) {
      case tens === 9:
        result = [...result, numeralParts[3], numeralParts[4]];
        tens = 0;
        break;
      case tens > 5 && tens < 9:
        result = [
          ...result,
          numeralParts[3],
          ...new Array(tens - 5).fill(numeralParts[2]),
        ];
        tens = 0;
        break;
      case tens === 5:
        result = [...result, numeralParts[3]];
        tens = 0;
        break;
      case tens === 4:
        result = [...result, numeralParts[2], numeralParts[3]];
        tens = 0;
        break;
      case tens < 4:
        result = [...result, numeralParts[2]];
        break;
      default:
        result = result;
        console.log('default case');
    }
    tens -= 1;
  }
  //---ones---:
  while (ones > 0) {
    switch (true) {
      case ones === 9:
        result = [...result, numeralParts[0], numeralParts[2]];
        ones = 0;
        break;
      case ones > 5 && ones < 9:
        result = [
          ...result,
          numeralParts[1],
          new Array(ones - 5).fill(numeralParts[0]),
        ];
        ones = 0;
        break;
      case ones === 5:
        result = [...result, numeralParts[1]];
        ones = 0;
        break;
      case ones === 4:
        result = [...result, numeralParts[0], numeralParts[1]];
        ones = 0;
        break;
      case ones < 4:
        result = [...result, numeralParts[0]];
        break;
      default:
        result = result;
        console.log('default case');
    }
    ones -= 1;
  }
  return result.join('');
}

module.exports = convertToRoman;
