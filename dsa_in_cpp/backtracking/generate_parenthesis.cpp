/*The code solves the Generate Parentheses problem: finding all unique, well-formed combinations of parentheses 
for a given number of pairs, $n$.Core LogicIt uses a Brute-Force Backtracking approach:Generate: The solve function 
recursively builds every possible string of length $2n$ using just '(' and ')'.Validate: The isValid function then checks 
each fully formed string:It ensures the parentheses are balanced (the count never drops below zero).It ensures the final 
count is exactly zero.Collect: Only the strings that pass the isValid check are added to the result.Note: This is an inefficient 
method as it generates and checks many invalid strings; typically, an optimized backtracking approach builds only valid strings.*/

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isValid(string check){
        int cnt = 0;
        for(auto it:check){
            if(it == '(')cnt++;
            else{
                cnt--;
                if(cnt<0){
                    return false;
                }
            } 
        }
        return cnt == 0 ;
    }
    void solve(string temp,vector<string>&ans,int n){
        if(temp.size() == n*2){
            if(isValid(temp)){
                ans.push_back(temp);
            }
            return ;
        }

        temp.push_back('(');
        solve(temp,ans,n);
        temp.pop_back();
        temp.push_back(')');
        solve(temp,ans,n);
        temp.pop_back();
    }

    vector<string> generateParenthesis(int n) {
        string temp = "";
        vector<string>ans;
        solve(temp,ans,n);
        return ans;
    }
};
