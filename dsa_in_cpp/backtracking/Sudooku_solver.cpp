/*
    Problem:
        Sudoku is a classic puzzle that has both amused and troubled people over the years.
        The Sudoku Solver problem uses **backtracking** to fill in empty cells while following Sudoku rules:
        - Each row must contain digits 1–9 without repetition.
        - Each column must contain digits 1–9 without repetition.
        - Each 3×3 subgrid must contain digits 1–9 without repetition.

    My approach:
        - Traverse the board cell by cell.
        - If the current cell is empty ('.'), try placing digits 1–9.
        - For each digit, check if it’s safe to place using the `isSafe()` function:
            - It checks the current row, column, and 3×3 box.
        - If safe, place the digit and recursively move to the next cell.
        - If at any point no digit can fit, **backtrack** (undo placement and try the next digit).
        - Continue until the entire board is filled.

    Time Complexity:
        - O(9^(n*n)) in the worst case (since for each empty cell, we try up to 9 digits).
        - However, with pruning (via `isSafe()`), actual time is much faster for most puzzles.

    Space Complexity:
        - O(1) extra space (only recursion stack, no additional data structure used).

    Example Input:
        board = {
            {'5','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };

    Expected Output:
        The filled Sudoku grid.
*/

#include <iostream>
#include <vector>
using namespace std;

// Function to check if placing a digit at (row, col) is valid
bool isSafe(vector<vector<char>> &board, int row, int col, int digit)
{
    // Check row
    for (int i = 0; i < 9; i++)
    {
        if (board[row][i] == digit + '0')
            return false;
    }

    // Check column
    for (int i = 0; i < 9; i++)
    {
        if (board[i][col] == digit + '0')
            return false;
    }

    // Check 3x3 subgrid
    int srow = (row / 3) * 3;
    int scol = (col / 3) * 3;
    for (int i = srow; i < srow + 3; i++)
    {
        for (int j = scol; j < scol + 3; j++)
        {
            if (board[i][j] == digit + '0')
                return false;
        }
    }
    return true;
}

// Helper function for backtracking
bool helper(vector<vector<char>> &board, int row, int col)
{
    // If reached end of board, puzzle solved
    if (row == 9)
        return true;

    // Move to next cell
    int nextRow = row;
    int nextCol = col + 1;
    if (nextCol == 9)
    {
        nextRow = row + 1;
        nextCol = 0;
    }

    // Skip filled cells
    if (board[row][col] != '.')
        return helper(board, nextRow, nextCol);

    // Try digits 1–9
    for (int digit = 1; digit <= 9; digit++)
    {
        if (isSafe(board, row, col, digit))
        {
            board[row][col] = digit + '0'; // place digit

            if (helper(board, nextRow, nextCol)) // recurse
                return true;

            board[row][col] = '.'; // backtrack
        }
    }

    return false; // no valid number found
}

// Main function to solve Sudoku
void solveSudoku(vector<vector<char>> &board)
{
    helper(board, 0, 0);
}

// Utility function to print Sudoku board
void printBoard(vector<vector<char>> &board)
{
    for (int i = 0; i < 9; i++)
    {
        for (int j = 0; j < 9; j++)
        {
            cout << board[i][j] << " ";
        }
        cout << endl;
    }
}

// Driver code
int main()
{
    vector<vector<char>> board = {
        {'5', '3', '.', '.', '7', '.', '.', '.', '.'},
        {'6', '.', '.', '1', '9', '5', '.', '.', '.'},
        {'.', '9', '8', '.', '.', '.', '.', '6', '.'},
        {'8', '.', '.', '.', '6', '.', '.', '.', '3'},
        {'4', '.', '.', '8', '.', '3', '.', '.', '1'},
        {'7', '.', '.', '.', '2', '.', '.', '.', '6'},
        {'.', '6', '.', '.', '.', '.', '2', '8', '.'},
        {'.', '.', '.', '4', '1', '9', '.', '.', '5'},
        {'.', '.', '.', '.', '8', '.', '.', '7', '9'}};

    cout << "Original Sudoku:\n";
    printBoard(board);

    solveSudoku(board);

    cout << "\nSolved Sudoku:\n";
    printBoard(board);

    return 0;
}
