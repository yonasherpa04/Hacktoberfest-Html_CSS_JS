// digital_clock.js
// Simple Digital Clock ⏰

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

window.onload = function() {
  if (!document.getElementById('clock')) {
    const clock = document.createElement('h1');
    clock.id = 'clock';
    clock.style.fontFamily = 'monospace';
    clock.style.textAlign = 'center';
    document.body.appendChild(clock);
  }
  updateClock();
};
