class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // Includes solution

        // Keep looking in the string until you find matching brackets next to each other - use a while loop to keep looking
        while (s.includes("{}") || s.includes("[]") || s.includes("()")) {

        // Remove all of these - replace any matching brackets with empty strings
        // JS method replace - if doesn't find it, will just return a copy of the original string
        // Reassign the string to be the new string with or without these brackets
        s = s.replace("()", '');
        s = s.replace("{}", '');
        s = s.replace("[]", '');
        }
 
        return s === "";

    }
}
