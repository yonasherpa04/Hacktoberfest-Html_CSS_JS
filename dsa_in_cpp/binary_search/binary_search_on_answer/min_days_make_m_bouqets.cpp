/**
 * Title: 1482. Minimum Number of Days to Make m Bouquets [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/
 *
 * Description:
 * Given an integer array `bloomDay`, an integer `m` (number of bouquets) and an integer `k` (flowers per bouquet),
 * you need to make `m` bouquets. To make one bouquet you must use `k` adjacent flowers from the garden.
 * The i-th flower will bloom on `bloomDay[i]` and can be used in a bouquet only on or after that day.
 *
 * Return the minimum number of days needed to make `m` bouquets. If it is impossible to make `m` bouquets, return `-1`.
 *
 * Example:
 * - bloomDay = [1,10,3,10,2], m = 3, k = 1 -> answer = 3
 * - bloomDay = [1,10,3,10,2], m = 3, k = 2 -> answer = -1 (not enough flowers)
 *
 * Algorithm:
 * 1. Quick check: if `m * k > bloomDay.size()` return -1 (not enough flowers overall).
 * 2. Use binary search on the number of days `d` (search space = minDay .. maxDay):
 *      - left = *min_element(bloomDay.begin(), bloomDay.end())
 *      - right = *max_element(bloomDay.begin(), bloomDay.end())
 * 3. While `left < right`:
 *      a) mid = left + (right - left) / 2  // candidate day
 *      b) Check feasibility for `mid`:
 *            - Iterate bloomDay and count consecutive flowers with `bloomDay[i] <= mid`.
 *            - Whenever you collect `k` consecutive bloomed flowers, increment bouquets count and reset consecutive count.
 *            - If bouquets count >= m, `mid` is feasible.
 *      c) If feasible, set `right = mid` (try smaller days). Else, set `left = mid + 1` (need more days).
 * 4. After loop, `left` (== right) is the minimum feasible day. Return `left` if it is feasible, otherwise return `-1`.
 *
 * Implementation notes:
 * - The feasibility check is O(n) and must use a single pass counting consecutive bloomed flowers.
 * - Use careful bounds: left can be set to 1 as well, but using min(bloomDay) and max(bloomDay) is natural.
 * - If `m * k > n`, skip binary search and return -1 immediately.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(n * log D) where `n = bloomDay.size()` and `D = max(bloomDay) - min(bloomDay)` (binary search over days,
 *                  each feasibility check scans the array).
 * Space Complexity: O(1) - Constant extra space (excluding input and output).
 * -----------------------------------------------------------
 */

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int minDays(vector<int>& bloomDay, int m, int k) {
        int n=bloomDay.size();
        if((long long)m*k > n) return -1;
        int low=*min_element(bloomDay.begin(),bloomDay.end());
        int high=*max_element(bloomDay.begin(),bloomDay.end());
        int ans;
        while(low<=high)
        {
            int mid=(low+high)/2;
            int ktemp=0,cnt=0;
            for(int x : bloomDay)
            {
                if(x<=mid)
                {
                    ktemp++;
                }
                else
                    ktemp=0;
                if(ktemp==k)
                {
                    cnt++;
                    ktemp=0;
                }
            }
            if(cnt>=m)
            {
                ans=mid;
                high=mid-1;
            }
            else
                low=mid+1;
        }
        return ans;
    }
};