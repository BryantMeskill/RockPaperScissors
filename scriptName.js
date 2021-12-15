const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const ROCK_STR = "rock";
const PAPER_STR = "paper";
const SCISSORS_STR = "scissors";
let drawTally = 0;
let winTally = 0;
let lossTally = 0;

function computerPlay() {
  //math.floor returns largest int <= a given number
  //math.random() multiplied by max + min (3 + 1)
  //max being highest possible result
  let rng = Math.floor(Math.random() * 3 + 1);
  if (rng === 1) {
    return ROCK_STR;
  } else if (rng === 2) {
    return PAPER_STR;
  } else {
    return SCISSORS_STR;
  }
}

rockBtn.addEventListener("click", () => {
  const computerSelection = computerPlay();
  playRound("rock", computerSelection);
});

paperBtn.addEventListener("click", () => {
  const computerSelection = computerPlay();
  playRound("paper", computerSelection);
});

scissorsBtn.addEventListener("click", () => {
  const computerSelection = computerPlay();
  playRound("scissors", computerSelection);
});

const resultsBox = document.querySelector(".results");
const roundWinner = document.createElement("div");
const tally = document.createElement("div");
tally.classList.add("outputTally");
roundWinner.classList.add("outputTally");

//variable incrementing used for tallying a winner and draw(s).
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner.textContent = `Draw, you both picked ${playerSelection}!`;
    resultsBox.appendChild(roundWinner);
    drawTally++;
    tally.textContent = `Current score: ${winTally} wins, ${lossTally} losses, ${drawTally} draw(s).`;
    resultsBox.appendChild(tally);
  } else if (playerSelection === "paper" && computerSelection === ROCK_STR) {
    roundWinner.textContent = `You win this round, ${playerSelection} beats ${computerSelection}!`;
    resultsBox.appendChild(roundWinner);
    winTally++;
    tally.textContent = `Current score: ${winTally} wins, ${lossTally} losses, ${drawTally} draw(s).`;
    resultsBox.appendChild(tally);
  } else if (
    playerSelection === "scissors" &&
    computerSelection === PAPER_STR
  ) {
    roundWinner.textContent = `You win this round, ${playerSelection} beats ${computerSelection}!`;
    resultsBox.appendChild(roundWinner);
    winTally++;
    tally.textContent = `Current score: ${winTally} wins, ${lossTally} losses, ${drawTally} draw(s).`;
    resultsBox.appendChild(tally);
  } else if (playerSelection === "rock" && computerSelection === SCISSORS_STR) {
    roundWinner.textContent = `You win this round, ${playerSelection} beats ${computerSelection}!`;
    resultsBox.appendChild(roundWinner);
    winTally++;
    tally.textContent = `Current score: ${winTally} wins, ${lossTally} losses, ${drawTally} draw(s).`;
    resultsBox.appendChild(tally);
  } else {
    roundWinner.textContent = `You lose this round, ${computerSelection} beats ${playerSelection}!`;
    resultsBox.appendChild(roundWinner);
    lossTally++;
    tally.textContent = `Current score: ${winTally} wins, ${lossTally} losses, ${drawTally} draw(s).`;
    resultsBox.appendChild(tally);
  }
  //KNOWN ISSUE: You can continue to click an option until the message displayed is changed to a win or loss.
  const verdict = document.createElement("h1");
  verdict.classList.add("verdict");
  if (winTally >= 5) {
    resultsBox.removeChild(roundWinner);
    resultsBox.removeChild(tally);
    verdict.textContent = "Congratulations, you win! Thanks for playing.";
    resultsBox.appendChild(verdict);
    rockBtn.classList.add("disable");
    paperBtn.classList.add("disable");
    scissorsBtn.classList.add("disable");
  } else if (lossTally >= 5) {
    resultsBox.removeChild(roundWinner);
    resultsBox.removeChild(tally);
    verdict.textContent =
      "Better luck next time, you lose! Thanks for playing.";
    resultsBox.appendChild(verdict);
    rockBtn.classList.add("disable");
    paperBtn.classList.add("disable");
    scissorsBtn.classList.add("disable");
  }
}
