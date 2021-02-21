/*

I want to create a function that flips each card over to see the other side.

-I need to call the class of all the cards
-create a event listener that listens for a clic
-then triggers a function that will actually flip the cards


*/

const cards = document.querySelectorAll('.flashcard');
// console.log(cards);

function flipCard() {
	// console.log('Card has been clicked');
	// console.log(this);
	this.classList.toggle('flip');
	// ^ changes the class from 'flashcard' to 'flashcard flip'
}

cards.forEach((card) => card.addEventListener('click', flipCard));
