/**
 * Topological Sort (Kahn's Algorithm - BFS Approach)
 
 * Time Complexity:
 *   - Best: O(V + E)
 *   - Average: O(V + E)
 *   - Worst: O(V + E)
 
 * Space Complexity: O(V)
 
 * Author: Ankit Dand
 * Description:
 *   Implementation of Topological Sorting for a Directed Acyclic Graph (DAG)
 *   using Kahn's Algorithm (a BFS-based approach).
 *   Topological sorting gives a linear ordering of vertices such that
 *   for every directed edge u → v, vertex u appears before vertex v.
 
 * Example Graph:
 * {
 *   0: [1, 2],
 *   1: [3],
 *   2: [3],
 *   3: []
 * }
 
 * Example Output:
 * Topological Sort Order: [0, 1, 2, 3]  OR  [0, 2, 1, 3]
 */

// Topological Sort Function
function topologicalSort(graph) {
  const inDegree = {}; // To keep track of indegree (number of incoming edges)
  const queue = []; // Queue to process nodes with indegree 0
  const topoOrder = []; // Final topological ordering

  // Step 1: Initialize indegree for each vertex
  for (const node in graph) {
    inDegree[node] = 0;
  }

  // Step 2: Calculate indegree for each vertex
  for (const node in graph) {
    for (const neighbor of graph[node]) {
      inDegree[neighbor]++;
    }
  }

  // Step 3: Enqueue all vertices with indegree 0
  for (const node in inDegree) {
    if (inDegree[node] === 0) queue.push(node);
  }

  // Step 4: Process the queue
  while (queue.length > 0) {
    const current = queue.shift();
    topoOrder.push(Number(current)); // Add to result

    // Decrease indegree of neighbors
    for (const neighbor of graph[current]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  // Step 5: Check for cycle (if topoOrder doesn’t include all vertices)
  if (topoOrder.length !== Object.keys(graph).length) {
    console.log("Error: The graph has a cycle. Topological sort not possible.");
    return [];
  }

  return topoOrder;
}

//Example Usage
const graph = {
  0: [1, 2],
  1: [3],
  2: [3],
  3: [],
};

console.log("Topological Sort Order:", topologicalSort(graph));
