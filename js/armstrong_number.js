/**
 *  Program: Check if a number is an Armstrong Number
 * 
 * An Armstrong number (also known as a narcissistic number) is a number 
 * that is equal to the sum of its own digits each raised to the power 
 * of the number of digits.
 * 
 * Example:
 * 153 → 1³ + 5³ + 3³ = 153 
 * 9474 → 9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474 
 * 
 *  Time Complexity: O(d)   → where d = number of digits in the number
 *  Space Complexity: O(1)
 */

// Function to check if a number is an Armstrong number
function isArmstrongNumber(num) {
  if (num < 0) return false; // Armstrong numbers are non-negative

  const digits = num.toString().split('').map(Number);
  const power = digits.length;

  // Calculate sum of digits raised to the power
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

  return sum === num;
}

// Examples and testing
console.log("🔍 Checking Armstrong Numbers:");

const testCases = [0, 1, 153, 370, 9474, 9475, 407, 8208];

testCases.forEach(num => {
  console.log(`${num} → ${isArmstrongNumber(num) ? "✅ Armstrong" : "❌ Not Armstrong"}`);
});
