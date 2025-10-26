/**
 * Title: 81. Search in Rotated Sorted Array II [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 *
 * Description:
 * There is an integer array `nums` sorted in non-decreasing order (which may contain duplicates)
 * that has been rotated at an unknown pivot index `k` (e.g., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
 *
 * Given the array `nums` and an integer `target`, return `true` if `target` is in `nums`,
 * or `false` otherwise.
 *
 * You must write an algorithm with O(log N) runtime complexity (though the presence of duplicates
 * may degrade it to O(N) in the worst case).
 *
 * Algorithm:
 * 1. Initialize two pointers: `left = 0` and `right = nums.size() - 1`.
 * 2. While `left <= right`:
 *      - Compute `mid = left + (right - left) / 2`.
 *      - If `nums[mid] == target`, return true.
 *      - Handle duplicates:
 *          - If `nums[left] == nums[mid] && nums[mid] == nums[right]`, increment `left++` and decrement `right--`.
 *      - Otherwise, determine which half is sorted:
 *          a) If `nums[left] <= nums[mid]` (left half is sorted):
 *              - If `nums[left] <= target < nums[mid]`, move `right = mid - 1`.
 *              - Else, move `left = mid + 1`.
 *          b) Else (right half is sorted):
 *              - If `nums[mid] < target <= nums[right]`, move `left = mid + 1`.
 *              - Else, move `right = mid - 1`.
 * 3. Return false if the target is not found.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(log N) on average, O(N) in the worst case (due to duplicates).
 * Space Complexity: O(1) - Constant extra space used.
 * -----------------------------------------------------------
 */

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int n=nums.size();
        int low=0,high=n-1;
        while(low<=high){
            int mid=low+((high-low)>>1);
            if(nums[mid]==target){
                return 1;
            }
            if(nums[low]==nums[mid] && nums[mid]==nums[high]){
                low++;
                high--;
                continue;
            }
            if(nums[low]<=nums[mid]){
                if(target>=nums[low] && target<=nums[mid]){
                    high=mid-1;
                }
                else{
                    low=mid+1;
                }
            }
            else{
                if(target>=nums[mid] && target<=nums[high]){
                    low=mid+1;
                }
                else{
                    high=mid-1;
                }
            }
        }
        return 0;
    }
};