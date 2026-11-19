class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // Make a copy of the original array
        const numsCopy = [];
        // [3,6,4,5]
        // Go through the new copy and store a 2D array containing num and index
        for (let i = 0; i < nums.length; i++) {
            numsCopy.push([nums[i], i])
        }
        console.log(numsCopy)
        // [ [ 3, 0 ], [ 4, 1 ], [ 5, 2 ], [ 6, 3 ] ]
        
        // [[3, 0],[6, 1],[4, 2],[5, 3]]
        // Sort the new array copy based on index 0 of each 2D array item
        numsCopy.sort((a, b) => a[0] - b[0])
        // [[3, 0], [4, 2],[5, 3], [6, 1]]

        // Use two pointers one at beg and end of array; i
        // index 0
        let i = 0;
        let j = numsCopy.length - 1
        console.log(numsCopy[i][0])
        
        // index nums.length - 1; j
        // Loop through sorted copy of array - use a while loop as we don't know how many iterations
        while (i < j) {
            if (numsCopy[i][0] + numsCopy[j][0] === target) {
                console.log(i[1])
                console.log(j[1])
                return [numsCopy[i][1], numsCopy[j][1]]
            } else if (numsCopy[i][0] + numsCopy[j][0] > target) {
                j--
            } else {
                i++
            }
        }
    }
}
