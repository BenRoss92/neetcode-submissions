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
        // Use recursive depth first search
        
        // base case - the node is null
            // what condition when hit means the recursion will stop another call and return something
            // if a node is null, the depth of that node will be 0
            // so return 0 as the depth in this case
        if (root === null) {
            return 0
        }
        
        // recursive step
            // Forgot what a recursive step is supposed to represent in recursion
            // call the function again with a certain input 
        const leftDepth = this.maxDepth(root.left)
        const rightDepth = this.maxDepth(root.right)
        // get the maximum depth of either child node
        const maximumDepth = Math.max(leftDepth, rightDepth)
        // the maximum depth - if left or right node either or both have a depth of 1 it'll be 1

        // return combination
            // what value needs to be returned by the smaller step to build the answer for the current step
        // plus add on 1 for the current depth we're already at
        return maximumDepth + 1
    }
}
