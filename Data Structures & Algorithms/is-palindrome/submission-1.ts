class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
  // Try the reverse string solution in 10-15 mins

  // Check if alphanum
  function isAlphaNumeric(char: string): boolean {
    // If is A-Z or a-z or 0-9
    if (
      (char >= "0" && char <= "9") ||
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z")
    ) {
      return true;
    } else {
      return false;
    }
  }

  let newString = "";

  // Before reversing, get rid of non-alphanumeric chars (spaces, punctuation)
  // Loop over string
  for (let x = 0; x < s.length; x++) {
    if (isAlphaNumeric(s[x] as string)) {
      newString += s[x];
    }
  }
  // Add alphanum chars to new string

  const formattedString = newString.toLowerCase();

  if (formattedString === formattedString.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
  // Then for new strig - Lowercase
  // Then check new string formatted === new string formatted and reversed
    }
}
