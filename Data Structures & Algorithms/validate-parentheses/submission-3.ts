class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // Stack solution

        // Have a map of what the different types of brackets are
            // When you come across a closing bracket, try to find the opening version
            const stack = [];

            const closedBracketMap = new Map([
                ["}", "{"],
                ["]", "["],
                [")", "("]
            ]);

            // Iterate over the string
            for (let i = 0; i < s.length; i++) {
                if (!closedBracketMap.has(s[i]))  {
                    stack.push(s[i])
                } else {
                    if (stack.length === 0) {
                        return false
                    } else {
                        if (closedBracketMap.get(s[i]) === stack[stack.length - 1]) {
                            stack.pop();
                        } else {
                            return false;
                        }
                    }
                }
            }

            if (stack.length === 0) {
                return true;
            } return false;

        // Add to an array
            // If it's not a closing bracket
                // add it to the array
            // If it's a closing bracket
                // Check if the array is empty - if it is, return false
                // If not empty, look up what the opening bracket looks like (from the closedBracketMap) and check whether the last item in the array matches the opening version from the closedBracketMap
                    // If yes, pop the last array item from the array (the opening bracket)
                    // If not, return false

            // Outside of any iterating - return true (should have gone through all of the items without returning false)

    }
}
