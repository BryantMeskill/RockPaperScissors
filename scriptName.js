function computerPlay() {
  x = "rock";
  y = "paper";
  z = "scissors";
  rng = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (rng === 1) {
    return x;
  } else if (rng === 2) {
    return y;
  } else {
    return z;
  }
}

let d = 0;
let j = 0;
let k = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`Draw, you both picked ${playerSelection}`);
    d++;
  } else if (playerSelection === "paper" && computerSelection === x) {
    console.log(
      `You win this round, ${playerSelection} beats ${computerSelection}!`
    );
    j++;
  } else if (playerSelection === "scissors" && computerSelection === y) {
    console.log(
      `You win this round, ${playerSelection} beats ${computerSelection}!`
    );
    j++;
  } else if (playerSelection === "rock" && computerSelection === z) {
    console.log(
      `You win this round, ${playerSelection} beats ${computerSelection}!`
    );
    j++;
  } else {
    console.log(
      `You lose this round, ${computerSelection} beats ${playerSelection}!`
    );
    k++;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    let playerSelection = prompt(
      "Please enter rock, paper, or scissors: "
    ).toLowerCase();
    computerPlay();
    playRound(playerSelection, computerSelection);
  }
  if (j > k) {
    console.log(
      `You won the series, with a final score of ${j} wins to ${k} losses with ${d} draw(s).`
    );
  } else {
    console.log(
      `You lost the series, with a final score of ${j} wins to ${k} losses with ${d} draw(s).`
    );
  }
}

game();
