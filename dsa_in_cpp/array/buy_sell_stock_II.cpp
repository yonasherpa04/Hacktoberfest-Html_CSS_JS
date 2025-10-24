/*You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can sell and buy the stock multiple times on the same day, ensuring you never hold more than one share of the stock.

Find and return the maximum profit you can achieve.

 */
 class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n=prices.size();
        vector<vector<int>>dp(n+1,vector<int>(2,-1));
        dp[n][0]=dp[n][1]=0;
        int profit=0;
        for(int i=n-1;i>=0;i--){
            for(int buy=0;buy<=1;buy++){
                if(buy){
                    profit=max(-prices[i]+dp[i+1][0],0+dp[i+1][1]);
                }
                else{
                    profit=max(prices[i]+dp[i+1][1],0+dp[i+1][0]);
                }
                dp[i][buy]=profit;
            }
        }
        return dp[0][1];
    }
};