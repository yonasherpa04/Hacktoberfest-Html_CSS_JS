/*There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.
Input: ratings = [1,0,2]
Output: 5
*/
class Solution {
public:
    int candy(vector<int>& ratings) {
        int n=ratings.size();
        vector<int>left(n),right(n);
        left[0]=1,right[n-1]=1;
        //left
        for(int i=1;i<n;i++){
            if(ratings[i]>ratings[i-1]){
                left[i]=left[i-1]+1;
            }
            else{
                left[i]=1;
            }
        }
        //right
        for(int i=n-2;i>=0;i--){
            if(ratings[i]>ratings[i+1]){
                right[i]=right[i+1]+1;
            }
            else{
                right[i]=1;
            }
        }
        int sum=0;
        for(int i=0;i<n;i++){
            sum+=max(left[i],right[i]);
        }
        return sum;
    }
};