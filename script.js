/*
Here is my psudocode for what I am trying todo. 

I want to create a function that flips each card over to see the other side.

    -I need to call the class of all the cards
    -create a event listener that listens for a clic
    -then triggers a function that will actually flip the cards

I then want to create a function that will show that the first card has been flipped and the second card has been flipped. Once both those cards are defined, I then want to call another function to see if the cards are a match or not. If it is a match, the cards stay flipped, and if it is not a match the cards should flip back.

-create a function cardHasFlipped()
    -If statement --> for the first click
	-else --> for the second click
-create function do the cards match? use dataset data-name of each card to see if they match
    -If they do match, they stay flipped
        -remove the event listener from each card
    -else they do not match, they flip back
        -remove class 'flipped'
        -use function setTimeout(function, milliseconds) to create a delay to flip the cards back otherwise the seoncd card will not flip

*/

const cards = document.querySelectorAll('.flashcard');
// console.log(cards);

let cardHasFlipped = false;
let firstCard;
let secondCard;

function flipCard() {
	// console.log('Card has been clicked');
	// console.log(this);
	this.classList.toggle('flipped');
	// ^ changes the class from 'flashcard' to 'flashcard flip'

	//fucntion cardhasFlipped
	if (!cardHasFlipped) {
		// first click
		cardHasFlipped = true;
		firstCard = this;
		console.log(cardHasFlipped, firstCard);
	} else {
		// second click
		cardHasFlipped = false;
		secondCard = this;
		console.log(secondCard);

		// function do the cards match?
		console.log(firstCard.dataset.name, secondCard.dataset.name);
		// ^ checks to see if the dataset.name is calling the correct dataset
		if (firstCard.dataset.name === secondCard.dataset.name) {
			// If they do match, they stay flipped by removing the event listener from the cards so they cannot be clicked again
			firstCard.removeEventListener('click', flipCard);
			secondCard.removeEventListener('click', flipCard);
		} else {
			// if they do not match, they flip back, remove flip class
			// use setTimeout(function, milliseconds) to add delay
			setTimeout(() => {
				firstCard.classList.remove('flipped');
				secondCard.classList.remove('flipped');
			}, 1000);
		}
	}
}

cards.forEach((card) => card.addEventListener('click', flipCard));

/*
Links used to come up with code:

Java Script Operators - https://www.w3schools.com/js/js_operators.asp
Java script flipCard functionality - https://dev.to/santiagocodes/multi-faced-flip-card-with-a-click-part-3-javascript-2f7f
Java script Timing Events = https://www.w3schools.com/js/js_timing.asp



*/
