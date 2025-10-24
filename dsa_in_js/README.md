# DSA Folder (Data Structures & Algorithms in JavaScript)

This folder is meant for **JavaScript-based DSA problems and solutions**.  
It is structured **topic-wise** so contributors can easily navigate and add new problems.

## 🧩 Folder Structure
```
dsa/
│
├── array/
│   ├── findDuplicate.js
│   └── reverseArray.js
│
├── string/
│   ├── countVowels.js
│   └── palindromeCheck.js
│
├── linkedlist/
│   ├── reverseLinkedList.js
│   └── mergePoint.js
│
├── tree/
│   └── inorderTraversal.js
│
├── binary_search.js
├── index.js         // Node.js test runner for all functions
├── package.json
└── README.md
```

## 🚀 Contribution Guidelines
1. Each topic (like `array`, `string`, `tree`) should have its own folder.
2. If the folder for a topic **does not exist**, create it.
3. Use descriptive filenames like `findMaxInArray.js` or `isPalindrome.js`.
4. Each file must include:
   - A short description of the problem.
   - The approach used.
   - Time and space complexity.
   - Example input/output as comments.
5. Code should be properly formatted and well-commented.

## 🧠 Example File Structure
```javascript
// dsa/array/findMax.js
// Problem: Find the maximum element in an array.
// Approach: Use a loop to compare elements.
// Time Complexity: O(n)
// Space Complexity: O(1)

function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}

// Example
console.log(findMax([1, 3, 2, 5, 4])); // Output: 5
```
## Getting Started
### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 14 or higher) installed on your machine.

### Installation
1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/HarshitPachori/Hacktoberfest-Html_CSS_JS
    ```
2.  Navigate to the project directory:
    ```bash
    cd dsa
    ```
3.  Run the following command:
    ```bash
    npm start
    ```