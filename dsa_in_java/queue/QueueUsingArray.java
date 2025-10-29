/*
 * Topic: Implement Queue using Array
 * Language: Java
 *
 * Description:
 * Design a simple Queue data structure using an Array.
 * Implement the following operations:
 *  - enqueue(x): Insert an element at the rear.
 *  - dequeue(): Remove an element from the front.
 *  - peek(): Return the front element.
 *  - isEmpty(): Check if the queue is empty.
 *  - isFull(): Check if the queue is full.
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
 * Queue follows FIFO (First In, First Out) order.
 * The first inserted element is the first one to be removed.
 */

class QueueArray {
    private int[] arr;
    private int front, rear, capacity;

    public QueueArray(int size) {
        arr = new int[size];
        capacity = size;
        front = 0;
        rear = -1;
    }

    /**
     * Inserts an element at the rear of the queue.
     * @param x The element to be inserted.
     */
    public void enqueue(int x) {
        if (isFull()) {
            System.out.println("Queue Overflow! Cannot enqueue " + x);
            return;
        }
        arr[++rear] = x;
        System.out.println("Enqueued: " + x);
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
        int item = arr[front++];
        System.out.println("Dequeued: " + item);
        return item;
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
        return arr[front];
    }

    /**
     * Checks if the queue is empty.
     * @return true if empty, else false.
     */
    public boolean isEmpty() {
        return front > rear;
    }

    /**
     * Checks if the queue is full.
     * @return true if full, else false.
     */
    public boolean isFull() {
        return rear == capacity - 1;
    }
}

public class QueueUsingArray {
    public static void main(String[] args) {
        QueueArray q = new QueueArray(3);

        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);
        q.enqueue(40); // overflow check

        q.dequeue();
        System.out.println("Front Element: " + q.peek());

        q.dequeue();
        q.dequeue();
        q.dequeue(); // underflow check
    }
}

/*
 * ----------------------------------------------
 * Example Output:
 *
 * Enqueued: 10
 * Enqueued: 20
 * Enqueued: 30
 * Queue Overflow! Cannot enqueue 40
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
 * Space Complexity: O(n) — where n is the size of the queue.
 */
