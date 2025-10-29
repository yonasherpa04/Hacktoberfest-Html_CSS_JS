/*
 * Topic: Implement Stack using Array
 * Language: Java
 *
 * Description:
 * Design a stack using a static array supporting push, pop, peek, and isEmpty.
 *
 * Example:
 * Input: push(10), push(20), push(30), pop(), peek()
 * Output:
 * Popped: 30
 * Top Element: 20
 *
 * Approach:
 * - Maintain an array and a top pointer.
 * - Increase top on push, decrease on pop.
 * - Check for overflow and underflow.
 *
 * Time Complexity: O(1) per operation
 * Space Complexity: O(n)
 */

public class StackUsingArray {
    private int[] arr;
    private int top;
    private int capacity;

    public StackUsingArray(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }

    public void push(int x) {
        if (top == capacity - 1) {
            System.out.println("Stack Overflow");
            return;
        }
        arr[++top] = x;
    }

    public int pop() {
        if (top == -1) {
            System.out.println("Stack Underflow");
            return -1;
        }
        return arr[top--];
    }

    public int peek() {
        if (top == -1) {
            System.out.println("Stack is Empty");
            return -1;
        }
        return arr[top];
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public static void main(String[] args) {
        StackUsingArray stack = new StackUsingArray(5);
        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Popped: " + stack.pop());
        System.out.println("Top Element: " + stack.peek());
    }
}

/*
 * Example Output:
 * Popped: 30
 * Top Element: 20
 */
