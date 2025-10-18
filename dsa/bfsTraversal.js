// Function to perform BFS traversal
// graph: Adjacency list (e.g., Map<Node, Node[]>)
// startNode: The node to begin the traversal from
function bfsTraversal(graph, startNode) {
    if (!graph.has(startNode)) {
        console.log("Start node not found in the graph.");
        return [];
    }

    const queue = [startNode]; // 1. Initialize the Queue with the start node
    const visited = new Set(); // 2. Keep track of visited nodes to avoid cycles
    const result = []; // 3. Array to store the nodes in traversal order

    visited.add(startNode);

    while (queue.length > 0) {
        // Dequeue the next node to visit
        const currentNode = queue.shift();
        result.push(currentNode);

        // Get all neighbors of the current node
        const neighbors = graph.get(currentNode);

        // Process all unvisited neighbors
        if (neighbors) {
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor); // Enqueue the neighbor
                }
            }
        }
    }

    return result;
}
// --- Example Usage ---

// 1. Create the Graph (using an Adjacency List/Map)
const graph = new Map();
graph.set('A', ['B', 'C']);
graph.set('B', ['A', 'D', 'E']);
graph.set('C', ['A', 'F']);
graph.set('D', ['B']);
graph.set('E', ['B', 'F']);
graph.set('F', ['C', 'E']);

const start = 'A';
const traversalOrder = bfsTraversal(graph, start);

console.log(⁠ BFS Traversal starting from $ { start }:  ⁠);
console.log(traversalOrder); // Expected: [ 'A', 'B', 'C', 'D', 'E', 'F' ]

// Export the function for potential use in other modules
module.exports = bfsTraversal;