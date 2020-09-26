function palindrome(str) {
  const validChars = str.toLowerCase().match(/[a-z0-9]/gi);
  if (!validChars) {
    return false;
  }
  const reversedChars = [...validChars].reverse();
  return validChars.join('') === reversedChars.join('');
}

const tests = [
  palindrome('eye'),
  palindrome('BoB'),
  palindrome('cat'),
  palindrome('^_^'),
  palindrome('hi there'),
];
console.log(tests);
