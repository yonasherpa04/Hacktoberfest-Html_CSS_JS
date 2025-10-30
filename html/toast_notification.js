/**
 * Function to create and display the accessible toast notification.
 * (Requirement 2: Implement a function)
 * * @param {string} message - The message to display.
 * @param {string} type - The visual style type (e.g., 'success', 'error').
 */
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    // 1. Create and style the element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`

    // 2. Accessibility: ARIA role="alert" (Requirement 3)
    // Announces the toast content immediately to screen readers.
    toast.setAttribute('role', 'alert');

    // Create the inner HTML with message and close button
    toast.innerHTML = `
        <span>${message}</span>
        <button class="toast-close-btn" aria-label="Close notification">&times;</button>
    `;

    // 3. Implement event listener for manual close (Requirement 2)
    const closeBtn = toast.querySelector('.toast-close-btn');
    closeBtn.addEventListener('click', () => {
        hideAndRemoveToast(toast);
    });

    // 4. Add to container and show
    container.appendChild(toast);
    // Use a small timeout to trigger the CSS 'show' transition
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // 5. Implement setTimeout for automatic dismissal (Requirement 2)
    const duration = 4000; // 4 seconds (within the 3-5 second goal)
    setTimeout(() => {
        hideAndRemoveToast(toast);
    }, duration);
}

/**
 * Handles the visual fade out and removal of the toast element.
 * @param {HTMLElement} toastElement - The toast to remove.
 */
function hideAndRemoveToast(toastElement) {
    // Start fade out transition
    toastElement.classList.remove('show');

    // After the CSS transition is complete (300ms in CSS), remove from DOM
    setTimeout(() => {
        if (toastElement.parentNode) {
            toastElement.remove();
        }
    }, 300);
}