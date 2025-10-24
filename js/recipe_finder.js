document.getElementById('searchBtn').addEventListener('click', searchRecipes);

async function searchRecipes() {
    const query = document.getElementById('search').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "Loading...";

    if (!query) {
        resultsDiv.innerHTML = "Please enter a recipe name.";
        return;
    }

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();

        if (data.meals) {
            resultsDiv.innerHTML = "";
            data.meals.forEach(meal => {
                const card = document.createElement('div');
                card.className = 'recipe-card';

                card.onclick = () => openModal(meal);

                card.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <div class="content">
                        <h3>${meal.strMeal}</h3>
                        <p><strong>Category:</strong> ${meal.strCategory}</p>
                        <p>${meal.strInstructions.substring(0, 100)}...</p>
                        <div class="ingredients">
                            <strong>Ingredients:</strong>
                            <ul>
                                ${Object.keys(meal)
                                    .filter(key => key.startsWith('strIngredient') && meal[key])
                                    .map(key => `<li>${meal[key]}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                resultsDiv.appendChild(card);
            });
        } else {
            resultsDiv.innerHTML = "No recipes found.";
        }
    } catch (error) {
        resultsDiv.innerHTML = "Error fetching data.";
        console.error(error);
    }
}

function openModal(meal) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
            <p><strong>Ingredients:</strong></p>
            <ul>
                ${Object.keys(meal)
                    .filter(key => key.startsWith('strIngredient') && meal[key])
                    .map(key => `<li>${meal[key]} - ${meal['strMeasure'+key.slice(13)] || ''}</li>`)
                    .join('')}
            </ul>
            ${meal.strYoutube ? `<p><a href="${meal.strYoutube}" target="_blank">Watch Tutorial Video</a></p>` : ''}
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close').onclick = () => {
        document.body.removeChild(modal);
    };
}
