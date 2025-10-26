/*
    Problem:
        You are given a string `s`. You need to partition `s` such that every substring
        in the partition is a palindrome.
        Return all possible palindrome partitioning combinations.

    Example:
        Input:  s = "aab"
        Output: [["a", "a", "b"], ["aa", "b"]]
        Explanation:
            - "a" | "a" | "b" → all substrings are palindromes
            - "aa" | "b" → both substrings are palindromes

    My approach:
        - Use **Backtracking** to explore all possible partitions of the string.
        - For each index `start`, try to make every possible substring `s[start...i]`.
        - If the substring is a palindrome:
            - Add it to the current path.
            - Recursively process the remaining substring.
        - When we reach the end of the string (`start == s.size()`),
          push the current path (a valid palindrome partition) into the result.
        - After recursion returns, backtrack by removing the last added substring.

    Dry Run Example: s = "aab"

        Step 1: start = 0, path = []
            - i = 0 → "a" is palindrome → path = ["a"]
                → backtrack(start = 1)
                    - i = 1 → "a" is palindrome → path = ["a", "a"]
                        → backtrack(start = 2)
                            - i = 2 → "b" is palindrome → path = ["a","a","b"]
                                → start == 3 → push ["a","a","b"] to result
                    - Backtrack to ["a"]
                    - i = 2 → "ab" not palindrome → skip
            - Backtrack to []
            - i = 1 → "aa" is palindrome → path = ["aa"]
                → backtrack(start = 2)
                    - i = 2 → "b" is palindrome → path = ["aa","b"]
                        → start == 3 → push ["aa","b"] to result
        Final Result: [["a","a","b"], ["aa","b"]]

    Time Complexity:
        - O(n * 2^n)
          (At each position we may or may not cut, and palindrome checking costs O(n).)

    Space Complexity:
        - O(n)
          (Used by recursion stack and temporary path vector.)
*/

#include <iostream>
#include <vector>
using namespace std;

// Global declaration of result and path vectors to store results and current path.
vector<vector<string>> result;
vector<string> path;

// Function to check whether the substring s[l...r] is a palindrome.
bool isPalindrome(string &s, int l, int r)
{
    while (l < r)
    {
        if (s[l++] != s[r--]) // If mismatch found, not a palindrome.
            return false;
    }
    return true; // Otherwise, it is a palindrome.
}

// Recursive backtracking function to build palindrome partitions.
void backtrack(string &s, int start)
{
    // Base case: if we have reached the end of the string,
    // add the current path to result (a valid palindrome partition).
    if (start == s.size())
    {
        result.push_back(path);
        return;
    }

    // Try all possible partitions starting at index 'start'.
    for (int i = start; i < s.size(); i++)
    {
        // If substring s[start...i] is a palindrome:
        if (isPalindrome(s, start, i))
        {
            // Include this substring in the current path.
            path.push_back(s.substr(start, i - start + 1));

            // Recurse for the remaining part of the string.
            backtrack(s, i + 1);

            // Backtrack: remove the last substring and explore other possibilities.
            path.pop_back();
        }
    }
}

// Function to return all palindrome partition combinations.
vector<vector<string>> partition(string s)
{
    result.clear();
    path.clear();
    backtrack(s, 0);
    return result;
}

// Example usage
int main()
{
    string s = "aab";
    vector<vector<string>> partitions = partition(s);

    cout << "All possible palindrome partitions of \"" << s << "\":\n";
    for (auto &vec : partitions)
    {
        cout << "[ ";
        for (auto &p : vec)
            cout << p << " ";
        cout << "]\n";
    }
    return 0;
}
