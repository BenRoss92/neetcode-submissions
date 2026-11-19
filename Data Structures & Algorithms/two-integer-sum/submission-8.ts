class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // Create a hash
        const hash = new Map()
        // Go through array
        for (let currentNumIndex = 0; currentNumIndex < nums.length; currentNumIndex++) {
            const currentNum = nums[currentNumIndex]
            const difference = target - currentNum;

            if (!hash.has(difference)) {
                hash.set(currentNum, currentNumIndex)
            } else {
                const hashIndex = hash.get(difference)
                return [Math.min(currentNumIndex, hashIndex), Math.max(currentNumIndex, hashIndex)]
            }
        }
        // Minus number from target to get the difference - e.g. 7 - 3
        // If difference is not in hash, 
            // Add the number as the key and the index as the value - to remember it later in case we need it
        // If difference is in the hash
            // Grab the index of the number we're currently iterating
            // Grab the index (value) of the item in the hash under the difference key that we found
            // return them in order - Math.min(currentIndex, hashIndex), Math.max(currentIndex, hashIndex)
        
    }
}
