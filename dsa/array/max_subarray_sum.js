/*
 Program to find Maximum Subarray Sum in JS
 Finds the maximum sum of a contiguous subarray using Kadane's algorithm.
 Time Complexity = O(n)
 Space Complexity = O(1)
 */

function maxSubArraySum(arr) {
  if(arr.length === 0){
    return 0; //If the array is empty
  }
  let maxSoFar = -Infinity;
  let sum = 0;

  for(let i = 0; i<arr.length; i++){
    sum += arr[i]; //Add element at the index to sum
    if(sum > maxSoFar){
      maxSoFar = sum; //Update maxSoFar if needed
    }
    if(sum < 0){ //If sum < 0 it is better to start a new subarray from the next element
      sum = 0; 
    }
  }
  return maxSoFar;
}

const array1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Testing with array:", array1);
console.log(`The maximum subarray sum is: ${maxSubArraySum(array1)}`);

const array2 = [-5, 1, -3, -2];
console.log("Testing with array:", array2);
console.log(`The maximum subarray sum is: ${maxSubArraySum(array2)}`);

const array3 = [1, 2, 3, 4, 5];
console.log("Testing with array:", array3);
console.log(`The maximum subarray sum is: ${maxSubArraySum(array3)}`);
