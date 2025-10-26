/*
 * Topic: Binary Tree Postorder Traversal
 * Language: Java
 *
 * Description:
 * Traverse a binary tree in postorder fashion: Left → Right → Root.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * LeetCode Link: https://leetcode.com/problems/binary-tree-postorder-traversal/
 */

import java.util.*;

public class PostorderTraversal {

    public static void postorder(TreeNode root, List<Integer> result) {
        if (root == null) return;
        postorder(root.left, result);
        postorder(root.right, result);
        result.add(root.val);
    }

    public static List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        postorder(root, result);
        return result;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);

        System.out.println("Postorder Traversal: " + postorderTraversal(root));
    }
}

/*
Example Output:
Postorder Traversal: [2, 3, 1]
*/
