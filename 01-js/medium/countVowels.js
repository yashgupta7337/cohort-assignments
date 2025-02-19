/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  str = str.replace(/[\W_]+/g, "").toLowerCase();
  str = str.split('');
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
      count++;
  }
  return count;
}

module.exports = countVowels;