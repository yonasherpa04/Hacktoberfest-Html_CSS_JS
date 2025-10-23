/* Problem:
   You are given an array of integers and a target integer.
   Return the indices of two elements in the array such that their sum equals the target.

   There are two approaches demonstrated here:
   1) Brute Force Approach (Easy to learn)
        - Uses nested loops to check all pairs.
        - Time Complexity: O(n^2)
        - Space Complexity: O(1)
   2) Optimized Approach (Using Hashing)
        - Uses an unordered_map to store elements and their indices for fast lookup.
        - Time Complexity: O(n)
        - Space Complexity: O(n)
*/

#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

// Brute Force Approach
vector<int> twoSum1(const vector<int> &nums, int target)
{
    // Iterate over each element
    for (int i = 0; i < nums.size(); i++)
    {
        // Check all subsequent elements for a pair that sums to target
        for (int j = i + 1; j < nums.size(); j++)
        {
            if (nums[i] + nums[j] == target)
            {
                // Pair found, return their indices
                return {i, j};
            }
        }
    }
    // No pair found
    return {-1, -1};
}

// Optimized Approach (Hashing)
vector<int> twoSum2(const vector<int> &nums, int target)
{
    unordered_map<int, int> numMap; // Stores number -> index

    for (int i = 0; i < nums.size(); i++)
    {
        int complement = target - nums[i]; // The number we need to find in the map
        if (numMap.find(complement) != numMap.end())
        {
            // If complement exists, we found the pair
            return {numMap[complement], i};
        }
        // Otherwise, store the current number with its index
        numMap[nums[i]] = i;
    }
    // No pair found
    return {-1, -1};
}

int main()
{
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;

    // Test Brute Force
    vector<int> result1 = twoSum1(nums, target);
    cout << "Brute Force: " << result1[0] << ", " << result1[1] << endl;

    // Test Optimized
    vector<int> result2 = twoSum2(nums, target);
    cout << "Optimized: " << result2[0] << ", " << result2[1] << endl;

    return 0;
}
