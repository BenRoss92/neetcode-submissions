// const trueNums = [1, 2, 3, 3]

// const falseNums = [1, 2, 3, 4]

class Solution {
    hasDuplicate (nums: number[]): boolean {
        // Use a Hash
            const storedNums = new Set<number>()

            for (const num of nums) {
                if (storedNums.has(num)) {
                    return true;
                }
                storedNums.add(num)
            }
            return false

      }
    }