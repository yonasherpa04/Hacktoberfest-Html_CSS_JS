/*
 * Topic: Binary Tree Level Order Traversal (Breadth First Search)
 * Language: Java
 *
 * Description:
 * Traverse the tree level by level from left to right.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * LeetCode Link: https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

import java.util.*;

public class LevelOrderTraversal {

    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int size = queue.size();
            List<Integer> level = new ArrayList<>();

            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                level.add(node.val);

                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }

            result.add(level);
        }

        return result;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        System.out.println("Level Order Traversal: " + levelOrder(root));
    }
}

/*
Example Output:
Level Order Traversal: [[3], [9, 20], [15, 7]]
*/
