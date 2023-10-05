function isPalindrome(word) {
  // Convert the input word to lowercase to handle case-insensitivity
  word = word.toLowerCase();

  // Remove non-alphabet characters (only keep letters)
  const cleanWord = word.replace(/[^a-z]/g, '');

  // Reverse the cleaned word and compare it with the original word
  const reversedWord = cleanWord.split('').reverse().join('');

  return cleanWord === reversedWord;
}

/* 
  Add your pseudocode here:
  1. Convert the input word to lowercase to handle case-insensitivity.
  2. Remove non-alphabet characters (only keep letters).
  3. Reverse the cleaned word and compare it with the original word.
  4. If the cleaned word is the same as the reversed word, return true; otherwise, return false.
*/

/*
  Add written explanation of your solution here:
  The function first converts the input word to lowercase to ensure case-insensitivity.
  It then removes non-alphabet characters, leaving only the letters.
  After cleaning the word, it reverses the cleaned word and compares it with the original word.
  If the cleaned word is the same as the reversed word, it indicates a palindrome and returns true; otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
