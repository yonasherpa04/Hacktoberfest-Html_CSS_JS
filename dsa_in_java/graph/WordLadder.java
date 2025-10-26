/*
 * Topic: Word Ladder (Shortest Transformation Sequence)
 * Language: Java
 *
 * Description:
 * Given beginWord, endWord and a word list, find shortest transformation sequence
 * changing one letter at a time. BFS is used for shortest path in word graph.
 *
 * Time Complexity: O(N * L^2), N = word list size, L = word length
 * Space Complexity: O(N * L)
 * LeetCode Link: https://leetcode.com/problems/word-ladder/
 */

import java.util.*;

public class WordLadder {

    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> wordSet = new HashSet<>(wordList);
        if (!wordSet.contains(endWord)) return 0;

        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);
        int level = 1;

        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String word = queue.poll();
                char[] chars = word.toCharArray();
                for (int j = 0; j < chars.length; j++) {
                    char old = chars[j];
                    for (char c = 'a'; c <= 'z'; c++) {
                        chars[j] = c;
                        String newWord = new String(chars);
                        if (newWord.equals(endWord)) return level + 1;
                        if (wordSet.contains(newWord)) {
                            queue.offer(newWord);
                            wordSet.remove(newWord);
                        }
                    }
                    chars[j] = old;
                }
            }
            level++;
        }

        return 0;
    }

    public static void main(String[] args) {
        List<String> wordList = Arrays.asList("hot","dot","dog","lot","log","cog");
        System.out.println("Shortest transformation length: " + ladderLength("hit", "cog", wordList));
    }
}

/*
Example Output:
Shortest transformation length: 5
*/
