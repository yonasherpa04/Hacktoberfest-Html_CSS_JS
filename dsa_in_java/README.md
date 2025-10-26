# DSA Folder (Data Structures & Algorithms in Java)

This folder is meant for **Java-based DSA problems and solutions**.  
It is structured **topic-wise** so contributors can easily navigate and add new problems.

## 🧩 Folder Structure
```
dsa_in_java/
│
├── array/
│   ├── findDuplicate.java
│   └── reverseArray.java
│
├── string/
│   ├── countVowels.java
│   └── palindromeCheck.java
│
├── linkedlist/
│   ├── reverseLinkedList.java
│   └── mergePoint.java
│
├── tree/
│   └── inorderTraversal.java
│
├── binary_search.java
└── README.md
```

## 🚀 Contribution Guidelines
1. Each topic (like `array`, `string`, `tree`) should have its own folder.
2. If the folder for a topic **does not exist**, create it.
3. Use descriptive filenames like `findMaxInArray.java` or `isPalindrome.java`.
4. Each file must include:
   - A short description of the problem.
   - The approach used.
   - Time and space complexity.
   - Example input/output as comments.
5. Code should be properly formatted and well-commented.

## 🧠 Example File Structure
```java
// dsa_in_java/array/findMax.java
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
System.out.Println(findMax([1, 3, 2, 5, 4])); // Output: 5
```
## Getting Started
### Prerequisites
Make sure you have [JDK](https://www.oracle.com/java/technologies/downloads/) (version 11 or higher) installed on your machine.

### Installation
1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/HarshitPachori/Hacktoberfest-Html_CSS_JS
    ```
2.  Navigate to the project directory:
    ```bash
    cd dsa_in_java
    ```
3.  Run the following command:
    ```bash
    npm start
    ```