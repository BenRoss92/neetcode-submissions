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
    // Breadth first search solution:
        // Go through each level at a time
        // Only when we've gone through every number in the level do we update the level number        
        // Use a queue for this so that we have to look through each number at a time before moving on to the next level
        // First in, first out
        // If there is no root node - i.e. root is null
            // return 0;
        if (root === null) {
            return 0
        }

        // record the maximum depth
        let depth = 0;

        // create a queue
        const queue = [root];

        // Only keep iterating if there are still values in the queue - while there are still values in the queue - when queue size is greater than 0
        while (queue.length > 0) {
            // GOTCHA: Lock in the queue's length before the queue changes later inside of the loop
                // We want to only loop however many times there were originally children before we do any processing to find new children
                // Otherwise the different levels will become confused
            let size = queue.length

            for (let i = 0; i < size; i++) {
                // GOTCHA: Remove elements from the front of the queue, not the back
                // Add new elements to the back of the queue
                // Ensures First In, First Out
                let node = queue.shift()
                if (node.right !== null) {
                    queue.push(node.right)
                }
                if (node.left !== null) {
                    queue.push(node.left)
                }
            }
            depth++
        }

        return depth
            // inner loop - loop over however many values are currently in the queue at one time

        // Take the current root and add it to the queue
        // Pop off the current node in the queue to get the value and the depth
        // Work out the max of the current depth and existing max depth value and assign to the max depth value
        // If there is a left child of the root, push it into the queue with the current depth + 1
        // If there is a right child of the root, push it into the queue with the current depth + 1


    }
}
