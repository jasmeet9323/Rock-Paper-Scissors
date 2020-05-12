$(document).ready(function () {
  var nGames = 0;
  var scores = { computerScore: 0, playerScore: 0, ties: 0 };

  function computerPlay() {
    let number = Math.floor(Math.random() * 3 + 1);
    if (number == 1) return "rock";
    else if (number == 2) return "paper";
    else return "scissors";
  }

  function compileMessage(winner, scores) {
    var message;
    if (winner == 1) {
      scores.playerScore++;
      message =
        "You Win! <br /><br /> Your score: " +
        scores.playerScore +
        "<br /> Computer Score: " +
        scores.computerScore +
        "<br /> Ties: " +
        scores.ties;
    } else if (winner == 2) {
      scores.computerScore++;
      message =
        "You Lose! <br /><br /> Your score: " +
        scores.playerScore +
        "<br /> Computer Score: " +
        scores.computerScore +
        "<br /> Ties: " +
        scores.ties;
    } else {
      scores.ties++;
      message =
        "Tie!\n <br /><br /> Your score: " +
        scores.playerScore +
        "<br /> Computer Score: " +
        scores.computerScore +
        "<br />Ties: " +
        scores.ties;
    }
    return message;
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let winner = 0;
    switch (playerSelection) {
      case "rock": {
        if (computerSelection == "scissors") winner = 1;
        else if (computerSelection == "paper") winner = 2;
        else winner = 0;
        break;
      }
      case "paper": {
        if (computerSelection == "rock") winner = 1;
        else if (computerSelection == "scissors") winner = 2;
        else winner = 0;
        break;
      }
      case "scissors": {
        if (computerSelection == "paper") winner = 1;
        else if (computerSelection == "rock") winner = 2;
        else winner = 0;
        break;
      }
    }
    nGames++;
    //console.log(nGames);

    //console.log(winner, scores.playerScore, scores.computerScore, scores.ties);
    var ans = compileMessage(winner, scores);
    //console.log(scores.playerScore, scores.computerScore, scores.ties);

    if (nGames == 5) {
      var result;
      if (scores.playerScore > scores.computerScore) {
        result = "Congratulations! You Win.";
      } else if (scores.playerScore < scores.computerScore) {
        result = "Sorry! You Lose.";
      } else {
        result = "Alas! It's a tie";
      }
	  document.querySelector("#result").innerHTML = result;
      setTimeout(function () {
        document.querySelector("#result").innerHTML = "";
      }, 1000);

      scores.computerScore = 0;
      scores.playerScore = 0;
      scores.ties = 0;
      nGames = 0;
    }
    return ans;
  }

  function selectRock(pSelect) {
    var pSelect = document.getElementById("rock").value;
    var cSelect = computerPlay();
    var result = playRound(pSelect, cSelect);
    document.getElementById("ranking").innerHTML = result;
  }

  function selectPaper(pSelect) {
    var pSelect = document.getElementById("paper").value;
    var cSelect = computerPlay();
    var result = playRound(pSelect, cSelect);
    document.getElementById("ranking").innerHTML = result;
  }

  function selectScissors(pSelect) {
    var pSelect = document.getElementById("scissors").value;
    var cSelect = computerPlay();
    var result = playRound(pSelect, cSelect);
    document.getElementById("ranking").innerHTML = result;
  }

  const rockButton = document.querySelector("#rock");
  rockButton.addEventListener("click", selectRock);

  const paperButton = document.querySelector("#paper");
  paperButton.addEventListener("click", selectPaper);

  const scissorsButton = document.querySelector("#scissors");
  scissorsButton.addEventListener("click", selectScissors);
});
