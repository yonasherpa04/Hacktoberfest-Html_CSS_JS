/*
 * Topic: Symmetric Tree
 * Language: Java
 *
 * Description:
 * Check whether a given binary tree is a mirror of itself (symmetric around its center).
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * LeetCode Link: https://leetcode.com/problems/symmetric-tree/
 */

public class SymmetricTree {

    public static boolean isMirror(TreeNode t1, TreeNode t2) {
        if (t1 == null && t2 == null) return true;
        if (t1 == null || t2 == null) return false;

        return (t1.val == t2.val)
                && isMirror(t1.left, t2.right)
                && isMirror(t1.right, t2.left);
    }

    public static boolean isSymmetric(TreeNode root) {
        return isMirror(root, root);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(2);
        root.left.left = new TreeNode(3);
        root.right.right = new TreeNode(3);

        System.out.println("Is Tree Symmetric: " + isSymmetric(root));
    }
}

/*
Example Output:
Is Tree Symmetric: true
*/
