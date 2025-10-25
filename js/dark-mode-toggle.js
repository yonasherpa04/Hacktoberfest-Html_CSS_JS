document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const localStorageKey = 'theme';

    /**
     * Applies the selected theme class to the body.
     * @param {string} theme - 'dark' or 'light'
     */
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            toggle.checked = true;
        } else {
            body.classList.remove('dark-theme');
            toggle.checked = false;
        }
    }

    // 1. Load Theme Preference on Page Load
    const savedTheme = localStorage.getItem(localStorageKey);

    if (savedTheme) {
        // Use saved preference
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Use system preference if no save preference exists
        applyTheme('dark');
    } else {
        // Default to light
        applyTheme('light');
    }

    // 2. Event Listener for Toggling
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            applyTheme('dark');
            localStorage.setItem(localStorageKey, 'dark');
        } else {
            applyTheme('light');
            localStorage.setItem(localStorageKey, 'light');
        }
    });
});