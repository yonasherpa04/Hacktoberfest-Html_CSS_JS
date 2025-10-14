// =====================
// DSA Main Runner File
// =====================

// --- Imports ---
import { findDuplicate } from './array/findDuplicate.js';
import { reverseArray } from './array/reverseArray.js';
import { countVowels } from './string/countVowels.js';
import { isPalindromeIterative } from './string/palindromeCheck.js';
import { ListNode, reverseLinkedList, printList } from './linkedlist/reverseLinkedList.js';
import { TreeNode, inorderTraversal } from './tree/inorderTraversal.js';


console.log("Starting DSA Function Checks...\n");

// ============
// == Arrays ==
// ============
console.log("--- Testing Array Functions ---");

// Test: reverseArray
const originalArray = [1, 2, 3, 4, 5];
console.log(`Original Array: [${originalArray}]`);
// Note: We use the spread operator [...] to create a copy, as reverseArray works in-place.
const reversed = reverseArray([...originalArray]); 
console.log(`Reversed Array: [${reversed}]`);
console.log("");

// Test: findDuplicate
const arrWithDuplicates = [1, 5, 3, 2, 5, 9];
const arrWithoutDuplicates = [1, 2, 3, 4, 5, 6];
console.log(`[${arrWithDuplicates}] has duplicates? `, findDuplicate(arrWithDuplicates)); // Expected: true
console.log(`[${arrWithoutDuplicates}] has duplicates? `, findDuplicate(arrWithoutDuplicates)); // Expected: false
console.log("-------------------------------\n");


// =============
// == Strings ==
// =============
console.log("--- Testing String Functions ---");

// Test: countVowels
const vowelString = "Hello, full-stack web developer!";
console.log(`Vowel count in "${vowelString}" →`, countVowels(vowelString));
console.log("");

// Test: isPalindromeIterative
const str1 = "A man a plan a canal Panama";
const str2 = "Hello World";
console.log(`Is "${str1}" a palindrome? →`, isPalindromeIterative(str1)); // Expected: true
console.log(`Is "${str2}" a palindrome? →`, isPalindromeIterative(str2)); // Expected: false
console.log("--------------------------------\n");


// ==================
// == Linked Lists ==
// ==================
console.log("--- Testing Linked List Functions ---");

// Test: reverseLinkedList
const listHead = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log("Original List:");
printList(listHead);

const reversedHead = reverseLinkedList(listHead);
console.log("Reversed List:");
printList(reversedHead);
console.log("-------------------------------------\n");


// ===========
// == Trees ==
// ===========
console.log("--- Testing Tree Functions ---");

// Test: inorderTraversal
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

console.log("Inorder Traversal of the tree");
console.log("(expected: 1 2 3 4 5 6 7):");
inorderTraversal(root);
console.log("------------------------------\n");

console.log("All checks complete!");