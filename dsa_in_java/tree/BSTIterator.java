/*
 * Topic: BST Iterator
 * Language: Java
 *
 * Description:
 * Implement an iterator over a BST that returns the next smallest element.
 *
 * Time Complexity:
 *   - next(): O(1) amortized
 *   - hasNext(): O(1)
 * Space Complexity: O(h)
 * LeetCode Link: https://leetcode.com/problems/binary-search-tree-iterator/
 */

import java.util.Stack;

public class BSTIterator {
    private Stack<TreeNode> stack = new Stack<>();

    public BSTIterator(TreeNode root) {
        pushAll(root);
    }

    private void pushAll(TreeNode node) {
        while (node != null) {
            stack.push(node);
            node = node.left;
        }
    }

    public int next() {
        TreeNode top = stack.pop();
        pushAll(top.right);
        return top.val;
    }

    public boolean hasNext() {
        return !stack.isEmpty();
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(7);
        root.left = new TreeNode(3);
        root.right = new TreeNode(15);
        root.right.left = new TreeNode(9);
        root.right.right = new TreeNode(20);

        BSTIterator iterator = new BSTIterator(root);
        System.out.println(iterator.next());    // 3
        System.out.println(iterator.next());    // 7
        System.out.println(iterator.hasNext()); // true
    }
}

/*
Example Output:
3
7
true
*/
