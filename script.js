document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'card'
    const cards = document.querySelectorAll('.card');

    // Function to handle card click
    function cardClicked(event) {
        const currentCard = event.target; // Get the clicked card
console.log('test')
        // Toggle the visibility of the card's color
        currentCard.classList.toggle('color-hidden');
    }

    // Loop through each card and add a click event listener
    cards.forEach(card => {
        card.addEventListener('click', cardClicked);
    });
});

