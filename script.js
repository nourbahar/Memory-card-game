/*---------------------------- Variables (state) ----------------------------*/
let clickedCard = null;
let cardElements = null;

/*------------------------ Cached Element References ------------------------*/
function CachedCard() {
    if (!cardElements) {
        cardElements = document.querySelectorAll('.card');
    }
    return cardElements;
}

const resetButton = document.querySelector('.reset');

/*------------------------ functions------------------------*/

function cardClicked(event) {
    const currentCard = event.currentTarget;
    if (clickedCard === null || clickedCard !== currentCard) {
        currentCard.classList.toggle('color-hidden');
    
        // If another card is already clicked, check if colors match
        if (clickedCard !== null) {
            if (clickedCard.classList.value === currentCard.classList.value) {
                // If colors match, you can add specific logic here
                console.log('Matched!');
                // you might want to leave them face up
                clickedCard = null; // Reset the clicked card
            } else {
                // If colors don't match, flip both cards back face down after a delay
                const cardToHide1 = clickedCard;
                const cardToHide2 = currentCard;
                clickedCard = null; // Reset the clicked card
                setTimeout(() => {
                    if (cardToHide1 !== null) {
                        cardToHide1.classList.add('color-hidden');
                    }
                    if (cardToHide2 !== null) {
                        cardToHide2.classList.add('color-hidden');
                    }
                    console.log('Not Matched!');
                }, 1000); 
            }
        } else {
            clickedCard = currentCard; 
        }
    }
}

function resetGame() {
   
    CachedCard().forEach(card => {
        card.classList.add('color-hidden');
    });
    clickedCard = null; 
}

/*----------------------------- Event Listeners -----------------------------*/
CachedCard().forEach(card => {
    card.addEventListener('click', cardClicked);
});

resetButton.addEventListener('click', resetGame);