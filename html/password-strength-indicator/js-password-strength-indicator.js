document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the necessary DOM elements
    const passwordInput = document.getElementById('password-input');
    const strengthBar = document.getElementById('strength-bar');
    const strengthStatus = document.getElementById('strength-status');

    // 2. Add an event listener to check strength as the user types
    if (passwordInput) {
        passwordInput.addEventListener('input', checkPasswordStrength);
    }

    /**
     * Checks the password strength and updates the indicator.
     */
    function checkPasswordStrength() {
        const password = passwordInput.value;
        let score = 0;
        let statusText = 'Too Short';

        // Clear previous classes
        strengthBar.className = 'strength-indicator';
        strengthStatus.textContent = '';

        // Do nothing if the password field is empty
        if (password.length === 0) {
            return;
        }

        // Check for basic length
        if (password.length < 8) {
            strengthBar.classList.add('weak');
            strengthStatus.textContent = statusText;
            return;
        }

        // --- Password Criteria Checks (Increase score for each met criterion) ---

        // 1. Lowercase letters
        if (password.match(/[a-z]/)) {
            score++;
        }

        // 2. Uppercase letters
        if (password.match(/[A-Z]/)) {
            score++;
        }

        // 3. Numbers
        if (password.match(/[0-9]/)) {
            score++;
        }

        // 4. Special characters
        if (password.match(/[^A-Za-z0-9\s]/)) { // Matches anything that is NOT a letter, number, or whitespace
            score++;
        }

        // 5. Bonus for good length
        if (password.length >= 12) {
            score++;
        }

        // --- Determine Strength Level based on Score ---

        if (score < 3) {
            statusText = 'Weak';
            strengthBar.classList.add('weak');
        } else if (score < 5) {
            statusText = 'Medium';
            strengthBar.classList.add('medium');
        } else {
            statusText = 'Strong';
            strengthBar.classList.add('strong');
        }

        // Update the status text
        strengthStatus.textContent = statusText;
    }
});