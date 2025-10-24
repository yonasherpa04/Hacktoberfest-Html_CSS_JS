// Bubble Sort is a stable algorithm
/**
 * Bubble Sort Algorithm
 * Time Complexity: O(n^2) in the worst and average case, O(n) in the best case (when the array is already sorted)
 * Space Complexity: O(1) as it is an in-place sorting algorithm
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} - The sorted array
 */
export function bubbleSort(arr) {
	const n = arr.length;
	let swapped;
	for (let i = 0; i < n - 1; i++) {
		swapped = false;
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// Swap arr[j] and arr[j+1]
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swapped = true;
			}
		}
		// If no two elements were swapped in the inner loop, then the array is already sorted
		if (!swapped) break;
	}
	return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
const sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);