/**
 * Count the number of vowels in a given string.
 * @param {string} str 
 * @returns {number} The count of vowels in the string
 */
export function countVowels(str) {
	const vowels = 'aeiouAEIOU';
	let count = 0;
	for (let char of str) {
		if (vowels.includes(char)) {
			count++;
		}
	}
	return count;
}

// tiny self-checks in console
(function selfTest() {
	const testStrings = ["Hello World", "DSA is fun!", "JavaScript", "AEIOU", "xyz"];
	testStrings.forEach(str => {
		console.log(`countVowels("${str}") = ${countVowels(str)}`);
		console.log('---');
	});
})();