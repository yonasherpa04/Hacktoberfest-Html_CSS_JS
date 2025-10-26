/*
 * Topic: Course Schedule (Topological Sort using BFS)
 * Language: Java
 *
 * Description:
 * Determine if you can finish all courses given prerequisites as a directed graph.
 * Use Kahn's algorithm for topological sorting (BFS).
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V + E)
 * LeetCode Link: https://leetcode.com/problems/course-schedule/
 */

import java.util.*;

public class CourseSchedule {

    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        List<List<Integer>> graph = new ArrayList<>();
        int[] indegree = new int[numCourses];

        for (int i = 0; i < numCourses; i++) graph.add(new ArrayList<>());
        for (int[] pre : prerequisites) {
            graph.get(pre[1]).add(pre[0]);
            indegree[pre[0]]++;
        }

        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (indegree[i] == 0) queue.offer(i);
        }

        int count = 0;
        while (!queue.isEmpty()) {
            int node = queue.poll();
            count++;
            for (int neighbor : graph.get(node)) {
                indegree[neighbor]--;
                if (indegree[neighbor] == 0) queue.offer(neighbor);
            }
        }

        return count == numCourses;
    }

    public static void main(String[] args) {
        int[][] prerequisites = {{1,0},{2,1},{3,2}};
        System.out.println("Can finish courses: " + canFinish(4, prerequisites));
    }
}

/*
Example Output:
Can finish courses: true
*/
