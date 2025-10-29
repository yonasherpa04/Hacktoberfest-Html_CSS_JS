/*
 * Topic: N-Queens Problem
 * Language: Java
 *
 * Description:
 * Place N queens on an N×N chessboard such that no two queens attack each other.
 * Uses backtracking to explore all valid configurations.
 *
 * Time Complexity: O(N!)
 * Space Complexity: O(N^2) for board
 * LeetCode Link: https://leetcode.com/problems/n-queens/
 */

import java.util.*;

public class NQueens {

    private static boolean isSafe(char[][] board, int row, int col, int n) {
        // check column
        for (int i = 0; i < row; i++) if (board[i][col] == 'Q') return false;
        // check left diagonal
        for (int i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--) if (board[i][j] == 'Q') return false;
        // check right diagonal
        for (int i = row-1, j = col+1; i >= 0 && j < n; i--, j++) if (board[i][j] == 'Q') return false;
        return true;
    }

    private static void solve(int row, char[][] board, List<List<String>> res, int n) {
        if (row == n) {
            List<String> solution = new ArrayList<>();
            for (char[] r : board) solution.add(new String(r));
            res.add(solution);
            return;
        }

        for (int col = 0; col < n; col++) {
            if (isSafe(board, row, col, n)) {
                board[row][col] = 'Q';
                solve(row + 1, board, res, n);
                board[row][col] = '.'; // backtrack
            }
        }
    }

    public static List<List<String>> solveNQueens(int n) {
        List<List<String>> res = new ArrayList<>();
        char[][] board = new char[n][n];
        for (char[] row : board) Arrays.fill(row, '.');
        solve(0, board, res, n);
        return res;
    }

    public static void main(String[] args) {
        int n = 4;
        List<List<String>> solutions = solveNQueens(n);
        System.out.println("Total Solutions: " + solutions.size());
        for (List<String> sol : solutions) {
            for (String row : sol) System.out.println(row);
            System.out.println();
        }
    }
}

/*
Example Output:
Total Solutions: 2
.Q..
...Q
Q...
..Q.

..Q.
Q...
...Q
.Q..
*/
