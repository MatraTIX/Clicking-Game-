var timeLeft = 10; // in seconds
var button = document.getElementById("target");
var width = window.innerWidth - button.offsetWidth;
var height = window.innerHeight - button.offsetHeight;
var count = 0;
var timerStarted = false;

function randomPosition() {
	button.style.top = Math.random() * height + "px";
	button.style.left = Math.random() * width + "px";
}

function updateTimer() {
	timeLeft--;
	if (timeLeft <= 0) {
		clearInterval(timer);
		alert("You Lose!");
		setTimeout(function () {
			location.reload();
		}, 2000);
	} else {
		document.getElementById("timer").innerHTML = timeLeft;
	}
}

function startTimer() {
	timerStarted = true;
	timer = setInterval(updateTimer, 1000);
}

button.addEventListener("click", function () {
	count++;
	randomPosition();
	document.getElementById("click-counter").innerHTML = count;

	if (!timerStarted) {
		startTimer();
	}

	if (count >= 20) {
		clearInterval(timer);
		alert("You Win!");
		setTimeout(function () {
			location.reload();
		}, 2000);
	}
});