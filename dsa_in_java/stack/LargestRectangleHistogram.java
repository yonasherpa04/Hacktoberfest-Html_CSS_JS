/*
 * Topic: Largest Rectangle in Histogram
 * Language: Java
 *
 * Description:
 * Given an array of heights representing bars of a histogram,
 * find the area of the largest rectangle in the histogram.
 *
 * Example:
 * Input: [2,1,5,6,2,3]
 * Output: 10
 * Explanation: Rectangle between heights 5 and 6 gives max area = 10.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import java.util.Stack;

public class LargestRectangleHistogram {
    public static int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int n = heights.length;

        for (int i = 0; i <= n; i++) {
            int h = (i == n) ? 0 : heights[i];
            while (!stack.isEmpty() && h < heights[stack.peek()]) {
                int height = heights[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }

        return maxArea;
    }

    public static void main(String[] args) {
        int[] heights = {2, 1, 5, 6, 2, 3};
        System.out.println("Largest Rectangle Area: " + largestRectangleArea(heights));
    }
}

/*
 * Example Output:
 * Largest Rectangle Area: 10
 */
