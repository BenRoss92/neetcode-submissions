class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map()

        // go over each string
        for (let i = 0; i < strs.length; i++) {
            const originalStr = strs[i]
            const sortedStr = originalStr.split("").sort().join("")

            if (hashMap.has(sortedStr)) {
                const hashMapVal = hashMap.get(sortedStr)
                hashMapVal.push(originalStr)
            } else {
                hashMap.set(sortedStr, [originalStr])
            }
        }

        const groups = hashMap.values();
        return Array.from(groups)
            // copy the string
            // sort the copied string
            // check if the hashmap already has a key with the sorted string
                // if not
                    // add the sorted string as a key to a hashmap and set the value as an array containing the original string
                // if yes
                    // get the hashmap value for that sorted string key - which will be an array
                    // push the original string value onto this array

        // after loops
            // get the values from the hashmap - will give an iterator
            // turn this iteratory into an array - using Array.from()
            
    }
}
