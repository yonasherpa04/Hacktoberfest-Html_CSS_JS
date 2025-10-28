/*
 * Topic: Binary Tree Inorder Traversal
 * Language: Java
 *
 * Description:
 * Traverse a binary tree in inorder fashion: Left → Root → Right.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) due to recursion stack.
 * LeetCode Link: https://leetcode.com/problems/binary-tree-inorder-traversal/
 */

import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

public class InorderTraversal {

    // Recursive Inorder Traversal
    public static void inorder(TreeNode root, List<Integer> result) {
        if (root == null) return;
        inorder(root.left, result);
        result.add(root.val);
        inorder(root.right, result);
    }

    public static List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        inorder(root, result);
        return result;
    }

    // Test main method
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.left = new TreeNode(3);

        System.out.println("Inorder Traversal: " + inorderTraversal(root));
    }
}

/*
Example Output:
Inorder Traversal: [1, 3, 2]
*/
