/**
 * Title: Move All Zeroes to End [GeeksforGeeks]
 *
 * Problem Link: https://www.geeksforgeeks.org/problems/move-all-zeroes-to-end-of-array0751/1
 *
 * Description:
 * Given an array of integers.
 * The task is to move all zeroes to the end of the array.
 * The relative order of non-zero elements should remain unchanged.
 *
 * Algorithm:
 * Start with an index pointer (tempIndex) at 0.
 * Traverse through the array from start to end.
 * Whenever a non-zero element is found, copy it to tempIndex and increment it.
 * After traversal, fill the rest of the array positions with zeroes.
 *
 * Time Complexity: O(N)
 * Only one pass through the array is needed.
 *
 * Space Complexity: O(1)
 * No extra space used, done in-place.
 */
class Solution {
  public:
    void pushZerosToEnd(vector<int>& arr) {
        // code here
        int n=arr.size();
        int tempindex=0;
        if(n<2){
            return;
        }
        for (int i=0;i<n;i++){
            if(arr[i]!=0){
                arr[tempindex]=arr[i];
                tempindex++;
            }
        }
        for(int i=tempindex;i<n;i++){
            arr[i]=0;
        }
    }
};