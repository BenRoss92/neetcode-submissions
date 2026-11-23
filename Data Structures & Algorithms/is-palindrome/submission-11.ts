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
        // create function to check if is alphanumerical

        // skip alphanumerical chars
        // two pointers
        // lowercase both sides when doing match

        let leftPointer = 0;
        let rightPointer = s.length - 1

        while (leftPointer < rightPointer) {
            // check if left pointer char and right pointer char are both alphanumerical
            const leftChar = s[leftPointer]
            const rightChar = s[rightPointer]
            if (this.isAlphanumerical(leftChar) && this.isAlphanumerical(rightChar)) {
                if (leftChar.toLowerCase() === rightChar.toLowerCase()) {
                    leftPointer++
                    rightPointer--
                } else {
                    return false
                }
            } else {
                if (!this.isAlphanumerical(leftChar)) {
                    leftPointer++
                }

                if (!this.isAlphanumerical(rightChar)) {
                    rightPointer--
                }
            }
                // if they are both alphanumerical
                    // check that their lower cases match
                        // if yes, move both pointers
                        // if not, return false
                // if they aren't both alphanumerical
                    // check if left pointer is alphanumerical
                        // if not, move left pointer
                    // check if right pointer is alphanumerical
                        // if not, move right pointer

        }

        return true

        // return true - if gets to end of loop without returning false

    }
}
