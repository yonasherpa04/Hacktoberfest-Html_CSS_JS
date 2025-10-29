/*
 *Topic: Implement Deque (Double-Ended Queue)
 * Language: Java
 *
 * Description:
 * Implement a fixed-size circular deque supporting:
 *  - insertFront, insertRear
 *  - deleteFront, deleteRear
 *  - getFront, getRear
 *
 * Example:
 * InsertRear(10), InsertFront(20)
 * DeleteRear(), GetFront()
 */

class MyCircularDeque {
    private int[] deque;
    private int front, rear, size, capacity;

    public MyCircularDeque(int k) {
        capacity = k;
        deque = new int[k];
        front = 0;
        rear = k - 1;
        size = 0;
    }

    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        deque[front] = value;
        size++;
        return true;
    }

    public boolean insertLast(int value) {
        if (isFull()) return false;
        rear = (rear + 1) % capacity;
        deque[rear] = value;
        size++;
        return true;
    }

    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }

    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }

    public int getFront() {
        return isEmpty() ? -1 : deque[front];
    }

    public int getRear() {
        return isEmpty() ? -1 : deque[rear];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == capacity;
    }

    public static void main(String[] args) {
        MyCircularDeque deque = new MyCircularDeque(3);
        deque.insertLast(1);
        deque.insertLast(2);
        deque.insertFront(3);
        System.out.println("Front: " + deque.getFront());
        deque.deleteLast();
        deque.insertFront(4);
        System.out.println("Rear: " + deque.getRear());
    }
}

/*
 * ----------------------------------------------
 * Output:
 * Front: 3
 * Rear: 2
 * ----------------------------------------------
 * Time Complexity: O(1)
 * Space Complexity: O(n)
 */
