class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // create hashmap
        const hashMap = new Map<string, [string]>()
        // go over array
        for (let i = 0; i < strs.length; i++) {
            const originalStr = strs[i]
            const sortedStr = originalStr.split("").sort().join("")

            if (!hashMap.has(sortedStr)) {
                hashMap.set(sortedStr, [originalStr])
            } else {
                const hashMapVal = hashMap.get(sortedStr)
                hashMapVal.push(originalStr)
            }
        }

        const hashMapValues = hashMap.values()

        const results = Array.from(hashMapValues)

        return results
            // get original string
            // create sorted string
            // check in hashmap if sorted string exists as a key
                // if not, store sorted string as key and original string inside of an array as the value
                // if yes, get the value for the sorted key from the hashmap and push current original string into the value (array)
        
        // after loops - get values from hashmap
        // return values as an array (2D array)
    }
}
