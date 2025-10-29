/*
 * Topic: Palindrome Partitioning
 * Language: Java
 *
 * Description:
 * Partition a string such that every substring is a palindrome.
 * Uses backtracking to explore all possible partitions.
 *
 * Time Complexity: O(N * 2^N) for string of length N
 * Space Complexity: O(N) for recursion stack
 * LeetCode Link: https://leetcode.com/problems/palindrome-partitioning/
 */

import java.util.*;

public class PalindromePartitioning {

    private static boolean isPalindrome(String s, int start, int end) {
        while (start < end) {
            if (s.charAt(start++) != s.charAt(end--)) return false;
        }
        return true;
    }

    private static void backtrack(String s, int start, List<String> current, List<List<String>> res) {
        if (start == s.length()) {
            res.add(new ArrayList<>(current));
            return;
        }
        for (int end = start; end < s.length(); end++) {
            if (isPalindrome(s, start, end)) {
                current.add(s.substring(start, end + 1));
                backtrack(s, end + 1, current, res);
                current.remove(current.size() - 1); // backtrack
            }
        }
    }

    public static List<List<String>> partition(String s) {
        List<List<String>> res = new ArrayList<>();
        backtrack(s, 0, new ArrayList<>(), res);
        return res;
    }

    public static void main(String[] args) {
        String s = "aab";
        System.out.println(partition(s));
    }
}

/*
Example Output:
[[a, a, b], [aa, b]]
*/
