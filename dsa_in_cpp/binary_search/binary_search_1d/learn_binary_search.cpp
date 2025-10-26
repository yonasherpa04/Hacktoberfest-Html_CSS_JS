/**
 * Title: 704. Binary Search [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/binary-search/
 *
 * Description:
 * Given a sorted (in ascending order) integer array `nums` and an integer `target`,
 * return the index of `target` if it exists in the array. Otherwise, return -1.
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
 * 3. If the loop ends without finding the target, return -1.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(log N) - Binary search divides the array in half each iteration.
 * Space Complexity: O(1) - Uses constant extra space.
 * -----------------------------------------------------------
 */

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int search(vector<int>& nums, int target) {
        int n=nums.size();
        int low=0;
        int high=n-1;
        while(low<=high)
        {
        int mid=(low+high)/2;
            if(nums[mid]==target)
                return mid;
            else if(nums[mid]>target)
                high=mid-1;
            else
                low=mid+1;
        }
        return -1;
    }
};