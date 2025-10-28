/**
 * Title: 15. 3Sum [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/3sum/
 *
 * Description:
 * Given an integer array `nums`, find all unique triplets that sum to zero.
 *
 * Algorithm:
 * 1. Sort the input array.
 * 2. Iterate through the array, fixing one number.
 * 3. Use two pointers (left and right) on the remaining part to find the other two numbers.
 * 4. Move pointers based on whether their sum is less than, greater than, or equal to the target.
 * 5. Skip duplicate numbers to ensure unique triplets.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(N^2) - Sorting is O(N log N), followed by a nested loop structure.
 * Space Complexity: O(log N) to O(N) - For sorting, excluding the output array.
 * -----------------------------------------------------------
 */

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> r;
        int s = nums.size();
        if (s < 3) return r;

        sort(nums.begin(), nums.end());

        for (int i = 0; i < s - 2; ++i) {
            // to avoid duplicate triplet, skipping identical no. for first ele
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            //other two no. need to sum to -ve of first no.
            int t = -nums[i];
            int j = i + 1;
            int k = s - 1;

            //two pointer approach
            while (j < k) {
                int sum = nums[j] + nums[k];

                if (sum == t) {
                    r.push_back({nums[i], nums[j], nums[k]});

                    //skipping duplicates from both sides - left & right
                    while (j < k && nums[j] == nums[j + 1]) j++;
                    while (j < k && nums[k] == nums[k - 1]) k--;

                    j++;
                    k--;
                } else if (sum < t) {
                    j++;
                } else {
                    k--;
                }
            }
        }
        return r;
    
    }
};