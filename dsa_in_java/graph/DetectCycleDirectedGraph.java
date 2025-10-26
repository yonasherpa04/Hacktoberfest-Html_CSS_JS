/*
 * Topic: Detect Cycle in Directed Graph
 * Language: Java
 *
 * Description:
 * Detect if a directed graph contains a cycle using DFS recursion stack method.
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V) for visited and recursion stack arrays
 */

import java.util.*;

public class DetectCycleDirectedGraph {

    private static boolean dfs(int node, List<List<Integer>> graph, boolean[] visited, boolean[] recStack) {
        visited[node] = true;
        recStack[node] = true;

        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor] && dfs(neighbor, graph, visited, recStack)) return true;
            else if (recStack[neighbor]) return true;
        }

        recStack[node] = false;
        return false;
    }

    public static boolean hasCycle(int V, List<List<Integer>> graph) {
        boolean[] visited = new boolean[V];
        boolean[] recStack = new boolean[V];

        for (int i = 0; i < V; i++) {
            if (!visited[i] && dfs(i, graph, visited, recStack)) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        int V = 4;
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < V; i++) graph.add(new ArrayList<>());
        graph.get(0).add(1);
        graph.get(1).add(2);
        graph.get(2).add(0);
        graph.get(2).add(3);

        System.out.println("Cycle present: " + hasCycle(V, graph));
    }
}

/*
Example Output:
Cycle present: true
*/
