/**
 * Counting Sort Algorithm Implementation in JavaScript.
 * Best suited for sorting a collection of objects according to keys 
 * that are small non-negative integers.
 * * @param {number[]} arr - The array of non-negative integers to be sorted.
 * @returns {number[]} The sorted array.
 */
function countingSort(arr) {
    // 1. Handle edge case for empty or single-element arrays
    if (!arr || arr.length < 2) {
        return arr;
    }

    // 2. Find the maximum value (k) in the input array.
    // This determines the size of the count array.
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }

    // 3. Initialize the count array. Its size is maxVal + 1.
    // All elements are initialized to 0.
    // The index represents the value, and the value represents its frequency.
    const countArr = new Array(maxVal + 1).fill(0);

    // 4. Store the count of each element in the count array.
    for (const number of arr) {
        countArr[number]++;
    }

    // 5. Modify the count array to store the actual position of the element 
    // in the output array (cumulative frequency).
    for (let i = 1; i < countArr.length; i++) {
        countArr[i] += countArr[i - 1];
    }

    // 6. Build the output array.
    // We iterate backwards through the input array to ensure stability (optional, but good practice).
    const outputArr = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; i--) {
        const value = arr[i];
        // The correct sorted position is countArr[value] - 1
        const position = countArr[value] - 1;

        outputArr[position] = value;

        // Decrement the count for the value, as we have placed one instance of it.
        countArr[value]--;
    }

    return outputArr;
}

// Export the function (standard practice for modules in JavaScript)
module.exports = countingSort;
// Or, if using ES modules: export default countingSort;