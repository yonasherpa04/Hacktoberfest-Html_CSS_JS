/**
 * Title: 4. Median of Two Sorted Arrays [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * Description:
 * Given two sorted arrays `nums1` and `nums2` of sizes `m` and `n` respectively,
 * return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 * Algorithm:
 * 1. Ensure `nums1` is the smaller array (swap if necessary) to optimize binary search.
 * 2. Binary search on the smaller array (`nums1`):
 *      - `left = 0`, `right = nums1.size()`.
 *      - While `left <= right`:
 *          a) Partition `nums1` at `i = (left + right) / 2`.
 *          b) Partition `nums2` at `j = (m + n + 1) / 2 - i`.
 *          c) Let:
 *               - `nums1Left = (i == 0 ? -INF : nums1[i-1])`
 *               - `nums1Right = (i == m ? INF : nums1[i])`
 *               - `nums2Left = (j == 0 ? -INF : nums2[j-1])`
 *               - `nums2Right = (j == n ? INF : nums2[j])`
 *          d) If `nums1Left <= nums2Right` and `nums2Left <= nums1Right`:
 *               - Correct partition found.
 *               - If total length `(m+n)` is even: median = `(max(nums1Left, nums2Left) + min(nums1Right, nums2Right)) / 2`.
 *               - Else: median = `max(nums1Left, nums2Left)`.
 *          e) Else if `nums1Left > nums2Right`, move `right = i - 1`.
 *          f) Else, move `left = i + 1`.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(log min(m, n)) - Binary search on the smaller array.
 * Space Complexity: O(1) - Constant extra space used.
 * -----------------------------------------------------------
 */


#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int n1=nums1.size();
        int n2=nums2.size();
        if(n1>n2){
            return findMedianSortedArrays(nums2,nums1);
        }
        int low=0,high=n1;
        int left=(n1+n2+1)/2;
        while(low<=high){
            int mid1=low+((high-low)>>1);
            int mid2=left-mid1;
            int l1=(mid1-1>=0 && mid1-1<n1)?nums1[mid1-1]:INT_MIN;
            int l2=(mid2-1>=0 && mid2-1<n2)?nums2[mid2-1]:INT_MIN;
            int r1=(mid1>=0 && mid1<n1)?nums1[mid1]:INT_MAX;
            int r2=(mid2>=0 && mid2<n2)?nums2[mid2]:INT_MAX;
            if(l1<=r2 && l2<=r1){
                return ((n1+n2)&1)?(double)max(l1,l2):(double)(max(l1,l2)+min(r1,r2))/2.0;
            }
            else if(l1>r2){
                high=mid1-1;
            }
            else{
                low=mid1+1;
            }
        }
        return 0.0;
    }
};