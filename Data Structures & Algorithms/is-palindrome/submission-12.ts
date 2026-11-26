class Solution {
    isAlphanumerical(char: string): boolean {
        if (
            (char >= '0' && char <= '9') ||
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z')
        ) {
            return true
        }

        return false
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        // use two pointers - one at beginning and one at end of string
        let leftIndex = 0
        let rightIndex = s.length - 1
        // left pointer
        // right pointer
        // left increases - leftIndex++
        // right decreases - rightIndex--

        // check whether a character is alphanumerical
            // if 0 to 9 or a to z or A to Z

        // If a pointer's char is not alphanumerical
            // skip the char check - move that single pointer
        
        // Use a while loop - while leftIndex < rightIndex
        while (leftIndex < rightIndex) {
            const leftChar = s[leftIndex]
            const rightChar = s[rightIndex]
            
            if (this.isAlphanumerical(leftChar) && this.isAlphanumerical(rightChar)) {
                if (leftChar.toLowerCase() === rightChar.toLowerCase()) {
                    leftIndex++
                    rightIndex--
                } else {
                    return false
                }
            } else {
                if (!this.isAlphanumerical(leftChar)) {
                    leftIndex++
                }

                if (!this.isAlphanumerical(rightChar)) {
                    rightIndex--
                }
            }
        }

        // If the loop did not return false, must be a valid palindrome - return true
        return true

        // If the leftIndex's char is alphanumerical and the rightIndex's char is alphanumerical
            // Check if the leftIndex's lowercase char matches the rightIndex's lowercase char
                // if yes, move both pointers
                // if not, return false
        // Else - if the following is false: the leftIndex's char is alphanumerical and the rightIndex's char is alphanumerical
            // If the leftIndex's char is not alphanumerical
                // move the leftIndex - leftIndex++
            // If the rightIndex's char is not alphanumerical
                // move the rightIndex - rightIndex--
        

        // Check if lowercase character on one side of string matches lowercase char on other side of string


        // Test cases:

        // "Was it a car or a cat I saw?"

        // "tab a cat"

        // "Abba"
    }
}
