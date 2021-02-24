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
-once all the cards have been matched, dsiplay winner
    -if all cards have class 'flipped' diplay winnder
    =else do nothing

*/

const cards = document.querySelectorAll('.flashcard');
// console.log(cards);

let cardHasFlipped = false;
let firstCard;
let secondCard;
let flippedCards = [];
let numFlip = [];

function flipCard() {
	// console.log('Card has been clicked');
	// console.log(this);
	if (numFlip.length < 2) {
		this.classList.add('flipped');
		// ^ changes the class from 'flashcard' to 'Flashcard flipped'. Stlying will be set to the 'flipped' class.

		//checking if the card has flipped
		if (!cardHasFlipped) {
			// first click
			cardHasFlipped = true;
			firstCard = this;
			numFlip.push(1);
			// ^add 1 to the array numflip. Length of numFlip is being checked to make sure there isn't a tripple click
			// console.log(numFlip);
			// console.log(cardHasFlipped, firstCard);
			this.removeEventListener('click', flipCard);
			// ^removes the event listener so you can't double click a card
		} else {
			// second click
			cardHasFlipped = false;
			secondCard = this;
			numFlip.push(1);
			// ^add 1 to the array numflip. Length of numFlip is being checked to make sure there isn't a tripple click
			// console.log(numFlip);
			// console.log(secondCard);
			// function do the cards match?
			// console.log(firstCard.dataset.name, secondCard.dataset.name);
			cardMatch();
		}
	} else {
		return;
	}
}

function cardMatch() {
	if (firstCard.dataset.name === secondCard.dataset.name) {
		// If they do match, they stay flipped by removing the event listener from the cards so they cannot be clicked again
		// use setTimeout(function, milliseconds) to add delay to display 'you found a match'
		setTimeout(() => {
			firstCard.removeEventListener('click', flipCard);
			secondCard.removeEventListener('click', flipCard);
			alert('You found a match!');
			flippedCards.push(1);
			numFlip = [];
			// ^reset numflip so you can continue to click, otherwise you would not be able to click because the If statemnt on line 48 is stopping it after 2 clicks
			// console.log(numFlip);
			// console.log(flippedCards);
			winner();
		}, 100);
	} else {
		// if they do not match, they flip back, remove flip class
		// use setTimeout(function, milliseconds) to add delay
		setTimeout(() => {
			firstCard.addEventListener('click', flipCard);
			// ^add event listener back because removed after first click so you cannot double click
			firstCard.classList.remove('flipped');
			secondCard.classList.remove('flipped');
			numFlip = [];
			// ^reset numflip so you can continue to click, otherwise you would not be able to click because the If statemnt on line 48 is stopping it after 2 clicks
			// console.log(numFlip);
		}, 1000);
	}
}

function winner() {
	if (flippedCards.length > 9) {
		alert('Winner Winner Chicken Dinner!');
	}
}

// Shuffle cards
(function shuffleCards() {
	cards.forEach((card) => {
		let randomOrder = Math.floor(Math.random() * 20);
		card.style.order = randomOrder;
		// ^ sets the order of the cards to randomOrder which we defined in the previous line.
	});
})();
// ^ wrapping your function in () and then adding () after it will allow the function to be called first as the page loads.

cards.forEach((card) => card.addEventListener('click', flipCard));

/*
Links used to come up with code:

Java Script Operators - https://www.w3schools.com/js/js_operators.asp
Java script flipCard functionality - https://dev.to/santiagocodes/multi-faced-flip-card-with-a-click-part-3-javascript-2f7f
Java script Timing Events = https://www.w3schools.com/js/js_timing.asp
Java script flex order - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items
Java Script browser property - https://stackoverflow.com/questions/2422026/what-do-empty-parentheses-after-a-function-declaration-do-in-javascript
and https://developer.mozilla.org/en-US/docs/Glossary/IIFE



*/
