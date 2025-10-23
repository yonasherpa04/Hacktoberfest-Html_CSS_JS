/**
 * Title: 8. String to Integer (atoi) [LeetCode]
 * 
 * Problem Link: https://leetcode.com/problems/string-to-integer-atoi/
 *
 * Description:
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
 * 
 * The algorithm follows these steps:
 *   1. Ignore leading spaces.
 *   2. Check for optional '+' or '-' sign.
 *   3. Read characters until a non-digit is found.
 *   4. Convert digits to an integer.
 *   5. Handle overflow or underflow.
 *
 * Examples:
 * ---------
 * Example 1:
 * Input: s = "42"
 * Output: 42
 * Explanation: The string represents the integer 42.
 *
 * Example 2:
 * Input: s = "   -42"
 * Output: -42
 * Explanation: Skips leading spaces, reads '-', then converts "42" to -42.
 *
 * -----------------------------------------------------------
 * Time Complexity: O(n) — traverse the string once.
 * Space Complexity: O(1) — constant extra space.
 * -----------------------------------------------------------
 */

class Solution {
public:
    int myAtoi(string s) {
        int i = 0, n = s.size(), sign = 1;
        long ans = 0;

        // 1️⃣ Skip leading spaces
        while (i < n && s[i] == ' ') i++;

        // 2️⃣ Handle optional sign
        if (i < n && (s[i] == '+' || s[i] == '-')) {
            sign = (s[i] == '-') ? -1 : 1;
            i++;
        }

        // 3️⃣ Convert digits to integer.
        while (i < n && isdigit(s[i])) {
            int digit = s[i] - '0';

            // 4️⃣ Check for overflow / underflow before adding the digit
            if (ans > (INT_MAX - digit) / 10)
                return sign == 1 ? INT_MAX : INT_MIN;

            ans = ans * 10 + digit;
            i++;
        }
        
        // 5️⃣ Return final result with sign
        return ans * sign;
    }
};