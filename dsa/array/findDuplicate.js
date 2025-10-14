/**
 * Finds if there are any duplicate numbers in the given array.
 * @param {number[]} nums The input array of numbers
 * @returns {boolean} True if duplicates are found, otherwise false
 */
export function findDuplicate(nums) {
	const seen = new Set();
	for (const num of nums) {
		if (seen.has(num)) {
			return true;
		}
		seen.add(num);
	}
	return false;
}

// tiny self-checks in console
(function selfTest() {
	console.log(findDuplicate([1, 2, 3, 4, 5])); // false
	console.log(findDuplicate([1, 2, 3, 4, 5, 3])); // true
	console.log(findDuplicate([])); // false
	console.log(findDuplicate([1, 1, 1, 1])); // true
})();
