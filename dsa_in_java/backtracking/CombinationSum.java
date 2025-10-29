/*
 * Topic: Combination Sum
 * Language: Java
 *
 * Description:
 * Find all unique combinations of candidates that sum up to a target using backtracking.
 *
 * Time Complexity: O(2^t) where t is target
 * Space Complexity: O(target)
 * LeetCode Link: https://leetcode.com/problems/combination-sum/
 */

import java.util.*;

public class CombinationSum {

    private static void backtrack(int[] candidates, int target, int start, List<Integer> current, List<List<Integer>> res) {
        if (target == 0) {
            res.add(new ArrayList<>(current));
            return;
        }
        for (int i = start; i < candidates.length; i++) {
            if (candidates[i] <= target) {
                current.add(candidates[i]);
                backtrack(candidates, target - candidates[i], i, current, res);
                current.remove(current.size() - 1); // backtrack
            }
        }
    }

    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> res = new ArrayList<>();
        backtrack(candidates, target, 0, new ArrayList<>(), res);
        return res;
    }

    public static void main(String[] args) {
        int[] candidates = {2,3,6,7};
        int target = 7;
        System.out.println(combinationSum(candidates, target));
    }
}

/*
Example Output:
[[2,2,3],[7]]
*/
