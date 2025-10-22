#include<bits/stdc++.h>

using namespace std; 

void SpiralTraverse(vector<vector<int>>arr){
    int row = arr.size();
    int col = arr[0].size();

    int top = 0 , bottom = row-1;
    int left = 0 , right = col-1;

    while(left <= right && top <= bottom){


        // traverse top
        for(int j = left ; j<= right ; j++){
            cout<<arr[top][j]<<" ";
        }
        top++;

        // traverse right 
        for(int i = top ; i<= bottom ; i++){
            cout<<arr[i][right]<<" ";
        }
        right--;

        // traverse bottom 
        if(top>bottom){break;}
        for(int j = right; j>=left ; j--){
            cout<<arr[bottom][j]<<" ";
        }
        bottom--;

        // traverse left 
        if(left>right){
            break;
        }
        for(int i = bottom ; i>=top ; i--){
            cout<<arr[i][left]<<" ";
        }
        left++;

    }

}


int main(){
    vector<vector<int>>matrix;
    matrix = {
    {1,  2,  3,  4,  5},
    {6,  7,  8,  9, 10},
    {11, 12, 13, 14, 15}
    };

    SpiralTraverse(matrix);

    vector<vector<pair<int,int>>>abcd;




    return 0 ;
}