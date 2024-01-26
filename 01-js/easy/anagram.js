/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let len1 = str1.length, len2 = str2.length;
  if (len1 != len2)
    return false;

  let formatString = (str) => str.replace(/[\W_]+/g, "").toLowerCase();
  str1 = formatString(str1);
  str2 = formatString(str2);
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  return str1 == str2;
}

module.exports = isAnagram;
