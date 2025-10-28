/*
  DSA: Binary Search
  ------------------
  Exposes:
    • binarySearch(arr, target)              → index or -1 (ascending numeric array)
    • binarySearchBy(arr, key, selector)     → index or -1 (generic via selector)
  Includes tiny console tests.
*/

/** Iterative binary search on an ascending numeric array. */
export function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1);
    const val = arr[mid];
    if (val === target) return mid;
    if (val < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

/** Generic binary search using a selector that maps each element  */
export function binarySearchBy(arr, key, selector = x => x) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1);
    const midKey = selector(arr[mid]);
    if (midKey === key) return mid;
    if (midKey < key) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

//tiny self-checks in console
(function selfTest() {
  const arr = [2, 5, 9, 12, 13, 21, 34, 55];
  const i1 = binarySearch(arr, 13); 
  const i2 = binarySearch(arr, 3);

  const people = [
    { id: 1, name: "Asha" },
    { id: 3, name: "Dev" },
    { id: 7, name: "Neha" },
    { id: 9, name: "Rohit" },
  ];
  const i3 = binarySearchBy(people, 7, p => p.id);

  const out = document.getElementById("consoleOut");
  if (out) {
    out.textContent += "\n[Binary Search]\n";
    out.textContent += `Index of 13 in [${arr.join(", ")}]: ${i1}\n`;
    out.textContent += `Index of 3 in [${arr.join(", ")}]: ${i2}\n`;
    out.textContent += `Index of id=7 in people: ${i3}\n`;
  } else {
    // fallback when not on the demo page
    console.log({ i1, i2, i3 });
  }
})();
