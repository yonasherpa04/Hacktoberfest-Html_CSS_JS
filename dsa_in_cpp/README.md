# DSA Folder (Data Structures & Algorithms in C++)

This folder is meant for **C++-based DSA problems and solutions**.  
It is structured **topic-wise** so contributors can easily navigate and add new problems.

## 🧩 Folder Structure
```
dsa_in_c++/
│
├── array/
│   ├── findDuplicate.cpp
│   └── reverseArray.cpp
│
├── string/
│   ├── countVowels.cpp
│   └── palindromeCheck.cpp
│
├── linkedlist/
│   ├── reverseLinkedList.cpp
│   └── mergePoint.cpp
│
├── tree/
│   └── inorderTraversal.cpp
│
├── binary_search.cpp
└── README.md
```

## 🚀 Contribution Guidelines
1. Each topic (like `array`, `string`, `tree`) should have its own folder.
2. If the folder for a topic **does not exist**, create it.
3. Use descriptive filenames like `findMaxInArray.cpp` or `isPalindrome.cpp`.
4. Each file must include:
   - A short description of the problem.
   - The approach used.
   - Time and space complexity.
   - Example input/output as comments.
5. Code should be properly formatted and well-commented.

## 🧠 Example File Structure
```cpp
// dsa_in_cpp/array/findMax.cpp
// Problem: Find the maximum element in an array.
// Approach: Use a loop to compare elements.
// Time Complexity: O(n)
// Space Complexity: O(1)

function findMax(int[] arr) {
  var max = arr[0];
  for (var num : arr) {
    if (num > max) max = num;
  }
  return max;
}

// Example
cout << findMax([1, 3, 2, 5, 4]); // Output: 5
```
## Getting Started

### Installation
1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/HarshitPachori/Hacktoberfest-Html_CSS_JS
    ```
2.  Navigate to the project directory:
    ```bash
    cd dsa_in_cpp
    ```
3.  Run the following command:
    ```bash
    npm start
    ```