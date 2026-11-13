class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // each string - 1 or more length
        // if s.length !== t.length
        if (s.length !== t.length) {
            return false
        }
        const sSorted = s.split("").sort().join("");
        const tSorted = t.split("").sort().join("");

        if (sSorted !== tSorted) {
            return false;
        }

        return true;
            // return false
        // else 
            // sort both words
            // check if they equal each other
                // if yes, return true
                // if no, return false

    }
}
