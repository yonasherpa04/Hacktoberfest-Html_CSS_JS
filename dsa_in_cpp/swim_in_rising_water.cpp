//leetcode 778
//You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).

//It starts raining, and water gradually rises over time. At time t, the water level is t, meaning any cell with elevation less than equal to t is submerged or reachable.

//You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.

//Return the minimum time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).
/*Input: grid = [[0,2],[1,3]]
Output: 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.*/
 class Solution {
public:
    int swimInWater(vector<vector<int>>& grid) {
        int n=grid.size();
        int low=grid[0][0],high=n*n-1;
        int ans=high;
        while(low<=high){
            int mid=low+(high-low)/2;
            if(canReach(grid,n,mid)){
                ans=mid;
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        return ans;
    }
    private:
    bool canReach(vector<vector<int>>& grid,int n,int t){
        if (grid[0][0] > t) return false;
        vector<vector<int>>visited(n,vector<int>(n,0));
        queue<pair<int,int>>q;
        q.push({0,0});
        visited[0][0]=1;
        int drow[]={-1,0,1,0};
        int dcol[]={0,1,0,-1};
        while(!q.empty()){
            int r=q.front().first;
            int c=q.front().second;
            if(r==n-1&& c==n-1)return true;
            q.pop();
            for(int i=0;i<4;i++){
                int nrow=r+drow[i];
                int ncol=c+dcol[i];
                if(ncol<n&&nrow<n&&ncol>=0&&nrow>=0&&!visited[nrow][ncol]&&grid[nrow][ncol]<=t){
                    visited[nrow][ncol]=1;
                    q.push({nrow,ncol});
                }
            }
        }
        return false;
    }
};