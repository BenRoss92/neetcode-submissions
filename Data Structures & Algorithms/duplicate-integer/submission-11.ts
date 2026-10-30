// const trueNums = [1, 2, 3, 3]

// const falseNums = [1, 2, 3, 4]

class Solution {
    hasDuplicate (nums: number[]): boolean {
        // create a Set from the array
        const uniqueNums = new Set(nums);

        // if the length of the Set is less than the length of the array, return true, else return false
        if (uniqueNums.size < nums.length) {
            return true;
        }

        return false;
      }
    }