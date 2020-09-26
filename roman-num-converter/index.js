//Convert the given number into a roman numeral.

function convertToRoman(num) {
  let result = [];
  const romanOne = 'I';
  while (num > 0) {
    result.push(romanOne);
    num -= 1;
  }
  return result.join('');
}

module.exports = convertToRoman;
