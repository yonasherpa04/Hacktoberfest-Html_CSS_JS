/**
 * Longest Common Subsequence (Dynamic Programming)
 * ------------------------------------------------
 * Problem:
 *  Given two strings `text1` and `text2`, find the length of their longest common subsequence (LCS).
 *  A subsequence is a sequence that appears in the same relative order,
 *  but not necessarily contiguous within the string.
 *
 * Approach:
 *  Use a 2D dynamic programming table `dp` where:
 *    dp[i][j] = length of LCS of text1[0..i-1] and text2[0..j-1]
 *
 * Recurrence relation:
 *    If text1[i-1] === text2[j-1]:
 *       dp[i][j] = 1 + dp[i-1][j-1]
 *    Else:
 *       dp[i][j] = max(dp[i-1][j], dp[i][j-1])
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 *
 * Author: Ankit Dand
 * Description: Classic 2D DP implementation of the LCS problem with clear state transitions.
 */

/**
 * @param {string} text1 - First input string
 * @param {string} text2 - Second input string
 * @returns {number} Length of the longest common subsequence
 */
function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;

  // Initialize 2D DP table with zeros
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Build DP table bottom-up
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

// 🧠 Example Demonstrations
console.log("Longest Common Subsequence Examples:");
console.log(
  'text1 = "abcde", text2 = "ace" →',
  longestCommonSubsequence("abcde", "ace")
); // 3
console.log(
  'text1 = "abc", text2 = "abc" →',
  longestCommonSubsequence("abc", "abc")
); // 3
console.log(
  'text1 = "abc", text2 = "def" →',
  longestCommonSubsequence("abc", "def")
); // 0
