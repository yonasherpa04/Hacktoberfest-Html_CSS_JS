/*
 * Topic: Combination Sum II
 * Language: Java
 *
 * Description:
 * Find all unique combinations of candidates where each number can only be used once.
 * Uses backtracking with sorting to avoid duplicates.
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 * LeetCode Link: https://leetcode.com/problems/combination-sum-ii/
 */

import java.util.*;

public class CombinationSumII {

    private static void backtrack(int[] candidates, int target, int start, List<Integer> current, List<List<Integer>> res) {
        if (target == 0) {
            res.add(new ArrayList<>(current));
            return;
        }
        for (int i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) continue; // skip duplicates
            if (candidates[i] > target) break;
            current.add(candidates[i]);
            backtrack(candidates, target - candidates[i], i + 1, current, res);
            current.remove(current.size() - 1); // backtrack
        }
    }

    public static List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        List<List<Integer>> res = new ArrayList<>();
        backtrack(candidates, target, 0, new ArrayList<>(), res);
        return res;
    }

    public static void main(String[] args) {
        int[] candidates = {10,1,2,7,6,1,5};
        int target = 8;
        System.out.println(combinationSum2(candidates, target));
    }
}

/*
Example Output:
[[1,1,6],[1,2,5],[1,7],[2,6]]
*/
