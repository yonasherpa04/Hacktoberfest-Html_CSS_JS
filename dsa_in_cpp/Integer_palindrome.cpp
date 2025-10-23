/*
    Problem: Given an integer, check whether it is a palindrome or not.
    A palindrome is a sequence that reads the same forwards and backwards.

    Approach:
        1) Create a copy of the integer.
        2) Reverse the copy (logic similar to Reverse_integer.cpp).
        3) Compare the original integer with the reversed copy.
        4) If they are equal, the number is a palindrome; otherwise, it is not.

    Time Complexity:  O(log10(n))
        - We process each digit of the number once.
        - For a number with d digits, the loop runs d times.
    Space Complexity: O(1)
        - Only a few integer variables are used; no extra space proportional to input size.
*/

#include <iostream>
using namespace std;

bool palindrome(int number)
{
    int original = number; // Keep a copy of the original number
    int reversedNum = 0;

    // Handle negative numbers: negative numbers are not palindrome
    if (number < 0)
        return false;

    // Reverse the integer
    while (number != 0)
    {
        int digit = number % 10;                // Extract last digit
        reversedNum = reversedNum * 10 + digit; // Append digit to reversedNum
        number /= 10;                           // Remove last digit
    }

    // Check if original and reversed numbers are the same
    return original == reversedNum;
}

// Example Usage
int main()
{
    int num1 = 121;
    int num2 = -121;
    int num3 = 12321;
    int num4 = 123;

    cout << num1 << " is palindrome? " << (palindrome(num1) ? "Yes" : "No") << endl;
    cout << num2 << " is palindrome? " << (palindrome(num2) ? "Yes" : "No") << endl;
    cout << num3 << " is palindrome? " << (palindrome(num3) ? "Yes" : "No") << endl;
    cout << num4 << " is palindrome? " << (palindrome(num4) ? "Yes" : "No") << endl;

    return 0;
}
