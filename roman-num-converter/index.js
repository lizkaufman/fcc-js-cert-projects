//Convert the given number into a roman numeral.

const { formatResultsErrors } = require('jest-message-util');

function convertToRoman(num) {
  let result = [];
  const numeralParts = ['I', 'V', 'X'];
  while (num > 0) {
    switch (true) {
      case num === 9:
        result = [...result, numeralParts[0], numeralParts[2]];
        num = 0;
        break;
      case num > 5 && num < 9:
        result = [
          ...result,
          numeralParts[1],
          new Array(num - 5).fill(numeralParts[0]),
        ];
        num = 0;
        break;
      case num === 5:
        result = [...result, numeralParts[1]];
        num = 0;
        break;
      case num === 4:
        result = [...result, numeralParts[0], numeralParts[1]];
        num = 0;
        break;
      case num < 4:
        result = [...result, numeralParts[0]];
        break;
      default:
        result = result;
        console.log('default case');
    }
    num -= 1;
  }
  return result.join('');
}

module.exports = convertToRoman;
