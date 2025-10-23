// Get the display element from the DOM
const display = document.getElementById('display');

// Initialize state variables
let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false; // Flag to clear display after calculation

/**
 * Appends a value (number or operator) to the display.
 * @param {string} value - The number or operator to append.
 */
function appendToDisplay(value) {
    // If the display should be reset (after an equals), clear it first
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    
    // Check if the value is an operator
    if (['+', '-', '*', '/'].includes(value)) {
        // Don't allow an operator if there's no input
        if (currentInput === '' && display.value === '') {
            return;
        }
        
        // If there's already an operator and two numbers, calculate the intermediate result
        if (operator && currentInput && previousInput) {
            calculateResult();
            // After calculating, we need to reset shouldResetDisplay to false
            // because we are continuing a calculation, not starting a new one.
            shouldResetDisplay = false;
        }
        
        // Store the operator and the current display value as the previous input
        operator = value;
        previousInput = display.value || currentInput;
        currentInput = ''; // Clear current input to accept the next number
        
        // Update display with the operator
        display.value += ' ' + (value === '*' ? '×' : value) + ' ';
    } else { // The value is a number or decimal
        // Prevent multiple decimal points in the same number
        if (value === '.' && currentInput.includes('.')) {
            return;
        }
        
        // Append the value to the current input and the display
        currentInput += value;
        display.value += value;
    }
}

/**
 * Calculates the result of the current expression.
 */
function calculateResult() {
    // Exit if any part of the expression is missing
    if (!operator || !previousInput || currentInput === '') {
        return;
    }
    
    try {
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        let result;
        
        // Perform the calculation based on the operator
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                // Handle division by zero
                if (current === 0) {
                    display.value = 'Error: Division by zero';
                    resetCalculator(); // Clear calculator after showing error
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }
        
        // Round the result to avoid floating-point inaccuracies
        result = Math.round(result * 1000000000) / 1000000000;
        
        // Display the result
        display.value = result.toString();
        
        // Set the result as the new 'currentInput' for subsequent calculations
        currentInput = result.toString();
        
        // Clear operator and previous input
        operator = '';
        previousInput = '';
        
        // Flag that the display should be reset on the next number press
        shouldResetDisplay = true;
        
    } catch (error) {
        // Handle any parsing or calculation errors
        display.value = 'Error';
        resetCalculator();
    }
}

/**
 * Clears the display and resets all state variables.
 */
function clearDisplay() {
    display.value = '';
    currentInput = '';
    operator = '';
    previousInput = '';
    shouldResetDisplay = false;
}

/**
 * Deletes the last character from the display and updates the state.
 */
function deleteLast() {
    if (display.value.length > 0) {
        const lastChar = display.value.slice(-1);
        
        // Remove last character from display
        display.value = display.value.slice(0, -1);
        
        // Check if the removed character was an operator
        if (['+', '-', '×', '/'].includes(lastChar)) {
            operator = ''; // Clear operator
            currentInput = previousInput; // Restore previous input
            display.value = display.value.trim(); // Remove spaces
        } else if (lastChar !== ' ') {
            // If it was a number or decimal, remove it from currentInput
            currentInput = currentInput.slice(0, -1);
        }
    }
}

/**
 * Resets the calculator after a short delay (used for errors).
 */
function resetCalculator() {
    setTimeout(() => {
        clearDisplay();
    }, 1500); // Wait 1.5 seconds before clearing
}

// --- Keyboard Support ---

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault(); // Prevent default 'Enter' behavior (like form submission)
        calculateResult();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        event.preventDefault(); // Prevent browser from going back
        deleteLast();
    }
});
