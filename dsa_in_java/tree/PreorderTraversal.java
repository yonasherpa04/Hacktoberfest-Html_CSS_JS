/*
 * Topic: Binary Tree Preorder Traversal
 * Language: Java
 *
 * Description:
 * Traverse a binary tree in preorder fashion: Root → Left → Right.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * LeetCode Link: https://leetcode.com/problems/binary-tree-preorder-traversal/
 */

import java.util.*;

public class PreorderTraversal {

    public static void preorder(TreeNode root, List<Integer> result) {
        if (root == null) return;
        result.add(root.val);
        preorder(root.left, result);
        preorder(root.right, result);
    }

    public static List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        preorder(root, result);
        return result;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);

        System.out.println("Preorder Traversal: " + preorderTraversal(root));
    }
}

/*
Example Output:
Preorder Traversal: [1, 2, 4, 3]
*/
