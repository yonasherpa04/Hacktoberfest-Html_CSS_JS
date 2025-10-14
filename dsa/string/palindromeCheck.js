/**
 * This function checks if a given string is a palindrome by comparing it to its reverse.
 * @param {string} str The string to be checked
 * @returns {boolean} True if the string is a palindrome, false otherwise
 */
export function isPalindromeReverse(str) {
	const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	const reversedStr = cleanedStr.split('').reverse().join('');
	return cleanedStr === reversedStr;
}

/**
 * This function checks if a given string is a palindrome
 * @param {string} str The string to be checked
 * @returns {boolean} True if the string is a palindrome, false otherwise
 */
export function isPalindromeIterative(str) {
	const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	let left = 0;
	let right = cleanedStr.length - 1;
	while (left < right) {
		if (cleanedStr[left] !== cleanedStr[right]) return false;
		left++;
		right--;
	}
	return true;
}

// tiny self-checks in console
(function selfTest() {
	const testStrings = ["Racecar", "A man a plan a canal Panama", "Hello", "12321", "Not a palindrome"];
	testStrings.forEach(str => {
		console.log(`isPalindromeReverse("${str}") = ${isPalindromeReverse(str)}`);
		console.log(`isPalindromeIterative("${str}") = ${isPalindromeIterative(str)}`);
		console.log('---');
	});
})();