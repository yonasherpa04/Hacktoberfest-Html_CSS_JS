/*
 * Topic: Subsets / Power Set
 * Language: Java
 *
 * Description:
 * Generate all possible subsets of a given set of numbers using backtracking.
 *
 * Time Complexity: O(2^n * n)
 * Space Complexity: O(n)
 * LeetCode Link: https://leetcode.com/problems/subsets/
 */

import java.util.*;

public class Subsets {

    private static void backtrack(int[] nums, int index, List<Integer> current, List<List<Integer>> res) {
        res.add(new ArrayList<>(current));
        for (int i = index; i < nums.length; i++) {
            current.add(nums[i]);
            backtrack(nums, i + 1, current, res);
            current.remove(current.size() - 1); // backtrack
        }
    }

    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        backtrack(nums, 0, new ArrayList<>(), res);
        return res;
    }

    public static void main(String[] args) {
        int[] nums = {1,2,3};
        List<List<Integer>> res = subsets(nums);
        System.out.println(res);
    }
}

/*
Example Output:
[[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
*/
