ain insertion sort function
// It assumes the array is passed by reference and sorts it in-place
function insertionSort(arr) {
  // Start from the second element (index 1), as the first element is trivially sorted
  for (let i = 1; i < arr.length; i++) {
    // Store the current element to be inserted
    const key = arr[i];
    // Initialize j to the position just before i
    let j = i - 1;
    
    // Move elements greater than key one position ahead
    // until we find the correct position for key or reach the beginning
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    // Insert the key at its correct position
    arr[j + 1] = key;
  }
  return arr; // Return the sorted array for chaining
}

// Example usage and testing
const exampleArray = [12, 11, 13, 5, 6];
console.log("Original array:", [...exampleArray]); // Spread to show copy

insertionSort(exampleArray);
console.log("Sorted array (ascending):", exampleArray);

// Additional test case: Nearly sorted array (best case demo)
const nearlySorted = [1, 3, 2, 5, 4, 7];
console.log("Nearly sorted array before:", [...nearlySorted]);
insertionSort(nearlySorted);
console.log("Nearly sorted array after:", nearlySorted);

// Additional test case: Reverse sorted (worst case demo)
const reverseTest = [7, 6, 5, 4, 3, 2, 1];
console.log("Reverse sorted array before:", [...reverseTest]);
insertionSort(reverseTest);
console.log("Reverse sorted array after:", reverseTest);

// Test stability: Array with duplicate values
const duplicates = [3, 1, 3, 2, 1, 2];
console.log("Array with duplicates before:", [...duplicates]);
insertionSort(duplicates);
console.log("Array with duplicates after (stable - equal elements preserve order):", duplicates);

// Output:
// Original array: [12, 11, 13, 5, 6]
// Sorted array (ascending): [5, 6, 11, 12, 13]
// Nearly sorted array before: [1, 3, 2, 5, 4, 7]
// Nearly sorted array after: [1, 2, 3, 4, 5, 7]
// Reverse sorted array before: [7, 6, 5, 4, 3, 2, 1]
// Reverse sorted array after: [1, 2, 3, 4, 5, 6, 7]
// Array with duplicates before: [3, 1, 3, 2, 1, 2]
// Array with duplicates after (stable - equal elements preserve order): [1, 1, 2, 2, 3, 3]