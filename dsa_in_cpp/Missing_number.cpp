/*
    You are given an array of integers in the range [0, n].
    The array contains n distinct numbers taken from 0, 1, 2, ..., n.
    Return the one number that is missing from the array.

    Example:
        Input:  nums = [3, 0, 1]
        Output: 2
        Explanation: n = 3, since numbers are [0, 1, 3], the missing number is 2.

    Another Example:
        Input:  nums = [0, 1]
        Output: 2
        Explanation: n = 2, but 2 is not in the array.
*/

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int missingNumber(vector<int> nums)
{
    // Step 1: Sort the array to make numbers appear in ascending order
    sort(nums.begin(), nums.end());

    // Step 2: Initialize a variable to store the missing number
    int missing = 0;

    // Step 3: Iterate through the sorted array
    for (int i = 0; i < nums.size(); i++)
    {
        // If the current number doesn't match its expected position (value should be equal to index)
        if (nums[i] != i)
        {
            // The missing number is equal to the index
            missing = i;
            return missing; // early return once missing number is found
        }
    }

    // Step 4: If all numbers from 0 to n-1 are present, then n is missing
    return nums.size();
}

/*
    Dry Run Example:
    ----------------
    Input: nums = [3, 0, 1]

    After sorting: nums = [0, 1, 3]

    Iteration:
      i = 0 → nums[i] = 0 → matches i → continue
      i = 1 → nums[i] = 1 → matches i → continue
      i = 2 → nums[i] = 3 → does NOT match i → missing = 2 → return 2

    Output: 2

    ✅ Missing number = 2
*/

/*
    Time Complexity:
        - O(n log n): because of sorting the array.

    Space Complexity:
        - O(1): we only use a few extra variables (in-place sorting).
*/

int main()
{
    vector<int> nums = {3, 0, 1};
    cout << "Missing number: " << missingNumber(nums) << endl; // Output: 2
    return 0;
}
