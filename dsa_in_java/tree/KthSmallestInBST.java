/*
 * Topic: Kth Smallest Element in a BST
 * Language: Java
 *
 * Description:
 * Find the kth smallest element in a BST.
 *
 * Time Complexity: O(h + k)
 * Space Complexity: O(h)
 * LeetCode Link: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */

import java.util.Stack;

public class KthSmallestInBST {

    public static int kthSmallest(TreeNode root, int k) {
        Stack<TreeNode> stack = new Stack<>();

        while (true) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }

            root = stack.pop();
            if (--k == 0) return root.val;
            root = root.right;
        }
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(1);
        root.right = new TreeNode(4);
        root.left.right = new TreeNode(2);

        System.out.println("Kth Smallest (k=1): " + kthSmallest(root, 1));
    }
}

/*
Example Output:
Kth Smallest (k=1): 1
*/
