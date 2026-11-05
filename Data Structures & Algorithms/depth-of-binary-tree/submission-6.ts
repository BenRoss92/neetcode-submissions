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
        // This is not a binary search tree

  // the nodes in the array are positioned like this: 
  // first node is the root node
  // second and third nodes represent the left and right children of the root node
  // the two null nodes represents the left and right child nodes of 2
  // the 4 node represents the left child node of three.

  // Root = the top of the tree

  // Depth = the longest path from the root node to the furthest leaf node

  // Root node is passed in
  // Return the depth

  // Example: [1,2,3,null,null,4]
  // root node = 1
  // depth = 2
  // How to work this out?
    // Check if root node value is not null
    let maximumDepth = 0;
    let leftDepth = 0;
    let rightDepth = 0;

    if (root === null) {
        return maximumDepth;
    }

    // Do the recursive part:
    leftDepth = this.maxDepth(root.left)
    rightDepth = this.maxDepth(root.right)
    maximumDepth = Math.max(leftDepth, rightDepth)
    return 1 + maximumDepth

    // if (root.left === null) {
    //     if (root.right === null) {
    //         return maximumDepth;
    //     } else {
    //         rightDepth++
    //     }
    // } else {
    //     leftDepth++
    // }
    // let leftDepth = this.maxDepth(root.left)
    // let rightDepth = this.maxDepth(root.right)
    // return Math.max(leftDepth, rightDepth, maximumDepth)
    
        // If it is null
            // Return 0 (default depth)
        // If it is not null

  
  // Start at 1 (root node) - depth is 0 
    // Check if there is a left child
        // If there is not a left child - i.e. it is null
            // Don't add anything to the depth
            // Check if there is a right child
                // If there is not a left child - i.e. it is null
                    // Don't add anything to the depth
                // If there is a right child - does not equal null
                    // Add 1 to the depth
                    // Grab that node
        // If there is a left child
            // Add 1 to the depth
            // Grab that node
                // Check if there is a left child

            // Get the depths of the left and right children
                // Get the max
            
            // Outside of the recursion - when the tree ends
                // Return the max depth

        

    }
}
