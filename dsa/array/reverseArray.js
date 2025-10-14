/**
 * Reverses an array in place.
 * @param {any[]} arr The input array
 * @returns {any[]} The reversed array
 */
export function reverseArray(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		[arr[left], arr[right]] = [arr[right], arr[left]];
		left++;
		right--;
	}
	return arr;
}

// tiny self-checks in console
(function selfTest() {
	console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
	console.log(reverseArray(['a', 'b', 'c'])); // ['c', 'b', 'a']
	console.log(reverseArray([])); // []
	console.log(reverseArray([1])); // [1]
})();