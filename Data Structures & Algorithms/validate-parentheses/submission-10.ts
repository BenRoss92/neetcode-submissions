class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // create a brackets hashmap - store each closing bracket and its corresponding opening bracket type
        const bracketsMap = new Map<string, string>([
            ["}", "{"],
            ["]", "["],
            [")", "("]
        ])

        // use a stack to push any open brackets onto
        const stack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            const bracket = s[i]
            // if a bracket is a closing bracket - if bracketsMap.has(bracket)
            if (bracketsMap.has(bracket)) {
                // get the corresponding opening bracket type from the brackets hashmap
                const openingBracketType = bracketsMap.get(bracket)
                const lastOpeningBracket = stack[stack.length - 1]
                // If the last opening bracket added to the stack (last item in the stack) is not the correct corresponding opening bracket type
                    // return false
                if (lastOpeningBracket !== openingBracketType) {
                    return false
                } else {
                // If the last opening bracket added to the stack (last item in the stack) is the correct corresponding opening bracket type
                    // remove that checked opening bracket from the stack
                    stack.pop()
                }
            } else {
                // if is an opening bracket
                stack.push(bracket)
            }
        }

        // check if there are any remaining open brackets in the stack that haven't been paired up
        // if stack length is greater than 0 i.e. not empty - return false
        if (stack.length > 0) {
            return false
        }

        // else return true
        return true
        

        // Input: s = "[]"
        // Output: true

        // Input: s = "([{}])"
        // Output: true

        // Input: s = "[(])"
        // Output: false

        // Input: s = "(){}[]"
        // Output: true

        // Input: s = "((("
        // Output: false

        // Input: s = ")("
        // Output: false

        // Input: s = "}"
        // Output: false


    }
}
