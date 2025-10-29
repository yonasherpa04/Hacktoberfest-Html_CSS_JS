/*
 * Topic: Word Search
 * Language: Java
 *
 * Description:
 * Check if a word exists in a 2D board by moving horizontally or vertically.
 * Uses backtracking to explore paths.
 *
 * Time Complexity: O(M * N * 4^L) where L = length of word
 * Space Complexity: O(L)
 * LeetCode Link: https://leetcode.com/problems/word-search/
 */

public class WordSearch {

    private static boolean dfs(char[][] board, String word, int i, int j, int index) {
        if (index == word.length()) return true;
        if (i<0 || i>=board.length || j<0 || j>=board[0].length || board[i][j]!=word.charAt(index)) return false;

        char temp = board[i][j];
        board[i][j] = '#'; // mark visited
        boolean found = dfs(board, word, i+1, j, index+1) ||
                        dfs(board, word, i-1, j, index+1) ||
                        dfs(board, word, i, j+1, index+1) ||
                        dfs(board, word, i, j-1, index+1);
        board[i][j] = temp; // backtrack
        return found;
    }

    public static boolean exist(char[][] board, String word) {
        for (int i=0; i<board.length; i++)
            for (int j=0; j<board[0].length; j++)
                if (dfs(board, word, i, j, 0)) return true;
        return false;
    }

    public static void main(String[] args) {
        char[][] board = {
            {'A','B','C','E'},
            {'S','F','C','S'},
            {'A','D','E','E'}
        };
        String word = "ABCCED";
        System.out.println("Word exists: " + exist(board, word));
    }
}

/*
Example Output:
Word exists: true
*/
