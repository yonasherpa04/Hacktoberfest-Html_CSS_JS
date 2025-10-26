/*
 * Topic: Detect Cycle in Undirected Graph
 * Language: Java
 *
 * Description:
 * Detects if an undirected graph contains a cycle using DFS with parent tracking.
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V)
 */

import java.util.*;

public class DetectCycleUndirectedGraph {

    private static boolean dfs(int node, int parent, List<List<Integer>> graph, boolean[] visited) {
        visited[node] = true;

        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) {
                if (dfs(neighbor, node, graph, visited)) return true;
            } else if (neighbor != parent) {
                return true;
            }
        }
        return false;
    }

    public static boolean hasCycle(int V, List<List<Integer>> graph) {
        boolean[] visited = new boolean[V];
        for (int i = 0; i < V; i++) {
            if (!visited[i] && dfs(i, -1, graph, visited)) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        int V = 5;
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < V; i++) graph.add(new ArrayList<>());
        graph.get(0).add(1); graph.get(1).add(0);
        graph.get(1).add(2); graph.get(2).add(1);
        graph.get(2).add(3); graph.get(3).add(2);
        graph.get(3).add(4); graph.get(4).add(3);
        graph.get(4).add(1); graph.get(1).add(4);

        System.out.println("Cycle present: " + hasCycle(V, graph));
    }
}

/*
Example Output:
Cycle present: true
*/
