/**
 * Merge Sort Algorithm (Divide and Conquer)
 * -----------------------------------------
 * Time Complexity:
 *   - Best: O(n log n)
 *   - Average: O(n log n)
 *   - Worst: O(n log n)
 *
 * Space Complexity: O(n)
 *
 * Author: Ankit Dand
 * Description: Implementation of Merge Sort in JavaScript
 */

/**
 * merge() function combines two sorted halves into a single sorted array.
 * @param {Array<number>} left - Left half (sorted)
 * @param {Array<number>} right - Right half (sorted)
 * @returns {Array<number>} Sorted merged array
 */
function merge(left, right) {
  const merged = [];
  let i = 0,
    j = 0;

  // Compare elements from both halves and push the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Add remaining elements from left (if any)
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }

  // Add remaining elements from right (if any)
  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  return merged;
}

/**
 * mergeSort() function recursively divides the array and merges sorted halves.
 * @param {Array<number>} arr - Array to be sorted
 * @returns {Array<number>} Sorted array
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case: already sorted

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursive sort and merge
  return merge(mergeSort(left), mergeSort(right));
}

// Example Demonstrations

const example1 = [38, 27, 43, 3, 9, 82, 10];
const example2 = [5, 4, 3, 2, 1];
const example3 = [12, 11, 13, 5, 6, 7];

console.log("🧩 Merge Sort Example 1:");
console.log("Input:", example1);
console.log("Sorted:", mergeSort(example1));

console.log("\n🧩 Merge Sort Example 2:");
console.log("Input:", example2);
console.log("Sorted:", mergeSort(example2));

console.log("\n🧩 Merge Sort Example 3:");
console.log("Input:", example3);
console.log("Sorted:", mergeSort(example3));
