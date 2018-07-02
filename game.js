// create a secret number
var secret = 4;

// ask user for their guess
var guess = prompt("Guess a number: ");

// check if the guess is right
// CAN'T use "===" because guess is a string while secret is a number, they do not triple equal to each other
if (guess == secret) {
	alert("You got it right!");
}

// convert guess into a number using Number()
var guessNum = Number(guess);
if (guessNum === secret) {
	alert("Congratulations!");
}
// check if guess is too high
else if (guessNum >= secret) {
	alert("Too high! Refresh to guess again.");
}
// if it's too low
else {
	alert("Too low! Refresh to guess again.");
}