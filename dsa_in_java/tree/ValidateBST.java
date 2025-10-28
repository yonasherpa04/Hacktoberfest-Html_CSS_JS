/*
 * Topic: Validate Binary Search Tree
 * Language: Java
 *
 * Description:
 * Determine if a given binary tree is a valid BST.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * LeetCode Link: https://leetcode.com/problems/validate-binary-search-tree/
 */

public class ValidateBST {

    public static boolean isValidBST(TreeNode root) {
        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    private static boolean validate(TreeNode node, long min, long max) {
        if (node == null) return true;
        if (node.val <= min || node.val >= max) return false;

        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(1);
        root.right = new TreeNode(7);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(8);

        System.out.println("Is valid BST: " + isValidBST(root));
    }
}

/*
Example Output:
Is valid BST: true
*/
