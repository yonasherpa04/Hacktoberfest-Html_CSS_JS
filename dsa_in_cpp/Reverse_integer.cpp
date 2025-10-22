/* Problem: You are given an integer. Reverse it and return the reversed integer.

Examples:

Input 1: 123
Output: 321

Input 1: 9203
Output 2: 3029
*/

// Souce Code:

#include <iostream>
using namespace std;

int reversed(int num)
{
    int reversedNum = 0;

    int sign = (num < 0) ? -1 : 1; // Used to filter negative integer and positive integers.

    num = abs(num);

    while (num != 0)
    {
        int digit = num % 10;                   // Gets the last digit of integer.
        reversedNum = reversedNum * 10 + digit; // Append digit to reversedNum.
        num /= 10;                              // Remove the last digit from num.
    }

    return sign * reversedNum;
}

int main()
{
    int num;
    cout << "Enter an integer of your choice: ";
    cin >> num;
    int reversedNum = reversed(num);
    cout << "Reversed integer: " << reversedNum << endl;
    return 0;
}