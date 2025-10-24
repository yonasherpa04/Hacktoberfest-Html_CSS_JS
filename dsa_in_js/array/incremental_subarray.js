/**
 * Solves the problem of finding the minimum number of operations needed
 * to cover a range [1, n] with given segments
 * @param {number} t - Number of test cases
 * @param {Array<Array<number>>} testCases - Array of test cases, each containing [n, m, array]
 */
function solveProblem(t, testCases) {
    const results = [];
    
    for (let i = 0; i < t; i++) {
        const [n, m, a] = testCases[i];
        
        // Calculate the gap between the last segment and the end
        let ans = n - a[m - 1] + 1;
        
        // Check if there's a segment starting at position 1
        // If yes, we only need 1 operation
        for (let j = 1; j < m; j++) {
            if (a[j] === 1) {
                ans = 1;
                break;
            }
        }
        
        results.push(ans);
    }
    
    return results;
}

/**
 * Example usage and test cases
 */
function main() {
    // Example 1: Simple case
    console.log("=== Example 1 ===");
    const t1 = 1;
    const testCases1 = [
        [10, 3, [0, 3, 6, 8]] // n=10, m=3, segments at positions 3,6,8
    ];
    console.log("Input:", testCases1);
    console.log("Output:", solveProblem(t1, testCases1)); // Expected: 3 (10-8+1=3)
    
    // Example 2: Case where segment starts at position 1
    console.log("\n=== Example 2 ===");
    const t2 = 1;
    const testCases2 = [
        [15, 4, [0, 1, 5, 10, 12]] // n=15, m=4, segments include position 1
    ];
    console.log("Input:", testCases2);
    console.log("Output:", solveProblem(t2, testCases2)); // Expected: 1 (since a[1]=1)
    
    // Example 3: Multiple test cases
    console.log("\n=== Example 3 ===");
    const t3 = 2;
    const testCases3 = [
        [8, 2, [0, 4, 7]],   // n=8, m=2, segments at 4,7 → ans=8-7+1=2
        [12, 3, [0, 2, 6, 9]] // n=12, m=3, segments at 2,6,9 → ans=12-9+1=4
    ];
    console.log("Input:", testCases3);
    console.log("Output:", solveProblem(t3, testCases3)); // Expected: [2, 4]
}

// Time and Space Complexity Analysis:
/**
 * TIME COMPLEXITY:
 * - Let t be the number of test cases
 * - Let m be the maximum number of segments in any test case
 * - For each test case, we iterate through m segments in worst case
 * - Overall time complexity: O(t * m)
 * 
 * SPACE COMPLEXITY:
 * - We store the results array of size t
 * - We don't create additional data structures proportional to input size
 * - Overall space complexity: O(t) for storing results
 */

// Alternative version 
/**
 * For use in competitive programming environments
*/
function competitiveVersion() {
    // Simulating input reading 
    const input = `2
10 3
3 6 8
15 4
1 5 10 12`;
    
    const lines = input.trim().split('\n');
    let index = 0;
    const t = parseInt(lines[index++]);
    const results = [];
    
    for (let i = 0; i < t; i++) {
        const [n, m] = lines[index++].split(' ').map(Number);
        const a = [0]; // Starting with 0 to match 1-based indexing
        const segments = lines[index++].split(' ').map(Number);
        a.push(...segments);
        
        let ans = n - a[m] + 1;
        
        for (let j = 2; j <= m; j++) {
            if (a[j] === 1) {
                ans = 1;
                break;
            }
        }
        
        results.push(ans);
    }
    
    return results;
}

// Run examples
main();

console.log("\n=== Competitive Programming Version ===");
console.log("Output:", competitiveVersion());

/**
 * PROBLEM EXPLANATION:
 * 
 * The problem appears to be about covering a range [1, n] with segments.
 * Given:
 * - n: the total range to cover [1, n]
 * - m: number of segments
 * - a: array of segment starting positions (1-based indexing)
 * 
 * The solution calculates:
 * 1. The gap from the last segment to the end: (n - last_segment + 1)
 * 2. If any segment starts at position 1, we only need 1 operation
 * 
 * This suggests the problem might be about finding the minimum number
 * of operations needed to cover the entire range, where having a segment
 * at position 1 gives us optimal coverage.
 */