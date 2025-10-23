/*
Leetcode : http://leetcode.com/problems/add-two-numbers/description/

Time complexity: O(m+n) 
Space complexity: O(max(m+n)+1)
*/
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* ans=NULL;
        ListNode* head=NULL;
        int carry=0;
        while(l1!=NULL && l2!=NULL){
            int x=l1->val;
            int y=l2->val;
            int sum=x+y+carry;
            int v=sum%10;
            carry=sum/10;
            ListNode* newNode=new ListNode(v);
            if(ans==NULL){
                ans=newNode;
                head=ans;
            }
            else{
                   ans->next=newNode;
                   ans=ans->next;

            }
            l1=l1->next;
            l2=l2->next;
          
        }
        

         while(l1!=NULL){
            int x=l1->val;
            int sum=x+carry;
            int v=sum%10;
            carry=sum/10;
            ListNode* newNode=new ListNode(v);
            if(ans==NULL){
                ans=newNode;
                
               head=ans;
            }
            else{
                   ans->next=newNode;
                    ans=ans->next;
            }
            l1=l1->next;
          
        }
          while(l2!=NULL){
            int x=l2->val;
            int sum=x+carry;
            int v=sum%10;
            carry=sum/10;
            ListNode* newNode=new ListNode(v);
            if(ans==NULL){
                ans=newNode;
                head=ans;
            }
            else{
                   ans->next=newNode;
                    ans=ans->next;

            }
          l2=l2->next;
        }
        if(carry>0){
            ListNode* newNode=new ListNode(carry);
            ans->next=newNode;
        }
        return head;

    }
};
