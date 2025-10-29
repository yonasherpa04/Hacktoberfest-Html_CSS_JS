/*
 * Topic: Daily Temperatures
 * Language: Java
 *
 * Description:
 * Given a list of daily temperatures, return a list such that, for each day,
 * tells you how many days you have to wait until a warmer temperature.
 * If there is no future day for that, set to 0.
 *
 * Example:
 * Input: [73, 74, 75, 71, 69, 72, 76, 73]
 * Output: [1, 1, 4, 2, 1, 1, 0, 0]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import java.util.Stack;

public class DailyTemperatures {
    public static int[] dailyTemperatures(int[] temps) {
        int n = temps.length;
        int[] res = new int[n];
        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && temps[i] > temps[stack.peek()]) {
                int idx = stack.pop();
                res[idx] = i - idx;
            }
            stack.push(i);
        }

        return res;
    }

    public static void main(String[] args) {
        int[] temps = {73, 74, 75, 71, 69, 72, 76, 73};
        int[] result = dailyTemperatures(temps);
        System.out.print("Result: ");
        for (int x : result) System.out.print(x + " ");
    }
}

/*
 * Example Output:
 * Result: 1 1 4 2 1 1 0 0
 */
