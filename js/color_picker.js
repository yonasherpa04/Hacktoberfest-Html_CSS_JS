const colorPickerContainer = document.querySelector('.color-picker-container');
const hueSlider = document.getElementById('hue-slider');
const sbArea = document.getElementById('saturation-brightness-area');
const colorHandle = document.getElementById('color-handle');
const hexInput = document.getElementById('hex-input');
const rgbInput = document.getElementById('rgb-input');
const colorPreview = document.getElementById('color-preview');
const applyButton = document.getElementById('apply-button');

// --- State Management: HSL values for the current color (0-360, 0-100, 0-100) ---
let h = 0; // Hue
let s = 100; // Saturation
let l = 50; // Lightness (also refers to brightness for the picker logic)
let draggingSaturationBrightness = false;

// --- UTILITY FUNCTIONS (Color Conversion Logic) ---
// These are standard algorithms for HSL <-> RGB <-> HEX

// HSL to RGB conversion
function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

// RGB to HSL conversion (needed if you parse RGB input directly)
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
}

// RGB to HEX conversion
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// HEX to RGB conversion
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

// --- CORE UPDATE FUNCTION ---
// This function updates all parts of the UI based on the current HSL values.
function updateColorPickerUI() {
    // 1. Update the saturation/brightness area background (based on HUE)
    sbArea.style.backgroundColor = `hsl(${h}, 100%, 50%)`;

    // 2. Calculate and update the color outputs (HEX, RGB)
    const rgbString = hslToRgb(h, s, l);
    const rgbMatch = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    let hexString = '#000000'; // Default
    if (rgbMatch) {
        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);
        hexString = rgbToHex(r, g, b);
    }

    hexInput.value = hexString;
    rgbInput.value = rgbString;
    colorPreview.style.backgroundColor = rgbString;

    // 3. Update ARIA value for the hue slider (for accessibility)
    hueSlider.value = h; // Make sure the slider's visual position is correct
    hueSlider.setAttribute('aria-valuenow', h);
    hueSlider.setAttribute('aria-valuetext', ⁠ Hue $ { h }
        degrees ⁠);

    // 4. Update the Saturation/Brightness handle position
    // Handle position is based on Saturation (X) and Lightness (Y)
    const xPos = s; // s is 0-100, so directly maps to %
    const yPos = 100 - l; // Invert L so 0 is bottom (black), 100 is top (white)

    colorHandle.style.left = ⁠ $ { xPos } %  ⁠;
    colorHandle.style.top = ⁠ $ { yPos } %  ⁠;
    colorHandle.setAttribute('aria-label', ⁠ Color saturation $ { s } % , brightness $ { l } %  ⁠);
}

// --- EVENT LISTENERS ---

// 1. Hue Slider Change (updates HUE)
hueSlider.addEventListener('input', (e) => {
    h = parseInt(e.target.value);
    updateColorPickerUI();
});

// 2. Saturation/Brightness Drag (updates Saturation/Lightness)
sbArea.addEventListener('mousedown', (e) => {
    draggingSaturationBrightness = true;
    updateSbFromEvent(e);
});

// Handle dragging across the document, not just within sbArea
document.addEventListener('mouseup', () => {
    draggingSaturationBrightness = false;
});

document.addEventListener('mousemove', (e) => {
    if (draggingSaturationBrightness) {
        // Ensure the event is within the SB area, or stop dragging
        const rect = sbArea.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right ||
            e.clientY < rect.top || e.clientY > rect.bottom) {
            // If dragging outside, release the drag but maintain current color
            // draggingSaturationBrightness = false;
            // You might want to constrain the handle to the picker,
            // or allow it to follow the mouse outside, then snap back.
            // For now, we'll keep it simple and just update if inside.
        } else {
            updateSbFromEvent(e);
        }
    }
});


function updateSbFromEvent(e) {
    const rect = sbArea.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // Constrain position within the bounds (0 to width/height)
    x = Math.max(0, Math.min(x, rect.width));
    y = Math.max(0, Math.min(y, rect.height));

    // Convert pixel position to S (0-100) and L (0-100) values
    const newS = Math.round((x / rect.width) * 100);
    const newL = Math.round(100 - ((y / rect.height) * 100)); // L is inverted on the picker (top=100, bottom=0)

    s = newS;
    l = newL;
    updateColorPickerUI();
}

// 3. Bi-Directional Input (e.g., typing a HEX value)
hexInput.addEventListener('change', (e) => {
    let hex = e.target.value.trim();
    if (!hex.startsWith('#')) {
        hex = '#' + hex;
    }
    // Basic validation for 3 or 6 hex digits
    if (!/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(hex)) {
        alert('Invalid HEX color format. Please use #RRGGBB or #RGB.');
        updateColorPickerUI(); // Revert to current color if invalid
        return;
    }

    // Expand 3-digit hex to 6-digit hex
    if (/^#([A-Fa-f0-9]{3})$/.test(hex)) {
        hex = '#' + hex.slice(1).split('').map(c => c + c).join('');
    }
    const { r, g, b } = hexToRgb(hex);
    const { h: newH, s: newS, l: newL } = rgbToHsl(r, g, b);

    // Update global HSL state
    h = newH;
    s = newS;
    l = newL;
    updateColorPickerUI();
});

rgbInput.addEventListener('change', (e) => {
    const rgbMatch = e.target.value.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i);
    if (!rgbMatch) {
        alert('Invalid RGB color format. Please use rgb(R, G, B).');
        updateColorPickerUI(); // Revert to current color if invalid
        return;
    }
    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);

    // Basic range validation
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        alert('RGB values must be between 0 and 255.');
        updateColorPickerUI();
        return;
    }

    const { h: newH, s: newS, l: newL } = rgbToHsl(r, g, b);

    // Update global HSL state
    h = newH;
    s = newS;
    l = newL;
    updateColorPickerUI();
});

// 4. Keyboard Navigation for Saturation/Brightness Handle (Accessibility)
colorHandle.setAttribute('tabindex', '0'); // Make the handle focusable
colorHandle.addEventListener('keydown', (e) => {
    let newS = s;
    let newL = l;
    const step = e.shiftKey ? 10 : 1; // Bigger step with Shift key

    switch (e.key) {
        case 'ArrowUp':
            newL = Math.min(100, l + step);
            break;
        case 'ArrowDown':
            newL = Math.max(0, l - step);
            break;
        case 'ArrowLeft':
            newS = Math.max(0, s - step);
            break;
        case 'ArrowRight':
            newS = Math.min(100, s + step);
            break;
        default:
            return; // Don't prevent default for other keys
    }

    e.preventDefault(); // Prevent page scrolling
    s = newS;
    l = newL;
    updateColorPickerUI();
});


// 5. Custom Event Emission
applyButton.addEventListener('click', () => {
    const colorSelectedEvent = new CustomEvent('color-selected', {
        detail: {
            hex: hexInput.value,
            rgb: rgbInput.value,
            hsl: { h, s, l }
        },
        bubbles: true,
        composed: true
    });

    colorPickerContainer.dispatchEvent(colorSelectedEvent);
    console.log('Custom event "color-selected" dispatched:', colorSelectedEvent.detail);
    alert(⁠ Color applied: $ { hexInput.value } ⁠); // Optional: visual feedback
});


// --- INITIALIZATION ---
// Initialize the color picker with a default color (e.g., a vibrant red)
updateColorPickerUI();