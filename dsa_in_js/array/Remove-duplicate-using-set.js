//Time Complexity: O(n)

//Space Complexity: O(n)

function removeDuplicates(arr) {
  // The Set object automatically removes duplicate values
  return [...new Set(arr)];
}

// Example usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);

console.log(uniqueNumbers); 
// Output: [1, 2, 3, 4, 5]
