document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('volume-slider');
    const container = slider.closest('.custom-slider-component');
    const valueDisplay = container.querySelector('.slider-value-display');

    // Constant for thumb size (must match CSS variable)
    const THUMB_SIZE = 20;

    // Function to run on input, focus, and load
    const updateSlider = (sliderElement) => {
        const value = parseInt(sliderElement.value);
        const min = parseInt(sliderElement.min) || 0;
        const max = parseInt(sliderElement.max) || 100;

        // 1. Value Sync & ARIA Update
        valueDisplay.textContent = value;
        sliderElement.setAttribute('aria-valuenow', value);

        // 2. Calculation for Position & Track Fill
        const range = max - min;
        const percent = ((value - min) / range) * 100;
        const trackWidth = sliderElement.offsetWidth;

        // Position the value display over the thumb center
        const effectiveTrackWidth = trackWidth - THUMB_SIZE;
        const pixelPosition = (percent / 100) * effectiveTrackWidth + (THUMB_SIZE / 2);

        valueDisplay.style.left = `$ { pixelPosition }
        px`;
        valueDisplay.style.visibility = 'visible';

        // 3. Dynamic Track Fill using linear-gradient
        sliderElement.style.background = `linear-gradient(to right, 
            var(--slider-color-primary) 0%, 
            var(--slider-color-primary) ${percent}%, 
            var(--slider-color-track-default) ${percent}%, 
            var(--slider-color-track-default) 100%)`;
    };

    // Initialize on load
    updateSlider(slider);

    /* --- Event Listeners --- */

    // Real-time update while sliding
    slider.addEventListener('input', (e) => updateSlider(e.target));

    // Dispatch custom event on release (required)
    slider.addEventListener('change', (e) => {
        const customEvent = new CustomEvent('slider-change', {
            bubbles: true,
            detail: { value: e.target.value }
        });
        container.dispatchEvent(customEvent);
        valueDisplay.style.visibility = 'hidden';
    });

    // Show/Hide value display for focus (WCAG)
    slider.addEventListener('focus', () => updateSlider(slider));
    slider.addEventListener('blur', () => valueDisplay.style.visibility = 'hidden');
});