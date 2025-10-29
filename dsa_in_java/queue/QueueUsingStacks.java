/*
 * Topic: Implement Queue using Stacks
 * Language: Java
 *
 * Description:
 * Implement a Queue using two Stacks.
 * Supports:
 *  - enqueue(x): Push element to rear
 *  - dequeue(): Remove element from front
 *  - peek(): Get front element
 *  - isEmpty(): Check if queue is empty
 *
 * Approach:
 *  - Use two stacks (inputStack, outputStack)
 *  - enqueue: push to inputStack
 *  - dequeue/peek: if outputStack is empty, move all from inputStack → outputStack
 *
 * Example:
 * enqueue(1), enqueue(2), enqueue(3)
 * dequeue() → 1
 * peek() → 2
 */

import java.util.Stack;

class QueueUsingStacks {
    private Stack<Integer> input = new Stack<>();
    private Stack<Integer> output = new Stack<>();

    public void enqueue(int x) {
        input.push(x);
        System.out.println("Enqueued: " + x);
    }

    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue Underflow!");
            return -1;
        }
        if (output.isEmpty()) {
            while (!input.isEmpty())
                output.push(input.pop());
        }
        int val = output.pop();
        System.out.println("Dequeued: " + val);
        return val;
    }

    public int peek() {
        if (isEmpty()) return -1;
        if (output.isEmpty()) {
            while (!input.isEmpty())
                output.push(input.pop());
        }
        return output.peek();
    }

    public boolean isEmpty() {
        return input.isEmpty() && output.isEmpty();
    }

    public static void main(String[] args) {
        QueueUsingStacks queue = new QueueUsingStacks();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        queue.dequeue();
        System.out.println("Front Element: " + queue.peek());
    }
}

/*
 * ----------------------------------------------
 * Output:
 * Enqueued: 10
 * Enqueued: 20
 * Enqueued: 30
 * Dequeued: 10
 * Front Element: 20
 * ----------------------------------------------
 * Time Complexity:
 * - enqueue(): O(1)
 * - dequeue(): Amortized O(1)
 * Space Complexity: O(n)
 */
