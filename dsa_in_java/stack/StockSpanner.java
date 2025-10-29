/*
 * Topic: Stock Span Problem
 * Language: Java
 *
 * Description:
 * The stock span problem calculates how many consecutive days the price was less than or equal
 * to the current day's price.
 *
 * Example:
 * Input: prices = [100, 80, 60, 70, 60, 75, 85]
 * Output: [1, 1, 1, 2, 1, 4, 6]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import java.util.Stack;

class StockSpanner {
    private Stack<int[]> stack; // pair: [price, span]

    public StockSpanner() {
        stack = new Stack<>();
    }

    public int next(int price) {
        int span = 1;
        while (!stack.isEmpty() && stack.peek()[0] <= price) {
            span += stack.pop()[1];
        }
        stack.push(new int[]{price, span});
        return span;
    }

    public static void main(String[] args) {
        StockSpanner s = new StockSpanner();
        int[] prices = {100, 80, 60, 70, 60, 75, 85};
        System.out.print("Stock Span: ");
        for (int price : prices) {
            System.out.print(s.next(price) + " ");
        }
    }
}

/*
 * Example Output:
 * Stock Span: 1 1 1 2 1 4 6
 */
