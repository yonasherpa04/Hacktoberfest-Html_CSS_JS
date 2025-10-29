/*
 * Topic: Next Greater Element
 * Language: Java
 *
 * Description:
 * Given an array, for each element find the next greater element to its right.
 * If no such element exists, set it to -1.
 *
 * Example:
 * Input: [4, 5, 2, 25]
 * Output: [5, 25, 25, -1]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import java.util.Stack;

public class NextGreaterElement {
    public static int[] nextGreaterElements(int[] nums) {
        Stack<Integer> stack = new Stack<>();
        int n = nums.length;
        int[] res = new int[n];

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= nums[i]) {
                stack.pop();
            }
            res[i] = stack.isEmpty() ? -1 : stack.peek();
            stack.push(nums[i]);
        }
        return res;
    }

    public static void main(String[] args) {
        int[] nums = {4, 5, 2, 25};
        int[] res = nextGreaterElements(nums);

        System.out.print("Next Greater Elements: ");
        for (int x : res) System.out.print(x + " ");
    }
}

/*
 * Example Output:
 * Next Greater Elements: 5 25 25 -1
 */
