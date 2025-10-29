/*
 * Topic: Topological Sort (DFS)
 * Language: Java
 *
 * Description:
 * Perform topological sort using DFS and recursion stack.
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V)
 */

import java.util.*;

public class TopologicalSortDFS {

    private static void dfs(int node, List<List<Integer>> graph, boolean[] visited, Stack<Integer> stack) {
        visited[node] = true;
        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) dfs(neighbor, graph, visited, stack);
        }
        stack.push(node);
    }

    public static List<Integer> topologicalSort(int V, List<List<Integer>> graph) {
        boolean[] visited = new boolean[V];
        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < V; i++) {
            if (!visited[i]) dfs(i, graph, visited, stack);
        }

        List<Integer> order = new ArrayList<>();
        while (!stack.isEmpty()) order.add(stack.pop());
        return order;
    }

    public static void main(String[] args) {
        int V = 6;
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < V; i++) graph.add(new ArrayList<>());
        graph.get(5).add(2);
        graph.get(5).add(0);
        graph.get(4).add(0);
        graph.get(4).add(1);
        graph.get(2).add(3);
        graph.get(3).add(1);

        List<Integer> topoOrder = topologicalSort(V, graph);
        System.out.println("Topological Order (DFS): " + topoOrder);
    }
}

/*
Example Output:
Topological Order (DFS): [5, 4, 2, 3, 1, 0]
*/
