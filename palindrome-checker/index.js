//Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  const validChars = str.toLowerCase().match(/[a-z0-9]/gi);
  if (!validChars) {
    return false;
  }
  const reversedChars = [...validChars].reverse();
  return validChars.join('') === reversedChars.join('');
}

const testCases = [
  palindrome('eye'),
  palindrome('BoB'),
  palindrome('cat'),
  palindrome('^_^'),
  palindrome('hi there'),
];
console.log(testCases);
