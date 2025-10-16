/**
 * Algorithm: Linear Search
 * 
 * Time Complexity:
 *  -Best Case: O(1) When the element is found at the beginning
 *  -Worst Case: O(n) When the element is found at the end or not present
 *  -Average Case: O(n)
 * 
 * Space Complexity: O(1) (in-place i.e no extra space)
 * 
 * Description:
 *   Linear Search is the simplest searching algorithm
 *  It checks each element of the array one by one until the target element is found
 *   or the array ends.
 */

/**
 * Performs a linear search on an array to find the target element.
 * @param {Array} arr - The array to search in.
 * @param {*} target - The element to find.
 * @returns {number} The index of the target if found, else -1.
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===target) {
            //here, === compares the value as well as the datatype
            return i; // Target found at index i
        }
    }
    return -1; 
}

//returning -1 indicates that the target is not found in the array

//Example 1: for integers
const arr1 = [10, 23, 45, 70, 11, 15];
const target1 = 70;
console.log(`Array: ${arr1}`);
console.log(`Searching for ${target1} --> Index Found:`, linearSearch(arr1, target1));

//Example 2: for strings
const arr2 = ["apple", "banana", "cherry", "date"];
const target2 = "kiwi";
console.log(`\nArray: ${arr2}`);
console.log(`Searching for "${target2}" --> Index Found:`, linearSearch(arr2, target2));

//Example 3:
const arr3 = [1, 3, 5, 7, 9];
const target3 = 5;
console.log(`\nArray: ${arr3}`);
console.log(`Searching for ${target3} --> Index Found:`, linearSearch(arr3, target3));
