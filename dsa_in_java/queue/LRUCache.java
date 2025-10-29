/*
 *Topic: LRU Cache
 * Language: Java
 *
 * Description:
 * Design a data structure that supports the following operations in O(1) time:
 *  - get(key): Return the value if present, else -1
 *  - put(key, value): Insert or update the value, and remove least recently used if full
 *
 * Approach:
 *  - Use LinkedHashMap to maintain insertion order.
 *  - Override removeEldestEntry() to automatically remove oldest entries.
 *
 * Example:
 * LRUCache cache = new LRUCache(2);
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1); // returns 1
 * cache.put(3, 3); // removes key 2
 * cache.get(2); // returns -1
 */

import java.util.*;

class LRUCache extends LinkedHashMap<Integer, Integer> {
    private int capacity;

    public LRUCache(int capacity) {
        super(capacity, 0.75f, true); // accessOrder = true (for LRU)
        this.capacity = capacity;
    }

    public int get(int key) {
        return super.getOrDefault(key, -1);
    }

    public void put(int key, int value) {
        super.put(key, value);
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
        return size() > capacity;
    }

    public static void main(String[] args) {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println("Get 1: " + cache.get(1));
        cache.put(3, 3);
        System.out.println("Get 2: " + cache.get(2));
    }
}

/*
 * ----------------------------------------------
 * Output:
 * Get 1: 1
 * Get 2: -1
 * ----------------------------------------------
 * Time Complexity: O(1)
 * Space Complexity: O(capacity)
 */
