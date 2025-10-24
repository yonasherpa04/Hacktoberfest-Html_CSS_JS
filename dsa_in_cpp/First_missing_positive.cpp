/*
    Problem: Given an unsorted array of integers, return the smallest positive number
    that is not present in the array.

    Approach (O(n) Time, O(1) Space):
        - We use an in-place hashing or "cyclic sort" idea.
        - Each number 'x' in range [1, n] should ideally be placed at index (x - 1).
        - We repeatedly swap elements to move them to their correct index positions.
        - After rearrangement, the first index where nums[i] != i + 1 gives the smallest missing positive.

    Time Complexity: O(n)
        - Each element is swapped at most once, so the loop runs in linear time.

    Space Complexity: O(1)
        - Only constant extra space is used (in-place swapping).
*/

#include <iostream>
#include <vector>
using namespace std;

int missing(vector<int> nums)
{
    int n = nums.size();

    // Place each positive integer in its correct index position
    for (int i = 0; i < n; i++)
    {
        // Keep swapping until current number is in its correct place
        while (
            nums[i] > 0 && nums[i] <= n && // valid positive range
            nums[nums[i] - 1] != nums[i]   // avoid infinite swaps
        )
        {
            swap(nums[i], nums[nums[i] - 1]); // place nums[i] at its correct position
        }
    }

    // Find the first index where nums[i] != i + 1
    for (int i = 0; i < n; i++)
    {
        if (nums[i] != i + 1)
        {
            return i + 1; // This is the smallest missing positive
        }
    }

    // If all numbers 1..n are present, return n + 1
    return n + 1;
}

// Example usage
int main()
{
    vector<int> nums = {3, 4, -1, 1};
    cout << "Smallest missing positive: " << missing(nums) << endl;
    return 0;
}
