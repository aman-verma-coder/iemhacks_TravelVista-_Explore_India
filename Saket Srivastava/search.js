const attractionsData = [
  { name: "Victoria Memorial, Kolkata", description: "..." },
  { name: "Ooty, Kerala", description: "..." },
];

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredAttractions = attractionsData.filter(attraction =>
    attraction.name.toLowerCase().includes(searchTerm) ||
    attraction.description.toLowerCase().includes(searchTerm)
  );

  displaySearchResults(filteredAttractions);
});

function displaySearchResults(results) {
  if (results.length > 0) {
    searchResults.innerHTML = results.map(attraction => `
      <div class="attraction">
        <h3>${attraction.name}</h3>
        <p>${attraction.description}</p>
      </div>
    `).join("");
  } else {
    searchResults.innerHTML = "<p>No results found.</p>";
  }
}
