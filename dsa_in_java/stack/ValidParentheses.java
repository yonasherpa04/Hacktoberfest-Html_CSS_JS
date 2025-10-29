/*
 * Topic: Valid Parentheses
 * Language: Java
 *
 * Description:
 * Given a string containing '(', ')', '{', '}', '[' and ']', determine if it is valid.
 * A string is valid if open brackets are closed by the same type of brackets in the correct order.
 *
 * Example:
 * Input: s = "{[()]}"
 * Output: true
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import java.util.Stack;

public class ValidParentheses {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if ((c == ')' && top != '(') ||
                    (c == '}' && top != '{') ||
                    (c == ']' && top != '['))
                    return false;
            }
        }

        return stack.isEmpty();
    }

    public static void main(String[] args) {
        String s = "{[()]}";
        System.out.println("Is Valid: " + isValid(s));
    }
}

/*
 * Example Output:
 * Is Valid: true
 */
