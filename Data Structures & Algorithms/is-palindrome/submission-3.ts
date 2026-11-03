class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // Try the two pointer solution in 10-15 mins

  function isAlphaNumerical(char: string): boolean {
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Two pointers - left and right
  let leftPointer = 0;
  let rightPointer = s.length - 1;
  // Start them at beginning and end of string
  // While the pointers are not at the same letter
  while (leftPointer < rightPointer) {
    if (!isAlphaNumerical(s[leftPointer] as string)) {
      leftPointer++;
      continue;
    }
    if (!isAlphaNumerical(s[rightPointer] as string)) {
      rightPointer--;
      continue;
    }

    if (s[leftPointer]?.toLowerCase() !== s[rightPointer]?.toLowerCase()) {
      return false;
    }

    if (s[leftPointer]?.toLowerCase() === s[rightPointer]?.toLowerCase()) {
      leftPointer++;
      rightPointer--;
      continue;
    }
  }

  return true;
  // Move both in each time:
  // A character is not alpha numberical
  // A character is alpha numberical and they are the same lower case character

  // If a character does match, keep going
  // If a character doesn't match, return false
    }
}
