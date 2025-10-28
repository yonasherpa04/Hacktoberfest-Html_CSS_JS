/**
 * Title: 33. Search in Rotated Sorted Array [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 * Description:
 * There is an integer array `nums` sorted in ascending order (with distinct values)
 * that has been rotated at an unknown pivot index `k` (e.g., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 *
 * Given the array `nums` and an integer `target`, return the index of `target` if it is in `nums`,
 * or `-1` if it is not found.
 *
 * You must write an algorithm with O(log N) runtime complexity.
 *
 * Algorithm:
 * 1. Initialize two pointers: `left = 0` and `right = nums.size() - 1`.
 * 2. While `left <= right`:
 *      - Compute `mid = left + (right - left) / 2`.
 *      - If `nums[mid] == target`, return `mid`.
 *      - Determine which half is sorted:
 *          a) If `nums[left] <= nums[mid]`, the left half is sorted:
 *              - If `nums[left] <= target < nums[mid]`, move `right = mid - 1`.
 *              - Else, move `left = mid + 1`.
 *          b) Else, the right half is sorted:
 *              - If `nums[mid] < target <= nums[right]`, move `left = mid + 1`.
 *              - Else, move `right = mid - 1`.
 * 3. If the loop ends without finding the target, return -1.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(log N) - Modified binary search on a rotated array.
 * Space Complexity: O(1) - Constant extra space used.
 * -----------------------------------------------------------
 */

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int search(vector<int>& nums, int target) {
        int n=nums.size();
        int left=0,right=n-1;
        while(left<=right){
            int mid=left+((right-left)>>1);
            if(nums[mid]==target)   return mid;
            if(nums[left]<=nums[mid]){
                if(target>=nums[left] && target<=nums[mid]){
                    right=mid;
                }
                else{
                    left=mid+1;
                }
            }
            else{
                if(target>=nums[mid] && target<=nums[right]){
                    left=mid;
                }
                else{
                    right=mid-1;
                }
            }
        }
        return -1;
    }
};