/*
    Problem:
        Design a simple bank system that supports:
        1. deposit(account, money)
        2. withdraw(account, money)
        3. transfer(account1, account2, money)

        You are given an array 'balance' where balance[i] represents
        the initial balance of the (i+1)th account.

    Approach:
        - Store balances in a vector `balance`.
        - For each operation:
            * Check if account numbers are valid.
            * Ensure sufficient funds for withdrawals/transfers.
        - Return true for success and false for invalid operations.

    Time Complexity:
        - O(1) per operation (direct index access)
    Space Complexity:
        - O(n) for storing balances
*/

#include <iostream>
#include <vector>
using namespace std;

class Bank
{
private:
    vector<long long> balance; // stores balances of all accounts
    int n;                     // number of accounts

    // helper function to check if account number is valid
    bool valid(int account)
    {
        return account >= 1 && account <= n;
    }

public:
    // constructor to initialize bank with balances
    Bank(vector<long long> &balance)
    {
        this->balance = balance;
        n = balance.size();
    }

    // transfer money from account1 to account2
    bool transfer(int account1, int account2, long long money)
    {
        if (!valid(account1) || !valid(account2))
            return false; // invalid account
        if (balance[account1 - 1] < money)
            return false; // insufficient funds

        balance[account1 - 1] -= money;
        balance[account2 - 1] += money;
        return true;
    }

    // deposit money into an account
    bool deposit(int account, long long money)
    {
        if (!valid(account))
            return false;

        balance[account - 1] += money;
        return true;
    }

    // withdraw money from an account
    bool withdraw(int account, long long money)
    {
        if (!valid(account))
            return false;
        if (balance[account - 1] < money)
            return false;

        balance[account - 1] -= money;
        return true;
    }
};

// ----------------------------
// Example Usage (Main Function)
// ----------------------------
int main()
{
    vector<long long> initialBalances = {100, 200, 300};

    Bank bank(initialBalances);

    cout << boolalpha; // print true/false instead of 1/0

    cout << "Deposit 50 into Account 1: " << bank.deposit(1, 50) << endl;
    cout << "Withdraw 100 from Account 2: " << bank.withdraw(2, 100) << endl;
    cout << "Transfer 70 from Account 1 to Account 3: " << bank.transfer(1, 3, 70) << endl;
    cout << "Withdraw 500 from Account 3 (invalid): " << bank.withdraw(3, 500) << endl;
    cout << "Transfer from invalid account 5 to 1: " << bank.transfer(5, 1, 20) << endl;

    return 0;
}

/*
Expected Output:
Deposit 50 into Account 1: true
Withdraw 100 from Account 2: true
Transfer 70 from Account 1 to Account 3: true
Withdraw 500 from Account 3 (invalid): false
Transfer from invalid account 5 to 1: false
*/
