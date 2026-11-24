class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let leftIndex = 0;
        let rightIndex = heights.length - 1;

        let maxArea = 0;

        while (leftIndex < rightIndex) {
            // Get the numbers where the pointers are at in this round - e.g. starting round - round 1
            const leftHeight = heights[leftIndex]
            const rightHeight = heights[rightIndex]

            // Get the smaller height
            const minHeight = Math.min(leftHeight, rightHeight)

            const width = rightIndex - leftIndex;

            // Get the current height * width
            const currentArea = minHeight * width

            maxArea = Math.max(maxArea, currentArea)

            if (leftHeight < rightHeight) {
                leftIndex++
            } else if (rightHeight < leftHeight) {
                rightIndex--
            } else {
                leftIndex++
                rightIndex--
            }
        }

        return maxArea

        // Find the biggest of: 
            // two of the biggest numbers in the array - take the smaller one - that's the height
            // the biggest indeces difference between these two numbers 
            // Multiply them together
            // return the multiplied result


        // Don't change the order of the numbers in the array - i.e. don't changes the indexes
        // Try using two pointers - left at beginning and right at end (length - 1)
        // Find the bigger pointer number
            // If left pointer is less than the right
                // Move the left pointer by 1 - left++
            // Else if the right pointer is less than the left
                // Move teh right pointer by 1 - right--
            // else if they're the same - move both pointers? - or do nothing? But then if both started at 1, 1 - and there were bigger numbers after that, we'd want to check them out - so I'll say yes do move both
                // left++
                // right--

        // Record height * width at start and every time we do an iteration i.e. every time one or more pointers move
        // Keep a running record of the max height * width
        // Update the running record of the max height * width
            // Work out if the current's iteration of max height * width is larger than the running record of max height * width
                // If it is, reassign record to current iteration
                // If it isn't, don't do anything
        // Move on to next iteration and take another recording

        // At end of the loops, return the max recorded height * width
    }
}
