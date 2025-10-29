/**
 * Title: 860. Lemonade Change [LeetCode]
 *
 * Problem Link: https://leetcode.com/problems/lemonade-change/
 *
 * Description:
 * At a lemonade stand, all lemonades cost $5.
 * Customers are paying with $5, $10, and $20 bills. You must provide the correct change to each
 * customer so that the net transaction equals $5. You start with no change in hand.
 *
 * The array bills represents the bills paid by customers in order. Return true if you can
 * provide the correct change to every customer, or false otherwise.
 *
 * Algorithm: Greedy Approach
 * This problem is solved using a greedy strategy by always prioritizing the use of larger denominations
 * for change to maximize the availability of $5 bills, which are the most flexible change unit.
 *
 * 1. Initialize two counters: five = 0 (number of $5 bills held) and ten = 0 (number of $10 bills held).
 * 2. Iterate through each bill paid by a customer:
 *     a) If bill is $5: Increment five. No change is required.
 *     b) If bill is $10: Increment ten. Change required is $5, so decrement five.
 *     c) If bill is $20: Change required is $15.
 *      - Greedy Choice: First attempt to make $15 change using one $10 bill and one $5 bill (--ten and --five). This is preferred as it saves the $5 bills.
 *      - Fallback Choice: If no $10 bill is available, make $15 change using three $5 bills (five -= 3).
 * 3. After any transaction requiring change (i.e., $10 or $20 bills), check if the count of $5 bills
 * is less than zero. If five < 0, return false immediately, as change cannot be made.
 * 4. If the loop completes successfully, return true.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(N) - We iterate through the list of bills exactly once.
 * Space Complexity: O(1) - Constant extra space used to store two integer counters.
 * -----------------------------------------------------------
 */
#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int five = 0, ten = 0;
        bool flag=true;
        for (int bill : bills) {
            if (bill == 5) {
                five++;
            } else if (bill == 10) {
                ten++;
                five--;
            } else {
                if (ten>0) {
                    ten--;
                    five--;
                } else {
                    five -= 3;
                }
            }
            if (five < 0) {
                flag=false;
            }
        }
        return flag;
    }
};