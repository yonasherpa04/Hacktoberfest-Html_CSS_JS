const paletteContainer = document.querySelector('.palette-container');
const generateBtn = document.getElementById('generate-btn');

// Function to generate a random hex color
function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  return `#${hex.toUpperCase()}`;
}

// Function to create and display palette
function generatePalette() {
  paletteContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const colorBlock = document.createElement('div');
    colorBlock.className = 'color-block';
    colorBlock.textContent = color;
    colorBlock.style.backgroundColor = color;

    // Copy color code to clipboard on click
    colorBlock.addEventListener('click', () => {
      navigator.clipboard.writeText(color)
        .then(() => alert(`Copied ${color} to clipboard!`))
        .catch(err => console.error('Failed to copy: ', err));
    });

    paletteContainer.appendChild(colorBlock);
  }
}

// Event listener
generateBtn.addEventListener('click', generatePalette);

// Initial palette on page load
generatePalette();
