class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // case insensitive
        // make them all lower case
        const lowerCaseStr = s.toLowerCase();

        const strArray = lowerCaseStr.split("");

        const formattedStrArr = [];

        // Remove any non alphanumeric characters
        for (let i = 0; i < strArray.length; i++) {
            // If is a number or a letter
            const char = strArray[i];
            if (
                (char >= "0" && char <= "9") ||
                (char >= "a" && char <= "z") ||
                (char >= "A" && char <= "Z")
            ) {
                formattedStrArr.push(char);
            }
        }

        //             [
        //   'w', 'a', 's', 'i', 't',
        //   'a', 'c', 'a', 'r', 'o',
        //   'r', 'a', 'c', 'a', 't',
        //   'i', 's', 'a', 'w'
        // ]

        // two pointers
        // i and j
        let i = 0;
        let j = formattedStrArr.length - 1;
        // i is 0
        // j is formattedStrArr.length - 1
        while (i < j) {
            if (formattedStrArr[i] !== formattedStrArr[j]) {
                return false;
            }
            i++;
            j--;
        }

        return true;
        // while i < j
        // if formattedStrArr[i] !== formattedStrArr[j]
        // return false

        // return true

        // OR:

        // find the mid point of the array
        // get the beginning slice using mid point
        // get the end slice using mid point

        // reverse one of the slices
        // make each slice into a string
        // if the reversed string Slice equals the other string slice, return true
        // else return false

        // Ignore any non alphanumeric characters
        // skip any of these characters
        // check if is a number or is a letter?

        // String will be 1 or more chars

        // Input: s = "Was it a car or a cat I saw?"

        // Output: true

        // Input: s = "tab a cat"

        // Output: false
    }
}
