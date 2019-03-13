var computerScore = 0;
var playerScore = 0;
var ties = 0;

function computerPlay() {
	let number = Math.floor(Math.random() * 3 + 1);
	if (number == 1)
		return "Rock";
	else if(number == 2)
		return "Paper";
	else return "Scissors";
}
function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	let winner = 0;
	switch(playerSelection){
		case "rock": {
			if(computerSelection=="scissors")
				winner = 1;
			else if(computerSelection=="paper")
				winner = 2;
			else
				winner = 0;
			break;
		}
		case "paper": {
			if(computerSelection=="rock")
				winner = 1;
			else if (computerSelection=="scissors")
				winner = 2;
			else
				winner = 0;
			break;
		}
		case "scissors":{
			if(computerSelection == "paper")
				winner = 1;
			else if(computerSelection == "rock")
				winner = 2;
			else
				winner = 0;
			break;
		}
	}
	if (winner == 1)
		return "You Win!"
	else if(winner == 2)
		return "You Lose!"
	else return "Tie!"
}

function game() {
	for (let i = 0; i < 5; i++){
		const playerSelection = computerPlay();
		const computerSelection = computerPlay();
		console.log("Player selection " + playerSelection);
		console.log("Computer selection " + computerSelection);
		console.log(playRound(playerSelection, computerSelection));
	}
}

function myFunction() {
  var x = document.getElementById("1").value;
  document.getElementById("demo").innerHTML = x;
}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    console.log(document.getElementById("rock").innerHTML);
  });


