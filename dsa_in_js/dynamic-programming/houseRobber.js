/**
 * House Robber (Dynamic Programming)
 * ----------------------------------
 * Problem:
 *  You are given an array 'nums' representing the amount of money at each house.
 *  You cannot rob two adjacent houses. Find the maximum amount you can rob.
 *
 * Approach:
 *  Use a dynamic programming array `dp` where:
 *    dp[i] = maximum money that can be robbed from the first i houses.
 *
 * Recurrence relation:
 *    dp[i] = max(dp[i-1], nums[i] + dp[i-2])
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *   - Can be optimized to O(1) by storing only the last two states
 *     instead of maintaining a full DP array.
 *
 * Author: Ankit Dand
 * Description: Classic DP approach with clear state representation.
 */

/**
 * @param {number[]} nums - Array of money values in houses
 * @returns {number} Maximum money that can be robbed
 */
function houseRobber(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[n - 1];
}

// 🧠 Example Demonstrations
console.log("House Robber Examples:");
console.log("[1,2,3,1] →", houseRobber([1, 2, 3, 1])); // 4
console.log("[2,7,9,3,1] →", houseRobber([2, 7, 9, 3, 1])); // 12
console.log("[5,3,4,11,2] →", houseRobber([5, 3, 4, 11, 2])); // 16
