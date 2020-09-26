//Convert the given number into a roman numeral.

const { formatResultsErrors } = require('jest-message-util');

function convertToRoman(num) {
  const numeralParts = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  //1, 5, 10, 50, 100, 500, 1000
  let result = [];
  //---Breaking the number down:---
  let remaining = num;
  const thousands = Math.floor(remaining / 1000);
  remaining = remaining % 1000;
  const hundreds = Math.floor(remaining / 100);
  remaining = remaining % 100;
  const tens = Math.floor(remaining / 10);
  ones = remaining % 10;
  console.log({ thousands, hundreds, tens, ones });
  //thousands:
  //hundreds:
  //tens:
  //ones:
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
