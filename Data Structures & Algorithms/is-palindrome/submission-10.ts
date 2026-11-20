class Solution {
    isAlphanumerical(char: string): boolean {
        if (
            (char >= '0' && char <= '9') ||
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z')
        ) {
            return true
        }
        return false;
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // use two pointers
        let l = 0;
        let r = s.length - 1;
        // don't store anything
        // skip over non alphanumeric characters

        // s="tab a cat"

        while (l < r) {
            // check if both characters are alphanumerical
            if (this.isAlphanumerical(s[l]) && this.isAlphanumerical(s[r])) {
                if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                    return false;
                }
                // if lowercase of each is not a match
                    // return false
                // else if it is a match
                    // move pointers

                l++
                r--
            } else {
                if (!this.isAlphanumerical(s[l])) {
                    l++
                }

                if (!this.isAlphanumerical(s[r])) {
                    r--
                }
            }
                // if they are
                    // move on to the next two characters
                        // l++
                        // r--
                // if not
                    // check if left character is alphanumerical
                        // if not
                            // skip
                            // l++
                        // if yes
                            // do nothing to l
                    // check if right character is alphanumerical
                        // if not
                            // skip
                            // r--
                        // if yes
                            // do nothing to r
        }

// Got to end of loop safely without returning false, so must be true
        return true;
    }
}
