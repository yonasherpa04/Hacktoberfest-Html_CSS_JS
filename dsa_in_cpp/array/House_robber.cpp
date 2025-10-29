/*
    Problem: House Robber

    You are a professional robber planning to rob houses along a street.
    Each house has a certain amount of money stashed.
    The only constraint stopping you from robbing all of them is that
    adjacent houses have connected security systems — if two adjacent houses
    are robbed on the same night, the alarm will go off.

    Task:
        Given an integer array nums representing the amount of money in each house,
        return the maximum amount you can rob tonight without alerting the police.

    Example:
        Input: nums = [2, 7, 9, 3, 1]
        Output: 12
        Explanation:
            - Rob house 1 (2) and house 3 (9) and house 5 (1)
            - Total = 2 + 9 + 1 = 12

    Approach:
        - This is a **Dynamic Programming** problem.
        - For each house, you have two choices:
              1. Rob it (then skip the previous house)
              2. Skip it (take the previous max)
        - We keep track of:
              - `previous`: max amount till the house before the last one
              - `current`: max amount till the current house
        - At each step:
              - `current = max(previous + num, current)`
              - This ensures we choose the better option (rob current or skip it)

    Time Complexity:
        O(n) — we loop through the houses once.

    Space Complexity:
        O(1) — we only use a few variables (no extra DP array needed).
*/

#include <iostream>
#include <vector>
using namespace std;

int rob(vector<int> nums)
{
    int previous = 0; // Max money robbed till the previous-to-previous house
    int current = 0;  // Max money robbed till the previous house

    for (int num : nums)
    {
        int temp = current;
        // Choose the better option:
        // 1. Rob this house + money till non-adjacent previous
        // 2. Skip this house (keep current)
        current = max(previous + num, current);
        previous = temp; // Move the window forward
    }

    return current; // Final maximum money robbed
}

int main()
{
    vector<int> houses = {2, 7, 9, 3, 1};

    cout << "Maximum money that can be robbed: " << rob(houses) << endl;

    /*
        Dry Run:
        Houses: [2, 7, 9, 3, 1]

        Step 1: num=2  → current=max(0+2, 0)=2   → previous=0
        Step 2: num=7  → current=max(0+7, 2)=7   → previous=2
        Step 3: num=9  → current=max(2+9, 7)=11  → previous=7
        Step 4: num=3  → current=max(7+3, 11)=11 → previous=11
        Step 5: num=1  → current=max(11+1, 11)=12→ previous=11

        Output = 12
    */
    return 0;
}
