/**
 * Title: 875. Koko Eating Bananas [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/koko-eating-bananas/
 *
 * Description:
 * Koko loves to eat bananas. There are N piles of bananas, the i-th pile has piles[i] bananas.
 * Koko can decide her eating speed K (bananas/hour). Each hour, she chooses some pile and eats K
 * bananas from it. If a pile has less than K bananas, she eats all of them in that hour.
 * Koko wants to finish eating all bananas within H hours. Return the minimum integer K
 * (the minimum eating speed) such that she can finish all the bananas within H hours.
 *
 * Algorithm: Binary Search on the Answer
 * The problem is to find the minimum value of K (the speed) that satisfies a monotonic condition.
 * We use binary search over the possible range of K.
 *
 * 1. Initialize the search space for speed K:
 * - left = 1 (Minimum possible speed).
 * - right = 1e9 (A sufficient upper bound, or the max pile size for tighter bounds).
 * 2. While left < right:
 * - Compute the test speed mid = left + (right - left) / 2.
 * - Calculate the total time s required to eat all piles at speed mid.
 * - Time for one pile of size x is calculated using ceiling division: (x + mid - 1) / mid.
 * - Check the feasibility:
 * a) If s <= h (Feasible): Koko finishes on time. This mid speed is a possible answer,
 * but we attempt to find an even smaller speed. Set right = mid.
 * b) Else (s > h) (Infeasible): Koko is too slow. The speed must be increased.
 * Set left = mid + 1.
 * 3. When the loop terminates (left == right), left holds the minimum speed K.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(N * log M), where N is the number of piles and M is the maximum possible speed (1e9).
 * The log M comes from the binary search iterations, and N comes from summing the time for all piles in each iteration.
 * Space Complexity: O(1) - Constant extra space used.
 * -----------------------------------------------------------
 */

 #include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int left = 1, right = 1e9;
        while (left < right) {
            int mid = (left + right) >> 1;
            int s = 0;
            for (int& x : piles) s += (x + mid - 1) / mid;
            if (s <= h)
                right = mid;
            else
                left = mid + 1;
        }
        return left;
    }
};
