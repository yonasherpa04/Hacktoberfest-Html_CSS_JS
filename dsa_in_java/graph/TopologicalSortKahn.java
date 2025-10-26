/*
 * Topic: Kahn's Algorithm (Topological Sort using BFS)
 * Language: Java
 *
 * Description:
 * Perform topological sort of a DAG using Kahn's algorithm (BFS + indegree array)
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V + E)
 */

import java.util.*;

public class TopologicalSortKahn {

    public static List<Integer> kahnTopologicalSort(int V, List<List<Integer>> graph) {
        int[] indegree = new int[V];
        for (List<Integer> neighbors : graph) {
            for (int neighbor : neighbors) indegree[neighbor]++;
        }

        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < V; i++) {
            if (indegree[i] == 0) queue.offer(i);
        }

        List<Integer> topoOrder = new ArrayList<>();
        while (!queue.isEmpty()) {
            int node = queue.poll();
            topoOrder.add(node);
            for (int neighbor : graph.get(node)) {
                indegree[neighbor]--;
                if (indegree[neighbor] == 0) queue.offer(neighbor);
            }
        }

        if (topoOrder.size() != V) return new ArrayList<>(); // cycle present
        return topoOrder;
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

        List<Integer> topoOrder = kahnTopologicalSort(V, graph);
        System.out.println("Topological Order (Kahn's BFS): " + topoOrder);
    }
}

/*
Example Output:
Topological Order (Kahn's BFS): [4, 5, 0, 2, 3, 1]
*/
