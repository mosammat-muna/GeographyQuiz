var questionDiv = document.getElementById('question');
var answer = document.getElementById('answer');
var btn = document.getElementById('btn');
var displayresult = document.getElementById('displayresult');
var startBtn = document.getElementById('start');
var questionP = document.getElementById('q')
var score = document.getElementById('score');
var scoreNb = 0;
var number = 0;

var displayresultheader = document.getElementById('displayresultheader');
var header = displayresultheader.querySelector('h2');
var correction = document.getElementById('correction');

var ask = [
	{ question: 'Which is the largest country in the world?',
		answer: 'russia' },
	{ question: 'Which country has the largest population in the world?',
		answer: 'china' },
	{ 
		question: 'Which is the hottest continent on Earth?',
        answer: 'africa',
	}
];

function startGame() {
	questionDiv.style.display = 'block';
	answer.style.display = 'block';
	btn.style.display = 'block';
	startBtn.style.display = 'none';
	questionP.innerHTML = ask[number].question;
	score.innerHTML = scoreNb;
}

function nextQuestion() {
	if(answer.value === ask[number].answer) {
		scoreNb++;
		number++;
		score.innerHTML = scoreNb;
		questionP.innerHTML = ask[number].question;
		answer.value = '';
	} else if(number === 2) {
		finalQuestion();
	} else {
		number++;
		questionP.innerHTML = ask[number].question;
		answer.value = '';
	}
}

function finalQuestion() {
	if(answer.value === 'Blue') {
		scoreNb++;
		endGame();
	} else {
		endGame();
	}
}

function endGame() {
    displayresult.style.display = 'block';
    header.innerHTML = 'Results';
	correction.innerHTML = 'You answer ' + scoreNb + ' correct'; 
}

function resetGame() {
	displayresult.style.display = 'none';
	questionDiv.style.display = 'none';
	answer.style.display = 'none';
	btn.style.display = 'none';
	startBtn.style.display = 'block';
	answer.value = '';
	scoreNb = 0;
	number = 0;
}
