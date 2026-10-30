// const trueNums = [1, 2, 3, 3]

// const falseNums = [1, 2, 3, 4]

class Solution {
    hasDuplicate (nums: number[]): boolean {
    // Sort the array by values ascending
    nums.sort((a, b) => a - b);

        // Iterate through the array - start with the first number and end with the penultimate number (not the last number)
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1]) {
                return true;
            }
        }

        return false;
        // If the next number in the array equals the current number, return true
        // Otherwise return false
      }
    }