#include <bits/stdc++.h>
using namespace std;

/**
 * Title: 3Sum [LeetCode]
 * Problem Link: https://leetcode.com/problems/3sum/
 * Description:
 * Given an integer array `nums`, find all unique triplets that sum to zero.
 */

// Brute Force Approach
// Algorithm:
// 1. Use three nested loops to pick all triplets (i, j, k).
// 2. Check if nums[i] + nums[j] + nums[k] == 0.
// 3. Sort each valid triplet and insert into a set to avoid duplicates.
// Time: O(N^3), Space: O(1) auxiliary.
vector<vector<int>> threeSumBrute(vector<int>& nums) {
    int n = nums.size(); set<vector<int>> st;
    for(int i=0;i<n;i++) for(int j=i+1;j<n;j++) for(int k=j+1;k<n;k++){
        if(nums[i]+nums[j]+nums[k]==0){
            vector<int> t={nums[i],nums[j],nums[k]}; sort(t.begin(),t.end()); st.insert(t);
        }
    }
    return vector<vector<int>>(st.begin(), st.end());
}

// Hash Map Approach
// Algorithm:
// 1. Fix nums[i] as first element.
// 2. Use a hashset to find two-sum for remaining part.
// Time: O(N^2), Space: O(N).
vector<vector<int>> threeSumHash(vector<int>& nums) {
    int n = nums.size(); set<vector<int>> st;
    for(int i=0;i<n;i++){
        unordered_set<int> hashset;
        for(int j=i+1;j<n;j++){
            int third = -(nums[i] + nums[j]);
            if(hashset.count(third)){
                vector<int> t={nums[i],nums[j],third}; sort(t.begin(),t.end()); st.insert(t);
            }
            hashset.insert(nums[j]);
        }
    }
    return vector<vector<int>>(st.begin(), st.end());
}

// Optimal Two Pointer Approach
// Algorithm:
// 1. Sort the array.
// 2. Loop i, use two pointers l=i+1, r=n-1 to find pairs.
// 3. Move pointers based on sum < 0 or > 0. Skip duplicates.
// Time: O(N^2), Space: O(1) auxiliary.
vector<vector<int>> threeSumTwoPointer(vector<int>& nums) {
    vector<vector<int>> ans; sort(nums.begin(), nums.end()); int n=nums.size();
    for(int i=0;i<n;i++){
        if(i>0 && nums[i]==nums[i-1]) continue;
        int l=i+1, r=n-1;
        while(l<r){ long sum = (long)nums[i] + nums[l] + nums[r];
            if(sum==0){ ans.push_back({nums[i],nums[l],nums[r]}); l++; r--;
                while(l<r && nums[l]==nums[l-1]) l++;
                while(l<r && nums[r]==nums[r+1]) r--;
            } else if(sum<0) l++; else r--; }
    }
    return ans;
}

int main(){
    vector<int> nums = {-1,0,1,2,-1,-4};
    auto res = threeSumTwoPointer(nums);
    for(auto &t: res){ for(int x: t) cout<<x<<" "; cout<<"\n"; }
    return 0;
}