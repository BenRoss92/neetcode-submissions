class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const bracketsMap = new Map([
            ["}", "{"],
            ["]", "["],
            [")", "("],
        ])

        const stack = [];

        // Not working for s="["
        // if (s.length === 1) {
        //     return false
        // }

        for (let i = 0; i < s.length; i++) {
            const bracket = s[i]
            console.log('bracket', bracket)

            // if bracket is a closing bracket
            if (bracketsMap.has(bracket)) {
                console.log('bracket is closing')
                console.log('stack', stack)
                
                // get the matching opening bracket from the hashmap
                const hashMapBracket = bracketsMap.get(bracket)
                // get the last value from the stack
                const lastOpeningBracket = stack[stack.length - 1]
                // see if the opening bracket from the hashmap equals the last one in the stack
                if (lastOpeningBracket !== hashMapBracket) {
                    return false
                } else {
                    stack.pop()
                }
                    // if not
                        // return false
                    // if yes
                        // pop the value from the stack

                
                
                // stack.pop()



                // const previousBracket = stack[stack.length - 1]
                // console.log('previousBracket', previousBracket)
                // const hashMapBracket = bracketsMap.get(bracket)
            } else {
                console.log('bracket is opening')
                stack.push(bracket)
            }
                
                // pop that bracket off of stack
                // get the last bracket in the stack
                // get corresponding opening bracket from hashmap
                // check last bracket in stack matches corresponding opening bracket from hashmap
                    // if not, return false
                    // if yes, keep going
            // else if bracket is not a closing bracket - not in hashmap - must be an opening bracket
                // add that opening bracket to the stack - push onto the stack
            

        }

        if (stack.length > 0) {
            return false
        }

        // if it made it through the loop without failing, should be valid
        return true
    }
}
