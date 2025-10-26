/*
 * Topic: Maximum Depth of Binary Tree
 * Language: Java
 *
 * Description:
 * Given the root of a binary tree, return its maximum depth.
 * Depth of a tree is the number of nodes along the longest path from root to leaf.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is tree height (recursion stack)
 * LeetCode Link: https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

public class MaxDepth {

    public static int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        System.out.println("Maximum Depth: " + maxDepth(root));
    }
}

/*
Example Output:
Maximum Depth: 3
*/
