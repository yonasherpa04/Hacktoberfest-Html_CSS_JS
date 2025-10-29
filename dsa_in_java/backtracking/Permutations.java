/*
 * Topic: Permutations
 * Language: Java
 *
 * Description:
 * Generate all permutations of a list of numbers using backtracking.
 *
 * Time Complexity: O(n!)
 * Space Complexity: O(n)
 * LeetCode Link: https://leetcode.com/problems/permutations/
 */

import java.util.*;

public class Permutations {

    private static void backtrack(List<Integer> nums, List<Integer> current, List<List<Integer>> res, boolean[] used) {
        if (current.size() == nums.size()) {
            res.add(new ArrayList<>(current));
            return;
        }
        for (int i = 0; i < nums.size(); i++) {
            if (used[i]) continue;
            used[i] = true;
            current.add(nums.get(i));
            backtrack(nums, current, res, used);
            current.remove(current.size() - 1); // backtrack
            used[i] = false;
        }
    }

    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> numList = new ArrayList<>();
        for (int n : nums) numList.add(n);
        backtrack(numList, new ArrayList<>(), res, new boolean[nums.length]);
        return res;
    }

    public static void main(String[] args) {
        int[] nums = {1,2,3};
        System.out.println(permute(nums));
    }
}

/*
Example Output:
[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/
