/**
 * Title: 35. Search Insert Position [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/search-insert-position/
 *
 * Description:
 * Given a sorted array of distinct integers `nums` and a target value `target`,
 * return the index if the target is found. If not, return the index where it would
 * be if it were inserted in order.
 *
 * You must write an algorithm with O(log N) runtime complexity.
 *
 * Algorithm:
 * 1. Initialize two pointers: `left = 0` and `right = nums.size() - 1`.
 * 2. While `left <= right`:
 *      - Compute `mid = left + (right - left) / 2`.
 *      - If `nums[mid] == target`, return `mid`.
 *      - If `nums[mid] < target`, move `left = mid + 1`.
 *      - Else, move `right = mid - 1`.
 * 3. If the target is not found, `left` will be the correct insert position.
 * 4. Return `left`.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(log N) - Binary search halves the array each step.
 * Space Complexity: O(1) - Constant extra space used.
 * -----------------------------------------------------------
 */

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int n=nums.size();
        int low=0,high=n-1,mid;
        int ans=n;
        while(low<=high)
        {
            mid=(low+high)/2;
            if(nums[mid]>=target)
            {
                ans=mid;
                high=mid-1;
            }
            else
            {
                low=mid+1;
            }
        }
        return ans;
    }
};