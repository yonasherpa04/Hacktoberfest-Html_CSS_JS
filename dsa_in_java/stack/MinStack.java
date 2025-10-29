/*
 * Topic: Min Stack
 * Language: Java
 *
 * Description:
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * Example:
 * Input:
 * push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()
 * Output:
 * -3, 0, -2
 *
 * Time Complexity: O(1)
 * Space Complexity: O(n)
 */

import java.util.Stack;

class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStack;

    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }

    public void push(int val) {
        stack.push(val);
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }

    public void pop() {
        if (stack.peek().equals(minStack.peek())) {
            minStack.pop();
        }
        stack.pop();
    }

    public int top() {
        return stack.peek();
    }

    public int getMin() {
        return minStack.peek();
    }

    public static void main(String[] args) {
        MinStack minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        System.out.println("Min: " + minStack.getMin());
        minStack.pop();
        System.out.println("Top: " + minStack.top());
        System.out.println("Min: " + minStack.getMin());
    }
}

/*
 * Example Output:
 * Min: -3
 * Top: 0
 * Min: -2
 */
