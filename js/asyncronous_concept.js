
// API Used: https://jsonplaceholder.typicode.com/users
// This is a free fake REST API for testing and prototyping.

const apiURL = 'https://jsonplaceholder.typicode.com/users';

// Helper to render results into the page
function appendLog(containerId, message) {
  const container = document.getElementById(containerId);
  const p = document.createElement('p');
  p.textContent = message;
  container.appendChild(p);
}

// Clear logs (useful when re-running)
function clearLogs() {
  document.getElementById('promises-logs').innerHTML = '';
  document.getElementById('async-logs').innerHTML = '';
}


// Example 1: Using Promises

function fetchWithPromises() {
  appendLog('promises-logs', '--- Fetching user list using Promises ---');

  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      appendLog('promises-logs', 'User List (via Promises):');
      data.forEach((user, index) => {
        appendLog('promises-logs', `${index + 1}. ${user.name} (${user.email})`);
      });
    })
    .catch((error) => {
      appendLog('promises-logs', `Error fetching users (Promises): ${error.message}`);
    });
}


// Example 2: Using Async/Await

async function fetchWithAsyncAwait() {
  appendLog('async-logs', '--- Fetching user list using Async/Await ---');

  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const users = await response.json();
    appendLog('async-logs', 'User List (via Async/Await):');
    users.forEach((user, index) => {
      appendLog('async-logs', `${index + 1}. ${user.name} (${user.email})`);
    });
  } catch (error) {
    appendLog('async-logs', `Error fetching users (Async/Await): ${error.message}`);
  }
}

// Expose functions to the global scope so HTML buttons can call them
window.fetchWithPromises = fetchWithPromises;
window.fetchWithAsyncAwait = fetchWithAsyncAwait;
window.clearLogs = clearLogs;
