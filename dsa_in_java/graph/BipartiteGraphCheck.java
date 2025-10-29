/*
 * Topic: Bipartite Graph Check
 * Language: Java
 *
 * Description:
 * Check if a given graph is bipartite using BFS coloring.
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V)
 * LeetCode Link: https://leetcode.com/problems/is-graph-bipartite/
 */

import java.util.*;

public class BipartiteGraphCheck {

    public static boolean isBipartite(int[][] graph) {
        int n = graph.length;
        int[] colors = new int[n]; // 0 = uncolored, 1 = color1, -1 = color2

        for (int i = 0; i < n; i++) {
            if (colors[i] != 0) continue;
            Queue<Integer> queue = new LinkedList<>();
            queue.offer(i);
            colors[i] = 1;

            while (!queue.isEmpty()) {
                int node = queue.poll();
                for (int neighbor : graph[node]) {
                    if (colors[neighbor] == 0) {
                        colors[neighbor] = -colors[node];
                        queue.offer(neighbor);
                    } else if (colors[neighbor] == colors[node]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int[][] graph = {
            {1,3},
            {0,2},
            {1,3},
            {0,2}
        };
        System.out.println("Is graph bipartite: " + isBipartite(graph));
    }
}

/*
Example Output:
Is graph bipartite: true
*/
