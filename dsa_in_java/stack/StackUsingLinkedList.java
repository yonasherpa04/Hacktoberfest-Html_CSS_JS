/*
 * Topic: Implement Stack using Linked List
 * Language: Java
 *
 * Description:
 * Implement a stack using a linked list supporting push, pop, peek, and isEmpty.
 *
 * Example:
 * Input: push(10), push(20), push(30), pop(), peek()
 * Output:
 * Popped: 30
 * Top Element: 20
 *
 * Approach:
 * - Use a singly linked list where the head acts as the top of the stack.
 * - Push inserts at head; Pop removes from head.
 *
 * Time Complexity: O(1) per operation
 * Space Complexity: O(n)
 */

class Node {
    int data;
    Node next;
    Node(int data) {
        this.data = data;
        next = null;
    }
}

public class StackUsingLinkedList {
    private Node top;

    public StackUsingLinkedList() {
        this.top = null;
    }

    public void push(int x) {
        Node newNode = new Node(x);
        newNode.next = top;
        top = newNode;
    }

    public int pop() {
        if (top == null) {
            System.out.println("Stack Underflow");
            return -1;
        }
        int popped = top.data;
        top = top.next;
        return popped;
    }

    public int peek() {
        if (top == null) {
            System.out.println("Stack is Empty");
            return -1;
        }
        return top.data;
    }

    public boolean isEmpty() {
        return top == null;
    }

    public static void main(String[] args) {
        StackUsingLinkedList stack = new StackUsingLinkedList();
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
