/*
 * Topic: Lowest Common Ancestor (LCA) in a BST
 * Language: Java
 *
 * Description:
 * Given a binary search tree (BST), find the lowest common ancestor (LCA)
 * of two given nodes p and q.
 *
 * Time Complexity: O(h), where h = height of the tree.
 * Space Complexity: O(1)
 * LeetCode Link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

public class LowestCommonAncestor {

    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        while (root != null) {
            if (p.val < root.val && q.val < root.val) {
                root = root.left;
            } else if (p.val > root.val && q.val > root.val) {
                root = root.right;
            } else {
                return root;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(6);
        root.left = new TreeNode(2);
        root.right = new TreeNode(8);
        root.left.left = new TreeNode(0);
        root.left.right = new TreeNode(4);
        root.left.right.left = new TreeNode(3);
        root.left.right.right = new TreeNode(5);

        TreeNode p = root.left; // 2
        TreeNode q = root.left.right; // 4

        TreeNode lca = lowestCommonAncestor(root, p, q);
        System.out.println("Lowest Common Ancestor: " + lca.val);
    }
}

/*
Example Output:
Lowest Common Ancestor: 2
*/
