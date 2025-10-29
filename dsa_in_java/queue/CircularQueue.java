/*
 * Topic: Circular Queue
 * Language: Java
 *
 * Description:
 * Implement a circular queue with a fixed size using an array.
 * Supports enqueue, dequeue, peekFront, and peekRear operations.
 *
 * Example:
 * Enqueue 10, 20, 30 → Full
 * Dequeue → Removes 10
 * Enqueue 40 → Overwrites circularly
 */

class CircularQueue {
    private int[] arr;
    private int front, rear, size, capacity;

    public CircularQueue(int capacity) {
        this.capacity = capacity;
        arr = new int[capacity];
        front = size = 0;
        rear = capacity - 1;
    }

    public boolean isFull() {
        return size == capacity;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public void enqueue(int item) {
        if (isFull()) {
            System.out.println("Queue is full!");
            return;
        }
        rear = (rear + 1) % capacity;
        arr[rear] = item;
        size++;
        System.out.println("Enqueued: " + item);
    }

    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty!");
            return -1;
        }
        int item = arr[front];
        front = (front + 1) % capacity;
        size--;
        System.out.println("Dequeued: " + item);
        return item;
    }

    public int peekFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }

    public int peekRear() {
        if (isEmpty()) return -1;
        return arr[rear];
    }

    public static void main(String[] args) {
        CircularQueue cq = new CircularQueue(3);
        cq.enqueue(10);
        cq.enqueue(20);
        cq.enqueue(30);
        cq.dequeue();
        cq.enqueue(40);
        System.out.println("Front: " + cq.peekFront());
        System.out.println("Rear: " + cq.peekRear());
    }
}

/*
 * ----------------------------------------------
 * Output:
 * Enqueued: 10
 * Enqueued: 20
 * Enqueued: 30
 * Dequeued: 10
 * Enqueued: 40
 * Front: 20
 * Rear: 40
 * ----------------------------------------------
 * Time Complexity: O(1)
 * Space Complexity: O(n)
 */
