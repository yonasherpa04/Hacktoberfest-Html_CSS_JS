/*The code solves the Letter Combinations of a Phone Number problem. It finds every possible combination of letters that can 
be generated from an input string of digits, based on a standard phone keypad mapping (e.g., 2 $\to$ 'abc', 3 $\to$ 'def').
Core LogicIt uses Recursive Backtracking:A map stores which letters correspond to each digit.The solve function iterates through 
the input digits.For each digit, it loops through its mapped letters, appends one letter to the current result, and makes a recursive
call for the next digit.After the recursion returns, the function backtracks (removes the appended letter) to try the next letter in the loop.
This ensures all combinations are systematically generated and collected.*/

#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
void solve(string digits,string s,vector<string>&ans,int i,string m[]){
    if(i>=digits.length()){
        ans.push_back(s);
        return ;
    }
    int dig=digits[i]-'0';
    string v=m[dig];
    for(int j=0;j<v.length();j++){
        s.push_back(v[j]);
        solve(digits,s,ans,i+1,m);
        s.pop_back();
    }

}
    vector<string> letterCombinations(string digits) {
        vector<string>ans;
        if(digits.length()==0){
            return ans;
        }
        string s="";
        string m[10]={"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
        int i=0;
        solve(digits,s,ans,i,m);
        return ans;
    }
};