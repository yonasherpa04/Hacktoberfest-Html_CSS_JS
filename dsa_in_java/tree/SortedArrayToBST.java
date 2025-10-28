/*
 * Topic: Convert Sorted Array to Binary Search Tree
 * Language: Java
 *
 * Description:
 * Given an integer array nums where the elements are sorted in ascending order,
 * convert it to a height-balanced BST.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(log n)
 * LeetCode Link: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */

public class SortedArrayToBST {

    public static TreeNode sortedArrayToBST(int[] nums) {
        return helper(nums, 0, nums.length - 1);
    }

    private static TreeNode helper(int[] nums, int left, int right) {
        if (left > right) return null;

        int mid = left + (right - left) / 2;
        TreeNode node = new TreeNode(nums[mid]);
        node.left = helper(nums, left, mid - 1);
        node.right = helper(nums, mid + 1, right);

        return node;
    }

    private static void printInOrder(TreeNode node) {
        if (node == null) return;
        printInOrder(node.left);
        System.out.print(node.val + " ");
        printInOrder(node.right);
    }

    public static void main(String[] args) {
        int[] nums = {-10, -3, 0, 5, 9};
        TreeNode root = sortedArrayToBST(nums);
        System.out.println("BST created from sorted array.");
        printInOrder(root);
    }
}

/*
Example Output:
BST created from sorted array.
-10 -3 0 5 9
*/

