// File: BinarySearch.java
// Description: Implementation of Binary Search (Recursive) in Java
// ---------------------------------------------------------------

public class BinarySearch {

    /**
     * Performs binary search recursively on a sorted array.
     *
     * @param arr The sorted array
     * @param target The value to search for
     * @param left The starting index
     * @param right The ending index
     * @return The index of target if found, otherwise -1
     */
    public static int binarySearchRecursive(int[] arr, int target, int left, int right) {
        // Base case: if range becomes invalid, target not found
        if (left > right) {
            return -1;
        }

        // Find the middle element
        int mid = left + (right - left) / 2;

        // If target found at mid
        if (arr[mid] == target) {
            return mid;
        }

        // If target is smaller, search in left half
        if (target < arr[mid]) {
            return binarySearchRecursive(arr, target, left, mid - 1);
        }

        // Otherwise, search in right half
        return binarySearchRecursive(arr, target, mid + 1, right);
    }

    /**
     * Iterative version for comparison.
     */
    public static int binarySearchIterative(int[] arr, int target) {
        int left = 0, right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return mid; 
            }else if (arr[mid] < target) {
                left = mid + 1; 
            }else {
                right = mid - 1;
            }
        }

        return -1;
    }

    // Main method for testing
    public static void main(String[] args) {
        int[] numbers = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
        int target = 23;

        System.out.println("Array: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]");
        System.out.println("Searching for: " + target);

        int recursiveResult = binarySearchRecursive(numbers, target, 0, numbers.length - 1);
        int iterativeResult = binarySearchIterative(numbers, target);

        System.out.println("\nRecursive Binary Search Result: " + recursiveResult);
        System.out.println("Iterative Binary Search Result: " + iterativeResult);

        // Edge case: element not found
        int notFound = 50;
        System.out.println("\nSearching for element not in array (" + notFound + "):");
        System.out.println("Result: " + binarySearchRecursive(numbers, notFound, 0, numbers.length - 1));
    }
}

/*
-------------------------------
Example Output:

Array: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
Searching for: 23

Recursive Binary Search Result: 5
Iterative Binary Search Result: 5

Searching for element not in array (50):
Result: -1
-------------------------------

Time Complexity Comparison:
- Recursive Binary Search: O(log n)
- Iterative Binary Search: O(log n)
Both have the same asymptotic time complexity.
However, the recursive version has a slightly higher space complexity due to
function call stack overhead: O(log n) space vs. O(1) for iterative.
 */
