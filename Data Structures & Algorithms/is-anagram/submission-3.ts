class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false
        }

        // create a hashmap count for s
        const sCount = new Map();
        // create hashmpa count for t
        const tCount = new Map();

        const sArray = s.split("");
        const tArray = t.split("");

        // go through every char in each string - same length
        for (let i = 0; i < sArray.length; i++) {
            // for sCount
            // if char not in sCount, add it plus set count to 1
            // if char in sCount, set count of char to existing val + 1

            // for tCount
            // if char not in tCount, add it plus set count to 1
            // if char in tCount, set count of char to existing val + 1
            let sChar = sArray[i];
            let tChar = tArray[i];

            if (!sCount.has(sChar)) {
                sCount.set(sChar, 1)
            } else {
                let sVal = sCount.get(sChar)
                sCount.set(sChar, sVal + 1)
            }

            if (!tCount.has(tChar)) {
                tCount.set(tChar, 1)
            } else {
                let tVal = tCount.get(tChar)
                tCount.set(tChar, tVal + 1)
            }
        }

        // check if every hashmap count in s matches every hashmap count in t
            // Go through each char in one of the strings - check values for that char in both hashmaps have equal values
            // and that the values exist

        // if yes, return true;
        // if no, return false;

        for (let i = 0; i < sArray.length; i++) {
            let sChar = sArray[i];
            let tChar = sArray[i];
            
            if (sCount.get(sChar) !== tCount.get(sChar)) {
                return false
            }

            if (sCount.get(tChar) !== tCount.get(tChar)) {
                return false
            }
        }

        return true;
    }
}
