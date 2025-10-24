/*
    Problem: You are given an array of integers and a target integer.
    Return a list of all possible unique combinations from the array whose sum equals the target.

    Approach:
        1) Use backtracking to explore all possible combinations.
        2) Start from the first element and recursively include elements until the target sum is reached.
        3) If sum exceeds target, backtrack.
        4) Skip duplicates to ensure uniqueness.

    Time Complexity: O(2^n)
        - In the worst case, each element can either be included or not in a combination.
        - n = number of elements in the array.

    Space Complexity: O(n)
        - Recursive stack + temporary path vector.
*/

#include <iostream>
#include <vector>
#include <algorithm> // for sort
using namespace std;

// Helper function for backtracking
void backtrack(vector<int> &nums, int target, vector<int> &path, int index, vector<vector<int>> &result)
{
    if (target == 0)
    {
        // Found a valid combination
        result.push_back(path);
        return;
    }

    for (int i = index; i < nums.size(); i++)
    {
        // Skip duplicates
        if (i > index && nums[i] == nums[i - 1])
            continue;

        // If current number exceeds remaining target, break (since array is sorted)
        if (nums[i] > target)
            break;

        // Include current number in path
        path.push_back(nums[i]);
        // Recurse with reduced target
        backtrack(nums, target - nums[i], path, i + 1, result); // i+1 to avoid reusing same element
        // Backtrack: remove last element
        path.pop_back();
    }
}

vector<vector<int>> combination(vector<int> nums, int target)
{
    vector<vector<int>> result;
    vector<int> path;

    // Sort array to handle duplicates and optimize
    sort(nums.begin(), nums.end());

    backtrack(nums, target, path, 0, result);
    return result;
}

// Example Usage
int main()
{
    vector<int> nums = {10, 1, 2, 7, 6, 1, 5};
    int target = 8;

    vector<vector<int>> result = combination(nums, target);

    cout << "Unique combinations summing to " << target << ":\n";
    for (auto &comb : result)
    {
        cout << "[ ";
        for (int num : comb)
            cout << num << " ";
        cout << "]\n";
    }

    return 0;
}
