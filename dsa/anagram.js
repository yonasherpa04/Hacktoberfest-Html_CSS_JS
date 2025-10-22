/**
 * Anagram Checker Implementation
 * 
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * 
 * Example: "listen" and "silent" are anagrams
 * Example: "evil" and "vile" are anagrams
 * Example: "hello" and "world" are NOT anagrams
 */

/**
 * Method 1: Character Frequency Counting (Recommended)
 * 
 * This method counts the frequency of each character in both strings
 * and compares the frequency maps.
 * 
 * @param {string} str1 - First string to compare
 * @param {string} str2 - Second string to compare
 * @returns {boolean} - True if strings are anagrams, false otherwise
 * 
 * Time Complexity: O(n) where n is the length of the strings
 * Space Complexity: O(1) - limited by the number of unique characters (max 26 for lowercase letters)
 */
function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
    
    // If lengths are different, they cannot be anagrams
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
    
    // Create frequency map for characters
    const charCount = {};
    
    // Count characters in first string
    for (let char of cleanStr1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Decrease count for characters in second string
    for (let char of cleanStr2) {
        if (!charCount[char]) {
            return false; // Character not found in first string
        }
        charCount[char]--;
    }
    
    // Check if all counts are zero
    for (let count of Object.values(charCount)) {
        if (count !== 0) {
            return false;
        }
    }
    
    return true;
}

/**
 * Method 2: Sorting Approach
 * 
 * This method sorts both strings and compares them.
 * 
 * @param {string} str1 - First string to compare
 * @param {string} str2 - Second string to compare
 * @returns {boolean} - True if strings are anagrams, false otherwise
 * 
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(n) for the sorted strings
 */
function isAnagramSorting(str1, str2) {
    // Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
    
    // If lengths are different, they cannot be anagrams
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
    
    // Sort characters and compare
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

/**
 * Method 3: Using Map for Better Performance
 * 
 * This method uses JavaScript Map for character counting.
 * 
 * @param {string} str1 - First string to compare
 * @param {string} str2 - Second string to compare
 * @returns {boolean} - True if strings are anagrams, false otherwise
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(k) where k is the number of unique characters
 */
function isAnagramMap(str1, str2) {
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
    
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
    
    const charMap = new Map();
    
    // Count characters in first string
    for (let char of cleanStr1) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    
    // Check characters in second string
    for (let char of cleanStr2) {
        if (!charMap.has(char) || charMap.get(char) === 0) {
            return false;
        }
        charMap.set(char, charMap.get(char) - 1);
    }
    
    return true;
}

// Test Cases and Examples
console.log("=== Anagram Checker Examples ===\n");

// Example 1: Basic anagrams
console.log("Example 1: Basic anagrams");
console.log(`"listen" and "silent": ${isAnagram("listen", "silent")}`); // true
console.log(`"evil" and "vile": ${isAnagram("evil", "vile")}`); // true
console.log(`"hello" and "world": ${isAnagram("hello", "world")}`); // false
console.log();

// Example 2: Case insensitive
console.log("Example 2: Case insensitive");
console.log(`"Listen" and "SILENT": ${isAnagram("Listen", "SILENT")}`); // true
console.log(`"Evil" and "VILE": ${isAnagram("Evil", "VILE")}`); // true
console.log();

// Example 3: With spaces (phrases)
console.log("Example 3: Phrases with spaces");
console.log(`"a gentleman" and "elegant man": ${isAnagram("a gentleman", "elegant man")}`); // true
console.log(`"school master" and "the classroom": ${isAnagram("school master", "the classroom")}`); // true
console.log();

// Example 4: Edge cases
console.log("Example 4: Edge cases");
console.log(`Empty strings: ${isAnagram("", "")}`); // true
console.log(`Single character: ${isAnagram("a", "a")}`); // true
console.log(`Different lengths: ${isAnagram("abc", "abcd")}`); // false
console.log();

// Example 5: Performance comparison
console.log("Example 5: Performance comparison");
const testStr1 = "abcdefghijklmnopqrstuvwxyz";
const testStr2 = "zyxwvutsrqponmlkjihgfedcba";

console.time("Frequency Counting Method");
for (let i = 0; i < 10000; i++) {
    isAnagram(testStr1, testStr2);
}
console.timeEnd("Frequency Counting Method");

console.time("Sorting Method");
for (let i = 0; i < 10000; i++) {
    isAnagramSorting(testStr1, testStr2);
}
console.timeEnd("Sorting Method");

console.time("Map Method");
for (let i = 0; i < 10000; i++) {
    isAnagramMap(testStr1, testStr2);
}
console.timeEnd("Map Method");

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isAnagram,
        isAnagramSorting,
        isAnagramMap
    };
}

/**
 * COMPLEXITY ANALYSIS:
 * 
 * Method 1 (Frequency Counting) - RECOMMENDED:
 * - Time Complexity: O(n) where n is the length of the strings
 * - Space Complexity: O(1) - limited by character set size (26 for lowercase letters)
 * - Best for: General purpose anagram checking
 * 
 * Method 2 (Sorting):
 * - Time Complexity: O(n log n) due to sorting
 * - Space Complexity: O(n) for storing sorted strings
 * - Best for: When you need sorted characters for other purposes
 * 
 * Method 3 (Map):
 * - Time Complexity: O(n)
 * - Space Complexity: O(k) where k is the number of unique characters
 * - Best for: When dealing with Unicode characters or very large character sets
 * 
 * RECOMMENDATION: Use Method 1 (Frequency Counting) for most cases as it provides
 * the best balance of time complexity and space efficiency.
 */
