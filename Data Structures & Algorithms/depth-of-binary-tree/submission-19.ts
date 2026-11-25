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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        // use recursion - call maxDepth on other nodes, not just root node - i.e. each node's left and right children

        // if the node is null
            // don't get the max depth
            // just return 0 as the max depth for that node
            // base case - if node is null stop the recursive calls and return 0 as the depth count for that mini part of the tree for that node and its children
        if (root === null) {
            return 0;
        }

        // if a node isn't null
            // e.g. [1, null, null]
            // work out what the max depth is of its left child and right child - which one is bigger
            // add 1 to it as we're already on the first level if root is defined
            // recursive step - call the same function with the left and right children of the node
                // Get the max depths of those two
                // Add 1 to that max depth and return that
        const leftDepth = this.maxDepth(root.left)
        const rightDepth = this.maxDepth(root.right)
        const maxDepth = Math.max(leftDepth, rightDepth)
        return maxDepth + 1
    }
}
