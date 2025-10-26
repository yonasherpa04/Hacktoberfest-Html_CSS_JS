/**
 * Recursive Binary Search Algorithm
 * Time Complexity: O(log n)
 * Space Complexity: O(log n) due to recursion stack (or O(1) if counting non-stack space)
 */
function recursiveBinarySearch(arr, target, low = 0, high = arr.length - 1) {
    // Base case: Element not found
    if (low > high) {
        return -1;
    }

    const mid = Math.floor((low + high) / 2);

    // Base case: Element found
    if (arr[mid] === target) {
        return mid;
    }

    // Search the right half
    if (arr[mid] < target) {
        return recursiveBinarySearch(arr, target, mid + 1, high);
    }
    // Search the left half
    else {
        return recursiveBinarySearch(arr, target, low, mid - 1);
    }
}

// Example Usage:
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log(recursiveBinarySearch(sortedArray, 23)); // Output: 5 (index)
console.log(recursiveBinarySearch(sortedArray, 42)); // Output: -1 (not found)