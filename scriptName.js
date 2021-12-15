const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const x = "rock";
const y = "paper";
const z = "scissors";
let d = 0;
let j = 0;
let k = 0;

function computerPlay() {
  //math.floor returns largest int <= a given number
  //math.random() multiplied by max + min (3 + 1)
  //max being highest possible result
  rng = Math.floor(Math.random() * 3 + 1);
  if (rng === 1) {
    return x;
  } else if (rng === 2) {
    return y;
  } else {
    return z;
  }
}

rockBtn.addEventListener("click", () => {
  let computerSelection = computerPlay();
  playRound("rock", computerSelection);
});

paperBtn.addEventListener("click", () => {
  let computerSelection = computerPlay();
  playRound("paper", computerSelection);
});

scissorsBtn.addEventListener("click", () => {
  let computerSelection = computerPlay();
  playRound("scissors", computerSelection);
});

const resultsBox = document.querySelector(".results");
const roundWinner = document.createElement("div");
const tally = document.createElement("div");
tally.classList.add("div");
roundWinner.classList.add("div");

//variable incrementing used for tallying a winner and draw(s).
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner.textContent = `Draw, you both picked ${playerSelection}!`;
    resultsBox.appendChild(roundWinner);
    d++;
    tally.textContent = `Current score: ${j} wins, ${k} losses, ${d} draw(s).`;
    resultsBox.appendChild(tally);
  } else if (playerSelection === "paper" && computerSelection === x) {
    roundWinner.textContent = `You win this round, ${playerSelection} beats ${computerSelection}!`;
    resultsBox.appendChild(roundWinner);
    j++;
    tally.textContent = `Current score: ${j} wins, ${k} losses, ${d} draw(s).`;
    resultsBox.appendChild(tally);
  } else if (playerSelection === "scissors" && computerSelection === y) {
    roundWinner.textContent = `You win this round, ${playerSelection} beats ${computerSelection}!`;
    resultsBox.appendChild(roundWinner);
    j++;
    tally.textContent = `Current score: ${j} wins, ${k} losses, ${d} draw(s).`;
    resultsBox.appendChild(tally);
  } else if (playerSelection === "rock" && computerSelection === z) {
    roundWinner.textContent = `You win this round, ${playerSelection} beats ${computerSelection}!`;
    resultsBox.appendChild(roundWinner);
    j++;
    tally.textContent = `Current score: ${j} wins, ${k} losses, ${d} draw(s).`;
    resultsBox.appendChild(tally);
  } else {
    roundWinner.textContent = `You lose this round, ${computerSelection} beats ${playerSelection}!`;
    resultsBox.appendChild(roundWinner);
    k++;
    tally.textContent = `Current score: ${j} wins, ${k} losses, ${d} draw(s).`;
    resultsBox.appendChild(tally);
  }
  const verdict = document.createElement("h1");
  verdict.classList.add("verdict");
  if (j >= 5) {
    resultsBox.removeChild(roundWinner);
    resultsBox.removeChild(tally);
    verdict.textContent = "Congratulations, you win! Thanks for playing.";
    resultsBox.appendChild(verdict);
  } else if (k >= 5) {
    resultsBox.removeChild(roundWinner);
    resultsBox.removeChild(tally);
    verdict.textContent =
      "Better luck next time, you lose! Thanks for playing.";
    resultsBox.appendChild(verdict);
  }
}
