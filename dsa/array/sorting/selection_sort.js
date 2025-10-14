// Not stable algorithm
// Time Complexity: O(n^2) in all cases (worst, average, best)
// Space Complexity: O(1) as it is an in-place sorting algorithm
export function selectionSort(arr) {
	// Selection Sort is not a stable sorting algorithm
	// Find the minimum element in unsorted array and swap it with the first element
	const n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		let minIdx = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[minIdx]) {
				minIdx = j;
			}
		}
		// Swap the found minimum element with the first element
		if (minIdx !== i) {
			[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
		}
	}
}

const array = [64, 25, 12, 22, 11];
console.log("Original array:", array);
selectionSort(array);
console.log("Sorted array:", array);
