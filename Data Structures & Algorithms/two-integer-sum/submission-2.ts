class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // There are always at least 2 numbers in the nums array
        // Returns each position, sorted by lowest to highest
        
            // N.B. Gotcha: Don't sort the nums array before doing anything - the indeces need to reflect the original array's indeces
            // Create a pointer variable = 0
            let pointer = 0;
            // Loop - use 'x' as the index. 
                while (pointer < nums.length - 1) {
                    for (let x = pointer; x < nums.length - 1; x++) {
                        let i = pointer;
                        let j = x + 1;
                        // While i !== nums.length - 2 && j !== nums.length - 1

                        if (nums[i] + nums[j] === target) {
                            return [i, j];
                        }
                    }
                    pointer++;
                }

                // Important: x < nums.length - 1; x++
                // Start with the first number (x) - assign it to 'i' - outside variable
                // Grab the second number (x + 1) - assign it to 'j'
                // While i !== nums.length - 2 && j !== nums.length - 1
                // Add the two numbers in the nums array at these indexes together 
                // Check if they equal 'target' number 
                    // If yes, return [i, j]
                    // If no, add 1 to 'j' and repeat that loop again
                // Then next loop: 'i' has index of 0 and 'j' has index of 2
                // Then next loop: 'i' has index of 0 and 'j' has index of 3
                // When 'j' === nums.length - 1
                    // Increment the pointer counter - pointer++
                    // Set i to pointer
                    // Set j to pointer + 1
                    // Then do the same loop above
                // When 'j' === nums.length - 1
                    // Increment the pointer counter - pointer++
                    // Set i to pointer
                    // Set j to pointer + 1
                    // Then do the same loop above
                // When 'i' === nums.length - 2 and 'j' === nums.length - 1
                    // Do the loop one last time - add them up
                        // Then stop everything - stop the loops
                        
            // Then return
    }
}
