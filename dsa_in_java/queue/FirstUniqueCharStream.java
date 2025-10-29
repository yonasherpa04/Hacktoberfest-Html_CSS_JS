/*
 * Topic: First Unique Character in Stream
 * Language: Java
 *
 * Description:
 * Given a stream of lowercase letters, find the first non-repeating character at each insertion.
 *
 * Approach:
 *  - Maintain a frequency array of size 26.
 *  - Use a Queue to track potential non-repeating characters.
 */

import java.util.*;

public class FirstUniqueCharStream {
    public static void printFirstUnique(String stream) {
        int[] freq = new int[26];
        Queue<Character> q = new LinkedList<>();

        for (char ch : stream.toCharArray()) {
            freq[ch - 'a']++;
            q.offer(ch);

            while (!q.isEmpty() && freq[q.peek() - 'a'] > 1) {
                q.poll();
            }

            if (q.isEmpty())
                System.out.println("No unique character");
            else
                System.out.println("First unique till now: " + q.peek());
        }
    }

    public static void main(String[] args) {
        String stream = "aabcbd";
        printFirstUnique(stream);
    }
}

/*
 * ----------------------------------------------
 * Output:
 * First unique till now: a
 * No unique character
 * First unique till now: b
 * First unique till now: b
 * First unique till now: c
 * No unique character
 * ----------------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
