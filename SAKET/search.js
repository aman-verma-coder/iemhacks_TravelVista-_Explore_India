const attractionsData = [
  "Victoria Memorial, Kolkata","Ooty, Kerala","Qutub Minar, Delhi"
 ,"Golden Temple, Punjab"
 ,"Ellora Caves"
 ,"Statue of Unity, Gujarat"
 ,"Srinagar Mountain View, Kashmir"
 ,"Varanasi, Uttar Pradesh"
 ,"Hawa-Mahal, Rajasthan"
 ,"Lotus Temple, Delhi"
 ,"Charminar, Hyderabad"
 ,"Red Fort, Delhi"
 ,"Shiva Temple, South India"
 ,"Jama Masjid, Delhi"
 ,"Buddha Temple, Varanasi"
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
