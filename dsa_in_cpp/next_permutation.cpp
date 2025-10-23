/**
 *  * Title: 31. Next Permutation [LeetCode]
 *  * 
 *  * Problem Link: https://leetcode.com/problems/next-permutation/
 *  * 
 *  * Description:
 *  * Implement an algorithm to rearrange numbers into the next lexicographically greater permutation.
 *  * If such arrangement is not possible, rearrange it as the lowest possible order (sorted ascending).
 *  * 
 *  * Steps:
 *  * 1. Find the first decreasing element from the end — this is the pivot (i).
 *  * 2. If pivot exists, find the next larger element to its right — this is the swap element (j).
 *  * 3. Swap pivot and swap element.
 *  * 4. Reverse the subarray after pivot to get the smallest possible suffix.
 *  * 
 *  * Example 1:
 *  * Input: nums = [1,2,3]
 *  * Output: [1,3,2]
 *  * Explanation: Next permutation after [1,2,3] is [1,3,2].
 *  * 
 *  * Example 2:
 *  * Input: nums = [3,2,1]
 *  * Output: [1,2,3]
 *  * Explanation: No greater permutation possible, so return smallest order.
 *  * 
 *  * Example 3:
 *  * Input: nums = [1,1,5]
 *  * Output: [1,5,1]
 *  * 
 *  * -----------------------------------------------------------
 *  * Time Complexity: O(n) — traverse the array once.
 *  * Space Complexity: O(1) — constant extra space.
 *  * -----------------------------------------------------------
 */
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
       int n = nums.size();
        int i = n - 2;

        //find the pivot (i)
        while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
        }

        // If a pivot is found
        if (i >= 0) {
            int j = n - 1;
            //Find the swap element (j)
            while (j >= 0 && nums[j] <= nums[i]) {
                j--;
            }
            swap(nums[i], nums[j]);
        }

        // reverse the suffix
        reverse(nums.begin() + i + 1, nums.end()); 
    }
};