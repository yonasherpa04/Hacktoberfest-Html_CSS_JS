/**
 * Title: Aggressive Cows (GeeksforGeeks)
 *
 * Problem Link: https://www.geeksforgeeks.org/problems/aggressive-cows/1. :contentReference[oaicite:0]{index=0}
 *
 * Description:
 * Given `N` stalls at distinct integer positions (array `stalls[]`) and an integer `C` (number of cows),
 * place the `C` cows in the stalls such that the minimum distance between any two cows is maximized.
 * Return the largest minimum distance possible.
 *
 * (Classic "maximize the minimum" problem — solved by binary searching the answer and using a greedy feasibility check.)
 * :contentReference[oaicite:1]{index=1}
 *
 * Algorithm:
 * 1. Sort the stall positions: `sort(stalls.begin(), stalls.end())`.
 * 2. Binary search on the answer (minimum distance `d`):
 *      - Set `left = 0` (or 1) and `right = stalls.back() - stalls.front()` (maximum possible distance).
 *      - While `left < right`:
 *          a) Let `mid = left + (right - left + 1) / 2` (use upper mid to avoid infinite loop when narrowing).
 *          b) Check feasibility for `mid` (can we place `C` cows so each pair is at least `mid` apart?):
 *                 - Place first cow at `stalls[0]`, let `count = 1`, `last_pos = stalls[0]`.
 *                 - For each subsequent stall position `pos`:
 *                       if `pos - last_pos >= mid`:
 *                           place a cow → `count++`, `last_pos = pos`.
 *                       if `count == C` return true (feasible).
 *                 - If loop ends and `count < C`, `mid` is not feasible.
 *          c) If feasible, `left = mid` (we can try larger minimum distance).
 *             Else, `right = mid - 1` (need smaller distance).
 * 3. When loop ends `left` (== `right`) is the largest minimum distance possible. Return `left`.
 *
 * Implementation notes:
 * - Use `mid = left + (right - left + 1) / 2` when moving `left = mid` to prevent infinite loop.
 * - Sorting is O(N log N); each feasibility check is O(N).
 * - Use `long long` only if stall positions can exceed 32-bit, otherwise `int` suffices.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(N log D) where `N = stalls.size()` and `D = stalls.back() - stalls.front()` (binary search over distance,
 *                  each check scans all stalls). Plus initial sort O(N log N) which is typically dominated by sort step.
 * Space Complexity: O(1) - Constant extra space (excluding input and output).
 * -----------------------------------------------------------
 */


#include<bits/stdc++.h>
using namespace std;

class Solution {
  public:
    int aggressiveCows(vector<int> &stalls, int k) {
        int n=stalls.size();
        sort(stalls.begin(),stalls.end());
        int low=0,high=stalls[n-1]-stalls[0];
        while(low<=high){
            int mid=low+((high-low)>>1);
            int cnt=1;
            int last=stalls[0];
            for(int i=1;i<n;i++){
                if(stalls[i]-last>=mid){
                    cnt++;
                    last=stalls[i];
                }
            }
            if(cnt>=k){
                low=mid+1;
            }
            else{
                high=mid-1;
            }
        }
        return high;
    }
};
