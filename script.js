 /*---------------------------- Variables (state) ----------------------------*/
 let clickedCard = null;
 let cardElements = null;
 let matchedCards = 0;
 let triesRemaining = 3;

 /*------------------------ Cached Element References ------------------------*/
 function CachedCard() {
     if (!cardElements) {
         cardElements = document.querySelectorAll('.card');
     }
     return cardElements;
 }

 const resetButton = document.querySelector('.reset');
 const display = document.querySelector('#message');
 const triesRemainingDisplay = document.querySelector('#tries-remaining');

 /*------------------------ functions------------------------*/


 function cardClicked(event) {
     const currentCard = event.currentTarget;
     if (clickedCard === null || clickedCard !== currentCard) {
         currentCard.classList.toggle('color-hidden');

         // If another card is already clicked, check if colors match
         if (clickedCard !== null) {
             if (clickedCard.classList.value === currentCard.classList.value) {
                 // If colors match, increment the matched cards counter
                 matchedCards++;
                 //console.log('Matched!');

                 // Check if the player has won
                 if (matchedCards === CachedCard().length / 2) {
                    display.textContent = 'Congratulations! You won!';
                    
                  
                 }

                 clickedCard = null; // Reset the clicked card
             } else {
                 // If colors don't match, decrement the tries remaining
                 triesRemaining--;
                 triesRemainingDisplay.textContent = `Chances Remaining: ${triesRemaining}`;

                 // If the player has no tries left, display the "You lost" message
                 if (triesRemaining === 0) {
                     display.textContent = 'Sorry, you lost. Try again!';
                     

                     
                     clickedCard = null; // Reset the clicked card
                     setTimeout(resetGame, 3000); // Reset the game after 3 seconds
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
                         //console.log('Not Matched!');
                     }, 1000);
                 }
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
     matchedCards = 0;
     triesRemaining = 3;
     triesRemainingDisplay.textContent = `Tries Remaining: ${triesRemaining}`;
     display.textContent = '';
	
 }


 //triesRemainingDisplay.textContent = `Tries Remaining: ${triesRemaining}`;


 /*----------------------------- Event Listeners -----------------------------*/
 CachedCard().forEach(card => {
     card.addEventListener('click', cardClicked);
 });

 resetButton.addEventListener('click', resetGame);


 