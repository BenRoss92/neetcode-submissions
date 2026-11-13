class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // if lenght is 0 or 1 - less than or equal to 1, return false

        // [1, 2, 3, 4, 4, 5]


// TODO - look up how to create a Map in TS from an array
        const set = new Set();


        // go over each number 
        for (let i = 0; i < nums.length; i++) {
            let number = nums[i];
            if (set.has(number)) {
                return true;
            } else {
                set.add(number)
            }
        }
        return false;
            // Check if number key is in hashmap
                // If not - add the number as the key and the count as the value
                // If yes
                    // stop looping
                    // return true
        // (If) Gets to end of loop - return false
    }
}
