/**
 * Depth-First Search (DFS) Traversal (Recursive)
 * Time Complexity:
 *   - Best: O(V + E)
 *   - Average: O(V + E)
 *   - Worst: O(V + E)
 
 * Space Complexity: O(V)
 
 * Author: Ankit Dand
 * Description: Implementation of Depth-First Search (DFS)
 * for traversing a graph deeply before backtracking.
 
 * Example Graph:
 * {
 *   0: [1, 2],
 *   1: [0, 3, 4],
 *   2: [0, 4],
 *   3: [1, 4, 5],
 *   4: [2, 3],
 *   5: [3]
 * }
 
 * Example Output (Start = 0):
 * DFS Traversal: [0, 1, 3, 4, 2, 5]
 */

function dfsTraversal(graph, start, visited = new Set(), dfsOrder = []) {
  visited.add(start);
  dfsOrder.push(Number(start));

  // Explore all unvisited neighbors recursively
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfsTraversal(graph, neighbor, visited, dfsOrder);
    }
  }

  return dfsOrder;
}

// Example Usage
const graphDFS = {
  0: [1, 2],
  1: [0, 3, 4],
  2: [0, 4],
  3: [1, 4, 5],
  4: [2, 3],
  5: [3],
};

console.log("DFS Traversal:", dfsTraversal(graphDFS, 0));
