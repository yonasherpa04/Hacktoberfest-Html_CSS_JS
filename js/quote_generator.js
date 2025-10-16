const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btn = document.getElementById("new-quote");
const copyBtn = document.getElementById("copy-quote");

const gradients = [
  "linear-gradient(to right, #ff7e5f, #feb47b)",
  "linear-gradient(to right, #43cea2, #185a9d)",
  "linear-gradient(to right, #f7971e, #ffd200)",
  "linear-gradient(to right, #a18cd1, #fbc2eb)",
  "linear-gradient(to right, #30cfd0, #330867)"
];

const quotes = [
  {text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
  {text: "Your limitation—it's only your imagination.", author: "Unknown"},
  {text: "Push yourself, because no one else is going to do it for you.", author: "Unknown"},
  {text: "Great things never come from comfort zones.", author: "Unknown"},
  {text: "Dream it. Wish it. Do it.", author: "Unknown"},
  {text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown"},
  {text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown"},
  {text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown"},
  {text: "Do something today that your future self will thank you for.", author: "Unknown"},
  {text: "Little things make big days.", author: "Unknown"},
  {text: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown"},
  {text: "Don’t wait for opportunity. Create it.", author: "Unknown"},
  {text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown"},
  {text: "The key to success is to focus on goals, not obstacles.", author: "Unknown"},
  {text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke"}
];

let currentQuoteIndex = null;

// Function to show random quote 

function showRandomQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while(randomIndex === currentQuoteIndex); // prevent same quote twice in a row
  currentQuoteIndex = randomIndex;

  const quote = quotes[randomIndex];

 

  setTimeout(() => {
    quoteEl.textContent = quote.text;
    authorEl.textContent = "— " + quote.author;

    // fade-in
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 1;
  }, 300);

  // Random gradient
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = randomGradient;
}

// Button click
btn.addEventListener("click", showRandomQuote);

// Copy button
copyBtn.addEventListener("click", () => {
  if(currentQuoteIndex === null) return;
  const quote = quotes[currentQuoteIndex];
  navigator.clipboard.writeText(`${quote.text} — ${quote.author}`);
  alert("Quote copied to clipboard!");
});

// Automatic rotation every 15 seconds
setInterval(showRandomQuote, 15000);

// Initial quote
showRandomQuote();
