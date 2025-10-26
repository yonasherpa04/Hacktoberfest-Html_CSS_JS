/**
 * Title: 153. Find Minimum in Rotated Sorted Array [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 *
 * Description:
 * Suppose an array of length `n` sorted in ascending order is rotated between `1` and `n` times.
 * For example, the array `nums = [0,1,2,4,5,6,7]` might become:
 * - `[4,5,6,7,0,1,2]` (rotated 4 times).
 *
 * Given the rotated sorted array `nums` of **unique** elements, return the minimum element of this array.
 *
 * You must write an algorithm with O(log N) runtime complexity.
 *
 * Algorithm:
 * 1. Initialize two pointers: `left = 0` and `right = nums.size() - 1`.
 * 2. While `left < right`:
 *      - Compute `mid = left + (right - left) / 2`.
 *      - If `nums[mid] > nums[right]`:
 *          - The minimum is in the right half (strictly), so set `left = mid + 1`.
 *      - Else:
 *          - The minimum is at `mid` or in the left half, so set `right = mid`.
 * 3. When the loop ends, `left == right` and points to the index of the minimum element.
 * 4. Return `nums[left]`.
 *
 * Notes:
 * - The comparison with `nums[right]` leverages the fact that the array contains unique elements;
 *   this cleanly identifies which half contains the rotation point (minimum).
 *
 * -----------------------------------------------------------
 * Time Complexity: O(log N) - Binary-search style narrowing of the search interval.
 * Space Complexity: O(1) - Uses constant extra space.
 * -----------------------------------------------------------
 */


#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int findMin(vector<int>& nums) {
        int n=nums.size();
        int low=0,high=n-1;
        int ans=INT_MAX;
        while(low<=high){
            int mid=low+((high-low)>>1);
            if(nums[low]<=nums[mid]){
                ans=min(ans , nums[low]);
                low=mid+1;
            }
            else{
                ans=min(ans , nums[mid]);
                high=mid-1;
            }
        }
        return ans;
    }
};