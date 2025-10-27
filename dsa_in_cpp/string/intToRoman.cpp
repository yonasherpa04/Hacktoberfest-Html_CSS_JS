/*
    Problem: Integer to Roman
    Problem No: 12 (LeetCode)

    Statement:
    Convert an integer (1–3999) into its Roman numeral representation.

    Approach (Greedy):
    ------------------
    - Maintain arrays of Roman symbols and their corresponding values.
    - Starting from the largest value, subtract as many times as possible from `num`
      and append the matching symbol.
    - Continue until `num` becomes 0.

    Complexity:
    Time:  O(1)   // Fixed set of Roman symbols
    Space: O(1)

    Example:
    Input:  1994
    Output: "MCMXCIV"
*/

#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    string intToRoman(int num) {
        vector<int> value = {1000, 900, 500, 400, 100, 90, 50,
                             40,   10,  9,   5,   4,   1};
        vector<string> symbol = {"M",  "CM", "D",  "CD", "C",  "XC", "L",
                                 "XL", "X",  "IX", "V",  "IV", "I"};
        string res = "";

        for (int i = 0; i < value.size(); i++) {
            int times = num / value[i];
            num %= value[i];
            while (times--) res += symbol[i];
        }
        return res;
    }
};
