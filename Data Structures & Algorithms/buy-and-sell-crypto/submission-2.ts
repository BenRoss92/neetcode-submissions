class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        // Take the first price
        // Stay on the first price with the left pointer
        // Go through the other prices one by one with the right pointer
        // Calculate profit - right pointer minus left pointer
        // Check if profit or existing maxProfit is the largest - assign the largest to the maxprofit
        // Move right pointer onto next number
        // When all other numbers are finished with right pointer, move left pointer
        // After the left and right pointers have finished
        // Return the max profit

        for (let i = 0; i < prices.length - 1; i++) {
            let buyPrice = prices[i]
            for (let j = i + 1; j < prices.length; j++) {
                let sellPrice = prices[j]

                let profit = sellPrice - buyPrice;

                maxProfit = Math.max(maxProfit, profit);
            }
        }

        return maxProfit;
    }
}
