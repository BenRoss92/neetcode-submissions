class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        // height - need to use the smaller of the two values - will be the height
        // the two heights (left and right) - left or right can be smaller - need to use the smaller value
        // width - larger index minus the smaller index

        // simple example: [2, 3, 5]

        let leftPointer = 0;
        let rightPointer = heights.length - 1;
        let maxArea = 0;

        while (leftPointer < rightPointer) {
            let leftHeight = heights[leftPointer];
            let rightHeight = heights[rightPointer];
            let minHeight = Math.min(leftHeight, rightHeight);

            let width = rightPointer - leftPointer;
            let area = minHeight * width;
            maxArea = Math.max(area, maxArea);

            if (leftHeight < rightHeight) {
                leftPointer++;
            } else {
                rightPointer--;
            }
        }

        return maxArea;

        // Start with left pointer index at 0 and right pointer index at the end of the array - heights.length - 1

        // Get the min height - get both height numbers and then get the minimum height from these
        // Get the width - rightPointer index minus left pointer index
        // Calculate the area - height * width
        // Get the max value of maxArea and area and assign to maxArea - to keep a running total
        // Check which of the leftPointer or rightPointer had the minimum height
        // If the leftPointer height is smaller than the rightPointer height, move the leftPointer up by 1 - add 1 to leftPointer
        // Else move the rightPointer in - decrease the index by 1
        // Start the loop again
        // Don't know how many steps we'll need to take, so use a while loop
        // Stop the loop when the left pointer index is the same as the rightPointer index
        // So keep the loop going while the left pointer does not equal (or is less than) the rightPointer
    }
}
