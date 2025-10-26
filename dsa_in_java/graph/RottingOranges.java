/*
 * Topic: Rotting Oranges
 * Language: Java
 *
 * Description:
 * Given a grid with fresh and rotten oranges, compute minimum minutes to rot all oranges.
 * BFS traversal is used to simulate the spread of rot.
 *
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 * LeetCode Link: https://leetcode.com/problems/rotting-oranges/
 */

import java.util.*;

public class RottingOranges {

    public static int orangesRotting(int[][] grid) {
        int rows = grid.length, cols = grid[0].length;
        Queue<int[]> queue = new LinkedList<>();
        int fresh = 0;

        // Add all rotten oranges to queue
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 2) queue.offer(new int[]{r, c});
                if (grid[r][c] == 1) fresh++;
            }
        }

        int minutes = 0;
        int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1}};

        while (!queue.isEmpty() && fresh > 0) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] cell = queue.poll();
                for (int[] dir : dirs) {
                    int nr = cell[0] + dir[0], nc = cell[1] + dir[1];
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {
                        grid[nr][nc] = 2;
                        queue.offer(new int[]{nr, nc});
                        fresh--;
                    }
                }
            }
            minutes++;
        }

        return fresh == 0 ? minutes : -1;
    }

    public static void main(String[] args) {
        int[][] grid = {
            {2,1,1},
            {1,1,0},
            {0,1,1}
        };

        System.out.println("Minutes to rot all oranges: " + orangesRotting(grid));
    }
}

/*
Example Output:
Minutes to rot all oranges: 4
*/
