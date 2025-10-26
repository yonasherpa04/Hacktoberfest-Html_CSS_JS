// Get the toggle switch element
const toggleSwitch = document.getElementById('darkModeToggle');

// The class name to add to the HTML tag
const darkThemeClassName = 'dark-mode';

// The key to use for localStorage
const storageKey = 'theme-preference';

// ---------------------------------
// 1. Core Toggle Function
// ---------------------------------

function toggleTheme() {
    if (toggleSwitch.checked) {
        document.documentElement.classList.add(darkThemeClassName);
        localStorage.setItem(storageKey, 'dark');
    } else {
        document.documentElement.classList.remove(darkThemeClassName);
        localStorage.setItem(storageKey, 'light');
    }
}

// ---------------------------------
// 2. Initialization on Page Load
// ---------------------------------

function initializeTheme() {
    const savedTheme = localStorage.getItem(storageKey);

    // If a theme is saved, apply it
    if (savedTheme === 'dark') {
        document.documentElement.classList.add(darkThemeClassName);
        toggleSwitch.checked = true; // Check the box
    }
    // You can also check for system preference here using: 
    // window.matchMedia('(prefers-color-scheme: dark)').matches
    // but for simplicity, we rely on the saved preference or default to light.
}

// ---------------------------------
// 3. Event Listeners
// ---------------------------------

// Listen for the change event on the toggle switch
toggleSwitch.addEventListener('change', toggleTheme);

// Initialize the theme when the script loads
initializeTheme();