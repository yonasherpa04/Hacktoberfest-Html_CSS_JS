/* Problem: You are given an array of integers and an integer. Return the indices of elements in array such that there sum is
   equal to the integer provided.

   There are two ways to solve this problem:
        1) Brute force Approach (Easy to learn)
            This focuses on using nested for loops for solving the problem.
            Space Complexity:
            Time Complexity:
        2) Optimized Version (Better Complexity)
            It focuses on using Hashing to solve the problem.
            Space Complexity;
            Time Complexity:

*/

#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

// Brute Force Approach (Beginner Friendly)
vector<int> twoSum1(vector<int> nums, int target)
{
    for (int i = 0; i < nums.size(); i++)
    {
        for (int j = i + 1; j < nums.size(); j++)
        {
            if (nums[i] + nums[j] == target)
            {
                return {i, j};
            }
        }
    }

    return {-1, -1};
}

// Optimized ApproacH (Hashing)
vector<int> twoSum2(vector<int> nums, int target)
{
    unordered_map<int, int> numMap;

    for (int i = 0; i < nums.size(); i++)
    {
        int extra = target - nums[i];
        if (numMap.find(extra) != numMap.end())
        {
            return {numMap[extra], i};
        }
        numMap[nums[i]] = i;
    }
    return {-1, -1};
}

int main()
{
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;

    vector<int> result1 = twoSum1(nums, target);
    cout << "Brute Force: " << result1[0] << ", " << result1[1] << endl;

    vector<int> result2 = twoSum2(nums, target);
    cout << "Optimized: " << result2[0] << ", " << result2[1] << endl;

    return 0;
}
