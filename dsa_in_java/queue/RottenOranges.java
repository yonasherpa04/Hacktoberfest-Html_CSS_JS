/*
 * Topic: Rotten Oranges
 * Language: Java
 *
 * Description:
 * Each cell in a grid can be empty (0), fresh orange (1), or rotten (2).
 * Every minute, any fresh orange adjacent to a rotten one becomes rotten.
 * Find the minimum time required for all oranges to rot, or -1 if impossible.
 *
 * Approach: BFS using Queue
 */

import java.util.*;

public class RottenOranges {
    public static int orangesRotting(int[][] grid) {
        int rows = grid.length, cols = grid[0].length;
        Queue<int[]> q = new LinkedList<>();
        int fresh = 0, minutes = 0;

        // Step 1: Initialize queue with rotten oranges
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 2) q.offer(new int[]{i, j});
                if (grid[i][j] == 1) fresh++;
            }
        }

        int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1}};
        while (!q.isEmpty() && fresh > 0) {
            int size = q.size();
            for (int i = 0; i < size; i++) {
                int[] cur = q.poll();
                for (int[] d : dirs) {
                    int r = cur[0] + d[0], c = cur[1] + d[1];
                    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] != 1) continue;
                    grid[r][c] = 2;
                    q.offer(new int[]{r, c});
                    fresh--;
                }
            }
            minutes++;
        }

        return (fresh == 0) ? minutes : -1;
    }

    public static void main(String[] args) {
        int[][] grid = {{2,1,1},{1,1,0},{0,1,1}};
        System.out.println("Minutes to rot all: " + orangesRotting(grid));
    }
}

/*
 * ----------------------------------------------
 * Output:
 * Minutes to rot all: 4
 * ----------------------------------------------
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */
