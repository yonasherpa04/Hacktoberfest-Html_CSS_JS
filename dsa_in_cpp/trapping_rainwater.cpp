/*Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 */
 class Solution {
public:
    int trap(vector<int>& height) {
        int n=height.size();
        if(n==0)return 0;
        vector<int>left(n),right(n);
        left[0]=height[0];
        right[n-1]=height[n-1];
        //leftmax
        for(int i=1;i<n;i++){
            left[i]=max(left[i-1],height[i]);
        }
        //rightmax
        for(int i=n-2;i>=0;i--){
            right[i]=max(right[i+1],height[i]);
        }
        int top=0;
        for(int i=0;i<n;i++){
            if(height[i]<left[i]&&height[i]<right[i]){
                top+=min(left[i],right[i])-height[i];
            }
        }
        return top;
    }
    
};