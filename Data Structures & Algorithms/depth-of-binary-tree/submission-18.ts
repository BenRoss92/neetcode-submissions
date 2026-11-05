/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

// class TreeNode {
//     constructor(public val = 0, public left = null, public right = null) {
//     }
// }

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        // Depth First Search Solution

        // Use a stack
        // Record the depth within each node, so that we don't get mixed up with levels
        if (root === null) {
            return 0;
        }

        const stack: [TreeNode | null, number][] = [[root, 1]];

        let maximumDepth = 1;

        // If node is null, return 0
        // Have each node track what its depth is, then throw that node away
        // Track the maximum depth for all of the nodes - not done by level (breadth), done by depth first

        // Use a single while loop - as we don't need to have an inner loop for measuring the level globally, just need to keep going until all nodes are done - while we have something in the stack


        // 
        // Remove root node from the top of the stack - same side - pop



        while (stack.length > 0) {
            // Put root node onto top of the stack - push
            let currentArrayItem = stack.pop();
            let currentNode = currentArrayItem[0]
            let depth = currentArrayItem[1]

            // If the current node has a right node, push this right node onto the stack
            if (currentNode.right !== null) {
                stack.push([currentNode.right, depth + 1])
            }
            // If the current node has a left node, push this left node onto the stack
            if (currentNode.left !== null) {
                stack.push([currentNode.left, depth + 1])
            }

            maximumDepth = Math.max(maximumDepth, depth)
        }

        return maximumDepth;

        // If node is not null (covered by previous null check)
            // add 1 to the depth for this node
            // Check if there is a node.left - node.left !== null

    }
}
