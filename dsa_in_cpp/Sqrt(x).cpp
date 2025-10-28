/**
 * Title: 69. Sqrt(x) [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/sqrtx/
 *
 * Description:
 * Given a non-negative integer x,
 * return the square root of x rounded down to the nearest integer.
 * 
 * The result should be the integer part only.
 * You cannot use any built-in exponent or square root functions.
 *
 * Approach:
 * 1. If x < 2, return x directly (since sqrt(0)=0 and sqrt(1)=1).
 * 2. Use binary search between 1 and x.
 * 3. Compute mid = (l + r) / 2 safely to avoid overflow.
 * 4. If mid * mid == x, return mid (perfect square found).
 * 5. If mid * mid < x, store mid as potential answer and move right.
 * 6. If mid * mid > x, move left to find a smaller mid.
 * 7. When search ends, return the last valid mid stored in ans.
 *
 * Example 1:
 * Input: x = 4
 * Output: 2
 *
 * Example 2:
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.828..., floor value is 2.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(log N) — due to binary search.
 * Space Complexity: O(1) — constant space used.
 * -----------------------------------------------------------
 */

 // Source Code
 class Solution {
public:
    int mySqrt(int x) {
        if (x < 2) {
            return x;
        }
        int l = 1;
        int r = x;
        int ans = 1;

        while (l <= r) {
            // To prevent potential overflow
            int m = l + (r - l) / 2;
            if ((long long)m * m == x) {
                return m;
            } 
            // using long long to prevent overflow when multiplying
            else if ((long long)m * m < x) {
                ans = m;
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return ans;
    }
};