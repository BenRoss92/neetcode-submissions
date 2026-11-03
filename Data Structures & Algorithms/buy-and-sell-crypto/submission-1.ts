class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // create pointers for left and right, next to each other at the two starting points of the prices
        let leftPointer = 0;
        let rightPointer = 1;
        let maxProfit = 0;

        // Go through the array until the right pointer hits the end
        while (rightPointer < prices.length) {
            // Check whether the price on the left is smaller than the price on the right
            if (prices[leftPointer] < prices[rightPointer]) {
                let buy = prices[leftPointer]
                let sell = prices[rightPointer]

                let profit = sell - buy
                maxProfit = Math.max(profit, maxProfit);

            } else {
                leftPointer = rightPointer
            }

            rightPointer++
            
                // If it is smaller, calculate the profit and max profit
                // If it isn't smaller, move the left pointer to where the right pointer is

                // Move the right pointer by 1
        }

        return maxProfit;
    }
}
