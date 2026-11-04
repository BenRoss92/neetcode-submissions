class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // Have left pointer start at start of array
        let leftPointer = 0;
        let rightPointer = 1;
        let maxProfit = 0;

        while (rightPointer < prices.length) {
            let buyPrice = prices[leftPointer]
            let sellPrice = prices[rightPointer]
            if (sellPrice > buyPrice)  {
                let profit = sellPrice - buyPrice
                maxProfit = Math.max(maxProfit, profit)
            } else {
                leftPointer = rightPointer
            }
            rightPointer++
        }

        return maxProfit
        // Have right pointer start next to it
        // If right price is bigger than left price
            // Keep left pointer where it is
            // Calculate profit - right pointer minus left pointer
            // Figure out whether this is the biggest difference
                // Check which of profit and existing max profit are higher - assign to existing max profit
        // Else
            // Move left pointer to where the right pointer is
        // Move right pointer up by one - do outside of if/else - needs to happen for both branches


        // When the right pointer is less than the array length - while right pointer is less than prices.length
            // Do this loop
        // When loop is finished, return the max profit
    }
}
