/*
 * Topic: Implement Queue using Linked List
 * Language: Java
 *
 * Description:
 * Implement a Queue using a Linked List data structure.
 * Support standard operations:
 *  - enqueue(x): Insert an element at the rear.
 *  - dequeue(): Remove an element from the front.
 *  - peek(): Return the front element.
 *  - isEmpty(): Check if the queue is empty.
 *
 * Example:
 * Input:
 * enqueue(10)
 * enqueue(20)
 * enqueue(30)
 * dequeue()
 * peek()
 *
 * Output:
 * Enqueued: 10
 * Enqueued: 20
 * Enqueued: 30
 * Dequeued: 10
 * Front Element: 20
 *
 * Explanation:
 * Queue uses Linked List nodes instead of array indexes.
 * Front points to the first node, and Rear to the last node.
 */

class Node {
    int data;
    Node next;
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class QueueLinkedList {
    private Node front, rear;

    public QueueLinkedList() {
        front = rear = null;
    }

    /**
     * Adds an element to the rear of the queue.
     * @param data The element to enqueue.
     */
    public void enqueue(int data) {
        Node newNode = new Node(data);
        if (rear == null) {
            front = rear = newNode;
            System.out.println("Enqueued: " + data);
            return;
        }
        rear.next = newNode;
        rear = newNode;
        System.out.println("Enqueued: " + data);
    }

    /**
     * Removes an element from the front of the queue.
     * @return The dequeued element.
     */
    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue Underflow! Cannot dequeue.");
            return -1;
        }
        int val = front.data;
        front = front.next;
        if (front == null)
            rear = null; // Queue becomes empty
        System.out.println("Dequeued: " + val);
        return val;
    }

    /**
     * Returns the front element without removing it.
     * @return The front element.
     */
    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty.");
            return -1;
        }
        return front.data;
    }

    /**
     * Checks if the queue is empty.
     * @return true if empty, false otherwise.
     */
    public boolean isEmpty() {
        return front == null;
    }
}

public class MainQueueLL {
    public static void main(String[] args) {
        QueueLinkedList queue = new QueueLinkedList();

        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        queue.dequeue();
        System.out.println("Front Element: " + queue.peek());

        queue.dequeue();
        queue.dequeue();
        queue.dequeue(); // Underflow test
    }
}

/*
 * ----------------------------------------------
 * Example Output:
 *
 * Enqueued: 10
 * Enqueued: 20
 * Enqueued: 30
 * Dequeued: 10
 * Front Element: 20
 * Dequeued: 20
 * Dequeued: 30
 * Queue Underflow! Cannot dequeue.
 * ----------------------------------------------
 *
 * Time Complexity:
 * - enqueue(): O(1)
 * - dequeue(): O(1)
 * - peek(): O(1)
 *
 * Space Complexity: O(n) — space for n nodes in the linked list.
 */
