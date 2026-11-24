class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // sell day needs to be in the future
        // buy day needs to be in the past

        // sell day and buy day need to be different - can't use same index for both

        // Find max profit

        // Work out if and when to not make any transactions - i.e. when to return 0
            // If the numbers are in descending order, return 0
                // If the next number is always lower
                    // return 0 - maybe return this outside of a loop if you get to it?

        // Need to move from left to right
        // Use two pointers
        let leftIndex = 0;
        let rightIndex = 1;
        let maxProfit = 0;

        while (rightIndex < prices.length) {
            const buyPrice = prices[leftIndex]
            const sellPrice = prices[rightIndex]
            if (sellPrice > buyPrice) {
                const currentProfit = sellPrice - buyPrice
                maxProfit = Math.max(maxProfit, currentProfit)
                rightIndex++
            } else {
                leftIndex = rightIndex
                rightIndex++
            }
        }

        return maxProfit
        // Left starts at 0 and right starts at 1 - indexes
        // while right pointer index is less than the length of the prices array - stop when right pointer index goes past the last number in the array

        // If the right number is greater than left
            // Work out what the profit would be for those two days
                // right number minus current number
            // Keep a running maxProfit variable outside of the loop and assign it to 0 - so if you don't change it, you'll return 0 by default
            // Check if the current iteration's profit is higher than the running maxProfit - Math.max(maxProfit, currentProfit) - and assign it to the outer maxProfit variable
            // Move on to the next iteration
                // Move the right pointer's index by 1 - right++
        
        // Else - If the right number is the same as the left number or the right number is greater than left
            // Assign the left pointer's index to be the right pointer's index
                // leftIndex = rightIndex
            // Assign the right pointer's index to be the right pointer's index + 1 
                // rightIndex++

        // Trying to buy at the lowest price possible 
        // Trying to sell at the highest price possible

        // Find out what the lowest number is and whether there are any numbers after it that are higher
        
        // Can't reorder the numbers - need to keep the order the same 
    }
}
