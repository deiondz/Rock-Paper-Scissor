// Scoreboard UI

const userName = document.getElementById("userName");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");

// Result print

const resultPrint = document.getElementById("resultPrint");

// User choice
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

// Reset score
const reset = document.getElementById("reset");

// Game Setup
const options = ["Rock", "Paper", "Scissor"];
let aiScore = 0;
let userPoint = 0;

let userPick;
function rpsGame() {
  let ai = options[Math.floor(Math.random() * 3)];
  if (userPick == "Rock" && ai == "Scissor") {
    resultPrint.innerHTML = `You won! Computer picked ${ai.toLowerCase()}.`;
    win();
    userPoint++;
    userScore.innerHTML = userPoint;
  } else if (userPick == "Rock" && ai == "Paper") {
    resultPrint.innerHTML = `You lost! Computer picked ${ai.toLowerCase()}.`;
    loss();
    aiScore++;
    computerScore.innerHTML = aiScore;
  } else if (userPick == "Rock" && ai == "Rock") {
    draw();
    resultPrint.innerHTML = `It's a draw! Computer picked ${ai.toLowerCase()}.`;
    aiScore++;
    userPoint++;
    computerScore.innerHTML = aiScore;
    userScore.innerHTML = userPoint;
  } else if (userPick == "Scissor" && ai == "Rock") {
    loss();
    resultPrint.innerHTML = `You lost! Computer picked ${ai.toLowerCase()}.`;
    aiScore++;
    computerScore.innerHTML = aiScore;
  } else if (userPick == "Scissor" && ai == "Scissor") {
    draw();
    resultPrint.innerHTML = `It's a draw! Computer picked ${ai.toLowerCase()}.`;
    aiScore++;
    userPoint++;
    computerScore.innerHTML = aiScore;
    userScore.innerHTML = userPoint;
  } else if (userPick == "Scissor" && ai == "Paper") {
    win();
    resultPrint.innerHTML = `You won! Computer picked ${ai.toLowerCase()}.`;
    userPoint++;
    userScore.innerHTML = userPoint;
  } else if (userPick == "Paper" && ai == "Scissor") {
    loss();
    resultPrint.innerHTML = `You lost! Computer picked ${ai.toLowerCase()}.`;
    aiScore++;
    computerScore.innerHTML = aiScore;
  } else if (userPick == "Paper" && ai == "Paper") {
    draw();
    resultPrint.innerHTML = `It's a draw! Computer picked ${ai.toLowerCase()}.`;
    aiScore++;
    userPoint++;
    computerScore.innerHTML = aiScore;
    userScore.innerHTML = userPoint;
  } else if (userPick == "Paper" && ai == "Rock") {
    win();
    resultPrint.innerHTML = `You won! Computer picked ${ai.toLowerCase()}.`;
    userPoint++;
    userScore.innerHTML = userPoint;
  }
}

rock.addEventListener("click", function () {
  userPick = "Rock";
  rpsGame();
});
paper.addEventListener("click", function () {
  userPick = "Paper";
  rpsGame();
});
scissor.addEventListener("click", function () {
  userPick = "Scissor";
  rpsGame();
});

reset.addEventListener("click", function () {
  userPoint = 0;
  aiScore = 0;
  resultPrint.classList.remove("lost");
  resultPrint.classList.remove("draw");
  resultPrint.classList.remove("won");

  userScore.innerHTML = userPoint;
  computerScore.innerHTML = aiScore;
  resultPrint.innerHTML = "Pick your move wisely!";
});

function win() {
  resultPrint.classList.add("won");
  resultPrint.classList.remove("lost");
  resultPrint.classList.remove("draw");
}

function loss() {
  resultPrint.classList.add("lost");
  resultPrint.classList.remove("won");
  resultPrint.classList.remove("draw");
}

function draw() {
  resultPrint.classList.add("draw");
  resultPrint.classList.remove("won");
  resultPrint.classList.remove("lost");
}
