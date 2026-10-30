class Solution {
    isAnagram(s: string, t: string): boolean {
        // I'm assuming we don't know whether s and t will have the same length - if they don't have the same length then they're immediately not anagrams, so return false
        // if (s.length !== t.length) {
        //     return false;
        // }

    // Could sort both arrays ordered by letters ascending
    const sChars = s.split("").sort().join("");
    const tChars = t.split("").sort().join("");
    // Then check that one string equals the other string
    if (sChars === tChars) {
        return true;
    }

    return false;
        // If yes, return true
        // If not, return false

    }
}

// Check whether each character in string s is inside of string t, once only
// Every character from string s must be inside of string t, once only

// Ideas:
    // Could iterate over one string
    // For each character, check whether that character is included in the other array
    // If there is one character that is not included in the other array, return false immediately
    // If all are included, wait until looping is finished, then return true

    
