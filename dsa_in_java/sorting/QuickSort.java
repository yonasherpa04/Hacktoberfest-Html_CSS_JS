/*
 * QuickSort Algorithm - Divide and Conquer Approach
 * --------------------------------------------------
 * The algorithm works as follows:
 * 1. Choose a pivot element from the array.
 * 2. Partition the array so that:
 *    - Elements smaller than the pivot are on the left.
 *    - Elements greater than the pivot are on the right.
 * 3. Recursively apply the same logic to the left and right subarrays.
 * 
 * Time Complexity:
 * - Best Case: O(n log n)
 * - Average Case: O(n log n)
 * - Worst Case: O(n²)  (when the pivot always ends up being smallest or largest)
 * 
 * Space Complexity: O(log n) due to recursion stack.
 * 
 * Comparison with Iterative QuickSort:
 * - Recursive version is simpler and easier to understand.
 * - Iterative version avoids recursion stack overflow for very large inputs.
 */

public class QuickSort {

    // Function to perform QuickSort
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // Partition index - element at index is in its correct position
            int partitionIndex = partition(arr, low, high);

            // Recursively sort elements before and after partition
            quickSort(arr, low, partitionIndex - 1);
            quickSort(arr, partitionIndex + 1, high);
        }
    }

    // Partition function - places pivot element in correct position
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // choosing last element as pivot
        int i = low - 1; // index of smaller element

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                // swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        // place pivot in correct position
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    // Utility function to print array
    private static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // Main method for testing
    public static void main(String[] args) {
        int[] arr = { 10, 7, 8, 9, 1, 5 };

        System.out.println("Original Array:");
        printArray(arr);

        quickSort(arr, 0, arr.length - 1);

        System.out.println("\nSorted Array using QuickSort:");
        printArray(arr);
    }
}
