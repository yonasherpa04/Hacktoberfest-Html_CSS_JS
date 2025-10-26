/**
 * Title: 875. Koko Eating Bananas [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/koko-eating-bananas/
 *
 * Description:
 * Koko loves to eat bananas. There are `n` piles of bananas, the `i`-th pile has `piles[i]` bananas.
 * The guards have gone and will come back in `h` hours.
 *
 * Koko can decide her eating speed of `k` bananas per hour. Each hour, she chooses some pile of bananas
 * and eats `k` bananas from that pile. If the pile has fewer than `k` bananas, she eats all of them and
 * will not eat any more during that hour.
 *
 * Return the minimum integer `k` such that Koko can eat all the bananas within `h` hours.
 *
 * You must write an algorithm with O(n log m) runtime complexity (where `m` is the maximum pile size).
 *
 * Algorithm:
 * 1. Observe that if Koko can finish with speed `k`, she can finish with any `k' > k` as well — monotonic property.
 * 2. Binary search on the answer `k`:
 *      - Set `left = 1` (min speed) and `right = max_element(piles.begin(), piles.end())` (max speed).
 *      - While `left < right`:
 *          a) Let `mid = left + (right - left) / 2` (candidate speed).
 *          b) Compute total hours needed with speed `mid`:
 *                 hours = sum( (piles[i] + mid - 1) / mid ) for all piles (integer ceil).
 *             Use a 64-bit accumulator to avoid overflow for large inputs.
 *          c) If `hours <= h`, then `mid` is a feasible speed — move `right = mid`.
 *             Else `hours > h`, speed too slow — move `left = mid + 1`.
 * 3. When loop ends, `left == right` is the minimum feasible speed. Return `left`.
 *
 * Implementation notes:
 * - Use `(pile + k - 1) / k` to compute the ceil division for hours per pile.
 * - Use `long long` for accumulating `hours` and for `right` if pile sizes can be large.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(n * log m) where `n = piles.size()` and `m = max(piles)` (binary search over speeds,
 *               each check scans all piles).
 * Space Complexity: O(1) - Constant extra space (excluding input).
 * -----------------------------------------------------------
 */


#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        long long maxele=*max_element(piles.begin(),piles.end());
        long long low=1,high=maxele,mid;
        while(low<=high)
        {
            mid=(low+high)/2;
            long long hrs=0;
            for(long x:piles)
            {
                hrs+=(x+mid-1)/mid;
            }
            if(hrs<=h)
            {
                high=mid-1;
            }
            else
                low=mid+1;
        }
        return low;
    }
};