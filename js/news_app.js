const API_KEY = "0171ef01283a3a6c5cc8f27975905ed2";
const API_BASE = "https://api.mediastack.com/v1/news";

// Get DOM elements
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const newsContainer = document.getElementById("newsContainer");

// Fetch news from Mediastack
async function fetchNews(query = "latest", category = "general") {
  // Show loading spinner
  newsContainer.innerHTML = `
  <div class="loader">
    <div class="spinner"></div>
    <p>Fetching latest headlines...</p>
  </div>`;

  try {
    // Build API request URL
    const url = `${API_BASE}?access_key=${API_KEY}&languages=en&keywords=${encodeURIComponent(
      query
    )}&categories=${category}&limit=10`;

    const response = await fetch(url);
    const data = await response.json();

    // Check if data is valid
    if (!data.data || data.data.length === 0) {
      newsContainer.innerHTML = "<p>No news found for this search.</p>";
      console.warn("API response:", data);
      return;
    }

    displayNews(data.data);
  } catch (error) {
    console.error("Error fetching news:", error);
    newsContainer.innerHTML = "<p> Failed to load news. Please check your API key or network.</p>";
  }
}

function displayNews(articles) {
  newsContainer.innerHTML = "";

  // Fallback category images
  const fallbackImages = {
    sports: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    technology: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    business: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    entertainment: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    health: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
    science: "https://images.unsplash.com/photo-1581091215367-59ab6d41c240",
    general: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  };

  const category = categorySelect.value || "general";

  // Loop through articles
  articles.slice(0, 10).forEach((article) => {
    // Create card
    const card = document.createElement("div");
    card.classList.add("news-card");

    // Determine image
    const imageUrl =
      article.image ||
      fallbackImages[category] ||
      "https://via.placeholder.com/400x200?text=No+Image";

    // Fill card HTML
    card.innerHTML = `
      <img src="${imageUrl}" alt="News Image" />
      <div class="news-content">
        <h3>${article.title}</h3>
        <p>${article.description || "No description available."}</p>
        <a href="${article.url}" target="_blank">Read More →</a>
      </div>
    `;

    // Now that card exists, handle fade-in image
    const img = card.querySelector("img");
    img.onload = () => img.classList.add("loaded");

    // Add card to container
    newsContainer.appendChild(card);
  });
}
// Handle search button click
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim() || "latest";
  const category = categorySelect.value;
  fetchNews(query, category);
});

// Fetch default news when page loads
window.onload = () => fetchNews();
