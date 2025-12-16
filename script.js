/* script.js - Handles the live search/filter functionality for cheat sheet cards. */

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer ? cardContainer.querySelectorAll('.card') : [];

    if (searchBar && cardContainer) {
        searchBar.addEventListener('keyup', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            cards.forEach(card => {
                // Check if card content includes the search term (case-insensitive)
                const cardText = card.textContent.toLowerCase();

                if (cardText.includes(searchTerm)) {
                    card.style.display = 'block'; 
                } else {
                    card.style.display = 'none'; 
                }
            });
        });
    }
});