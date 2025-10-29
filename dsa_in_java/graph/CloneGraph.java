/*
 * Topic: Clone Graph
 * Language: Java
 *
 * Description:
 * Given a reference of a node in a connected undirected graph, return a deep copy of the graph.
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V) for HashMap
 * LeetCode Link: https://leetcode.com/problems/clone-graph/
 */

import java.util.*;

class Node {
    public int val;
    public List<Node> neighbors;
    public Node() { neighbors = new ArrayList<>(); }
    public Node(int val) { this.val = val; neighbors = new ArrayList<>(); }
    public Node(int val, List<Node> neighbors) { this.val = val; this.neighbors = neighbors; }
}

public class CloneGraph {
    public static Node cloneGraph(Node node) {
        if (node == null) return null;
        Map<Node, Node> map = new HashMap<>();
        return clone(node, map);
    }

    private static Node clone(Node node, Map<Node, Node> map) {
        if (map.containsKey(node)) return map.get(node);

        Node copy = new Node(node.val);
        map.put(node, copy);

        for (Node neighbor : node.neighbors) {
            copy.neighbors.add(clone(neighbor, map));
        }
        return copy;
    }

    private static Node printGraph(Node node, Set<Integer> visited) {
        if (node == null || visited.contains(node.val)) return null;
        visited.add(node.val);
        System.out.print("Node " + node.val + " neighbors: ");
        for (Node neighbor : node.neighbors) {
            System.out.print(neighbor.val + " ");
        }
        System.out.println();
        for (Node neighbor : node.neighbors) {
            printGraph(neighbor, visited);
        }
        return null;
    }

    public static void main(String[] args) {
        Node node1 = new Node(1);
        Node node2 = new Node(2);
        Node node3 = new Node(3);
        Node node4 = new Node(4);

        node1.neighbors.add(node2);
        node1.neighbors.add(node4);
        node2.neighbors.add(node1);
        node2.neighbors.add(node3);
        node3.neighbors.add(node2);
        node3.neighbors.add(node4);
        node4.neighbors.add(node1);
        node4.neighbors.add(node3);

        Node cloned = cloneGraph(node1);
        printGraph(cloned, new HashSet<>());
        System.out.println("Graph cloned successfully.");
        
    }
}

/*
Example Output:
Node 1 neighbors: 2 4
Node 2 neighbors: 1 3
Node 3 neighbors: 2 4
Node 4 neighbors: 1 3
Graph cloned successfully.
*/