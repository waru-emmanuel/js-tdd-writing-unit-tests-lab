// Your code here
// Helper function to reverse a string
function reverse(string) {
    return string.split("").reverse().join("");
  }
  
  // Main function to check if a word is a palindrome
  export function isPalindrome(word) {
    // Validate input to ensure it contains only alphabetic characters
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Invalid input");
    }
  
    // Convert the word to lowercase for case-insensitive comparison
    const lowerCaseWord = word.toLowerCase();
  
    // Check if the word is the same when reversed
    return lowerCaseWord === reverse(lowerCaseWord);
  }
  