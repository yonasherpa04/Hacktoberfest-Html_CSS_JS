// Generic Memoization Function
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = args.toString();
        if (cache[key] !== undefined) {
            console.log(`Fetching from cache for args: [${args}]`);
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Example 1: Factorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));

// Example 2: Sum of Numbers
function sum(a, b) {
    console.log(`Calculating sum of ${a} + ${b}`);
    return a + b;
}
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 3));
console.log(memoizedSum(2, 3));
console.log(memoizedSum(4, 5));
