window.addEventListener('load', init);

let words = [
	'word',
	'sad',
	'nod',
	'knot',
	'write',
	'right',
	'root',
	'sympathy',
	'empathy',
	'wrong',
	'jump',
	'jam',
	'bread',
	'breed',
	'lock',
	'luck',
	'lick',
	'kick',
	'tumble',
	'symbol',
	'jingle',
	'jungle'
];
const levels = {
	level1: 10,
	level2: 8,
	level3: 5,
	level4: 3,
	level5: 2
};
let currentLevel = levels.level1;
let score = 0;
let time = currentLevel;
let isPlaying;

// Elements

const timeLeft = document.getElementById('time');
const yourScore = document.getElementById('score');
const currentWord = document.getElementById('currentWord');
const input = document.getElementById('input');
const message = document.getElementById('message');

//Init

function init() {
	//Focus on input
	input.focus();
	//Inpt Event
	input.addEventListener('input', startMatch);
	//Show the word.
	showWord(words);
	//Set the countdown
	setInterval(countdown, 1000);
	//Check game status
	setInterval(checkGameStatus, 50);
}
//Make countdown function

function countdown() {
	if (time > 0) {
		//Decrement time
		time--;
	} else if (time === 0) {
		//Game over
		isPlaying = false;
	}
	//Output the time.
	timeLeft.innerHTML = time;
}

//Function to show random word from words[].

function showWord(words) {
	const randIndex = Math.floor(Math.random() * words.length);

	currentWord.innerHTML = words[randIndex];
}
//Making startMatch function
function startMatch() {
	if (matchWords()) {
		isPlaying = true;
		input.value = '';
		showWord(words);
		time = currentLevel + 1;
		score++;
	}
	if (score === -1) {
		yourScore.innerHTML = 0;
		// } else if (score === 5) {
		// 	currentLevel = levels.level2;
		// } else if (score === 8) {
		// 	currentLevel = levels.level3;
		// } else if (score === 10) {
		// 	currentLevel = levels.level4;
		// } else if (score > 11) {
		// 	currentLevel = levels.level5;
	} else {
		yourScore.innerHTML = score;
	}
	switch (score) {
		case 5:
			currentLevel = levels.level2;
			break;
		case 8:
			currentLevel = levels.level3;
			break;
		case 10:
			currentLevel = levels.level4;
			break;
		case 11:
			currentLevel = levels.level5;
			break;
	}
}
//Make the matchWords function
function matchWords() {
	if (input.value === currentWord.innerHTML) {
		message.innerHTML = 'Correct!!!';
		return true;
	} else {
		return false;
	}
}
function checkGameStatus() {
	if (!isPlaying && time === 0) {
		message.innerHTML = 'Game Over!!!';
		score = -1;
	}
}
