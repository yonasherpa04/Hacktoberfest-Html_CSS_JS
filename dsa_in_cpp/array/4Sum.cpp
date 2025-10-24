/*
    Problem: You are given an array of integers. Find all possible four integers (quadruplets)
    from the given array whose sum is equal to the given target integer and return them in an array.

    This problem is an extension of the famous 2-sum and 3-sum problems.

    Approach:
        - Sort the array to handle duplicates and use the two-pointer technique efficiently.
        - Fix the first two numbers (nums[i] and nums[j]) using nested loops.
        - Use two pointers (left, right) to find the remaining two numbers such that:
            nums[i] + nums[j] + nums[left] + nums[right] == target
        - Move pointers and skip duplicates appropriately to avoid repeated quadruplets.
        - Continue until all combinations are checked.

    Time Complexity:
        - O(n^3):
            * First loop runs O(n)
            * Second loop runs O(n)
            * Two-pointer search inside runs O(n)
            → Total = O(n^3)

    Space Complexity:
        - O(1) (ignoring the result storage)
            * Only uses a few pointers and variables.
            * Sorting takes O(log n) stack space internally.
*/

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> four_sum(vector<int> nums, int target)
{
    sort(nums.begin(), nums.end()); // Sort array for duplicate handling and pointer logic
    vector<vector<int>> result;
    int n = nums.size();

    // First loop to fix the first element
    for (int i = 0; i < n - 3; i++)
    {
        // Skip duplicate values for the first number
        if (i > 0 && nums[i] == nums[i - 1])
            continue;

        // Second loop to fix the second element
        for (int j = i + 1; j < n - 2; j++)
        {
            // Skip duplicate values for the second number
            if (j > i + 1 && nums[j] == nums[j - 1])
                continue;

            int left = j + 1;  // Third pointer
            int right = n - 1; // Fourth pointer

            // Two-pointer search for remaining two numbers
            while (left < right)
            {
                // Use long long to avoid integer overflow
                long long total = (long long)nums[i] + nums[j] + nums[left] + nums[right];

                if (total == target)
                {
                    // Found a valid quadruplet
                    result.push_back({nums[i], nums[j], nums[left], nums[right]});

                    // Skip duplicates for third and fourth numbers
                    while (left < right && nums[left] == nums[left + 1])
                        left++;
                    while (left < right && nums[right] == nums[right - 1])
                        right--;

                    // Move both pointers after processing current pair
                    left++;
                    right--;
                }
                else if (total < target)
                {
                    // Need a larger sum → move left pointer right
                    left++;
                }
                else
                {
                    // Need a smaller sum → move right pointer left
                    right--;
                }
            }
        }
    }

    return result;
}

// Example Usage
int main()
{
    vector<int> nums = {1, 0, -1, 0, -2, 2};
    int target = 0;

    vector<vector<int>> result = four_sum(nums, target);

    cout << "Quadruplets summing to " << target << " are:\n";
    for (auto &quad : result)
    {
        cout << "[ ";
        for (int num : quad)
            cout << num << " ";
        cout << "]\n";
    }

    return 0;
}
