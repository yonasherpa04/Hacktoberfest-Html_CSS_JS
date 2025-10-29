/*
 * Topic: Graph Traversal (BFS & DFS)
 * Language: Java
 *
 * Description:
 * Basic traversal of a graph using BFS and DFS.
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V)
 */

import java.util.*;

public class GraphTraversal {

    public static void bfs(List<List<Integer>> graph, int start) {
        boolean[] visited = new boolean[graph.size()];
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(start);
        visited[start] = true;

        System.out.print("BFS: ");
        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");
            for (int neighbor : graph.get(node)) {
                if (!visited[neighbor]) {
                    queue.offer(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
        System.out.println();
    }

    public static void dfs(int node, List<List<Integer>> graph, boolean[] visited) {
        visited[node] = true;
        System.out.print(node + " ");
        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) dfs(neighbor, graph, visited);
        }
    }

    public static void main(String[] args) {
        int V = 5;
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < V; i++) graph.add(new ArrayList<>());
        graph.get(0).addAll(Arrays.asList(1,2));
        graph.get(1).addAll(Arrays.asList(0,3));
        graph.get(2).addAll(Arrays.asList(0,3,4));
        graph.get(3).addAll(Arrays.asList(1,2));
        graph.get(4).addAll(Arrays.asList(2));

        bfs(graph, 0);

        boolean[] visited = new boolean[V];
        System.out.print("DFS: ");
        dfs(0, graph, visited);
        System.out.println();
    }
}

/*
Example Output:
BFS: 0 1 2 3 4 
DFS: 0 1 3 2 4 
*/
