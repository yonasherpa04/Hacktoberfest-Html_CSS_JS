/**
 * Title: 34. Find First and Last Position of Element in Sorted Array [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 * Description:
 * Given an array of integers `nums` sorted in non-decreasing order, and a target value `target`,
 * find the starting and ending position of the target value.
 *
 * If the target is not found in the array, return `[-1, -1]`.
 *
 * You must write an algorithm with O(log N) runtime complexity.
 *
 * Algorithm:
 * 1. Use binary search twice:
 *      - First, find the **leftmost (first)** occurrence of `target`.
 *      - Second, find the **rightmost (last)** occurrence of `target`.
 * 2. For both searches:
 *      - Compute `mid = left + (right - left) / 2`.
 *      - If `nums[mid] == target`, continue searching:
 *          - Left search → move `right = mid - 1` to find first occurrence.
 *          - Right search → move `left = mid + 1` to find last occurrence.
 *      - Adjust pointers normally if `nums[mid] < target` or `nums[mid] > target`.
 * 3. Return `[firstPosition, lastPosition]`. If not found, return `[-1, -1]`.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(log N) - Two binary searches, each O(log N).
 * Space Complexity: O(1) - Constant extra space used.
 * -----------------------------------------------------------
 */

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        vector<int>vec{-1,-1};
        int n=nums.size();
        if(n==0)
        return vec;
        int first=lower_bound(nums.begin(),nums.end(),target)-nums.begin();
        int second=upper_bound(nums.begin(),nums.end(),target)-nums.begin();
        if(first<n && nums[first]==target)
        {
            vec[0]=first;
            vec[1]=second-1;
            return vec;
        }
        return vec;
    }
};