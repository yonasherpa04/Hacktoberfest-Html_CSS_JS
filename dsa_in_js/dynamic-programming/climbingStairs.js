/**
 * Climbing Stairs (Dynamic Programming)
 * -------------------------------------
 * Problem:
 *  You are climbing a staircase with 'n' steps. You can climb either 1 or 2 steps at a time.
 *  Find the total number of distinct ways to reach the top.
 *
 * Approach:
 *  Use a dynamic programming array `dp` where:
 *    dp[i] = number of distinct ways to reach step i.
 *
 * Recurrence relation:
 *    dp[i] = dp[i-1] + dp[i-2]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *   - Can be optimized to O(1) by storing only the last two computed values
 *     instead of maintaining a full DP array.
 *
 * Author: Ankit Dand
 * Description: Classic bottom-up DP approach based on the Fibonacci relation.
 */

/**
 * @param {number} n - Total number of steps
 * @returns {number} Total distinct ways to climb to the top
 */
function climbingStairs(n) {
  if (n <= 2) return n;

  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// 🧠 Example Demonstrations
console.log("Climbing Stairs Examples:");
console.log("n = 2 →", climbingStairs(2)); // 2
console.log("n = 3 →", climbingStairs(3)); // 3
console.log("n = 5 →", climbingStairs(5)); // 8
