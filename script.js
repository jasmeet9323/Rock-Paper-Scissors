var nGames = 0;
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
	
	if(nGames == 5){
		document.getElementById("demo").innerHTML = "";

		if(playerScore > computerScore){
			document.getElementById("demo").innerHTML = "Congratulations! You Win.";
		} else if(playerScore < computerScore){
			document.getElementById("demo").innerHTML = "Sorry! You Lose.";
		} else {
			document.getElementById("demo").innerHTML = "Alas! It's a tie";
		}

		document.getElementById("demo").innerHTML = "Starting new game.";
		computerScore =0;
		playerScore = 0;
		ties = 0;
		nGames = 0;
	}

	nGames++;
	if (winner == 1){
		playerScore++;
		return "You Win! <br /> Your score:"+ playerScore +"<br /> Computer Score:"+computerScore +"<br /> Ties:"+ties;
	}
	else if(winner == 2){
		computerScore++;
		return "You Lose! <br /> Your score:"+ playerScore +"<br /> Computer Score:"+computerScore +"<br /> Ties:"+ties;
	}
	else {
		ties++;
		return "Tie!\n <br /> Your score:"+ playerScore +"<br /> Computer Score:"+computerScore +"<br />Ties:"+ties;
	}

}

function selectRock(pSelect) {
	var pSelect = document.getElementById("rock").value;
	var cSelect = computerPlay();
	var result = playRound( pSelect, cSelect);
	document.getElementById("demo").innerHTML = result;
}
function selectPaper(pSelect) {
	var pSelect = document.getElementById("paper").value;
	var cSelect = computerPlay();
	var result = playRound( pSelect, cSelect);
	document.getElementById("demo").innerHTML = result;
}
function selectScissors(pSelect) {
	var pSelect = document.getElementById("scissors").value;
	var cSelect = computerPlay();
	var result = playRound( pSelect, cSelect);
	document.getElementById("demo").innerHTML = result;
}



document.addEventListener("DOMContentLoaded", function(event) {
	console.log(document.getElementById("rock").innerHTML);
});

document.addEventListener("DOMContentLoaded", function(event) {
	console.log(document.getElementById("paper").innerHTML);
});
