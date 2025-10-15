/* 
Stable : No

Time Complexity: O(n+k) 
    - n = number of elements in the input array
    - k = maximum element value
    - Counting sort is linear if k is not much bigger than n, otherwise
    time depends on the range of values.
    
Space Complexity: O(k)
    - Array is modified in place.
*/
function count_sort(arr) {
    // Use max function to find maximum value in given array.
    let max_val = Math.max(...arr);

    // Initialize count array for storing the values  of given array.
    let count = new Array(max_val + 1).fill(0);

    /* Destroys the original array by popping elements one by one
    and storing them in earlier initialized count array. */
    while (arr.length > 0) {
        // Removes element one by one.
        let num = arr.pop();
        // Assigns the popped value to count array index.
        count[num] += 1;
    }

    /* Rebuilds the original array by taking elements from the 
    count array, stored as its index.*/
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            // Adds the index of count array, i.e., original element to array.
            // --- Indexes are already sorted for each iteration ---
            arr.push(i);
            // removes the value at index from count array.
            count[i] -= 1;
        }
    }

    // Returns the sorted array.
    return arr;
}


// ---- Examples ---- 

const example1 = [38, 70, 39, 1, 5, 87, 13];
const example2 = [5, 2, 3, 0, 1];
const example3 = [99, 110, 18, 4, 6, 63];
const example4 = [];

console.log("Example 1:");
console.log("Input:", example1);
console.log("Sorted:", count_sort(example1));

console.log("\nExample 2:");
console.log("Input:", example2);
console.log("Sorted:", count_sort(example2));

console.log("\nExample 3:");
console.log("Input:", example3);
console.log("Sorted:", count_sort(example3));

console.log("Example 4:");
console.log("Input:", example4);
console.log("Sorted:", count_sort(example4));
