const choices = document.querySelectorAll('.choice');
const resultDiv = document.querySelector('.result');

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    let userChoice = choice.id;
    let computerChoice = getComputerChoice();
    let result = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
  });
});

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie!";
  } else if ((userChoice === "rock" && computerChoice === "scissors") ||
             (userChoice === "paper" && computerChoice === "rock") ||
             (userChoice === "scissors" && computerChoice === "paper")) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function displayResult(userChoice, computerChoice, result) {
  resultDiv.textContent = `You chose: ${userChoice.toUpperCase()} | Computer chose: ${computerChoice.toUpperCase()} | ${result}`;
}