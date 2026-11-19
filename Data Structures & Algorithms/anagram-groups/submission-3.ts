class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // chars be the same
        // 

        // Input: strs = ["act","pots","tops","cat","stop","hat"]

        // Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

        // array can be of size 1 and up - won't be empty
        // each string can be size 0 or up - e.g. empty string
        // always lowercase

        // create a hashmap
        const hashMap = new Map()
        // key - sorted version of a common string
        // value - array of any original strings where sorted versions match the key

        // iterate over each string in strings array
        for (let i = 0; i < strs.length; i++) {
            const originalStr = strs[i]
            // console.log(originalStr)
            const sortedStr = strs[i].split("").sort().join("");
            // console.log('sortedStr', sortedStr)

            if (!hashMap.has(sortedStr)) {
                hashMap.set(sortedStr, [originalStr])
            } else {
                const originalHashVal = hashMap.get(sortedStr)
                // console.log(typeof originalHashVal)
                
                // hashMap.set(sortedStr, originalHashVal.push(originalStr))
                originalHashVal.push(originalStr)
            }
        }

        // console.log(hashMap)

        const values = hashMap.values()
        console.log(values)
        // return values.toArray()
        return Array.from(values)

        // for each one:
            // sort the string
            // check if the hashmap has an existing key with this sorted string
            // if yes
                // get the value with that key from hashmap and push the current string onto the end of it
                // e.g. "act": [cat].push(...)
            // if no - else
                // add the sorted string as a key and an array value with the original value inside of it
                // e.g. "act": [cat]
                

        // after end of loop
            // hash looks like this:
            // {"aht": ["hat', "act", "cat"], "opst": ["stop", "pots", "tops"]}
            // get hash values only and put them in an array
    }
}
