import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) return chalk.gray("It's a draw!");
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return chalk.green('You win!');
  } else {
    return chalk.red('Computer wins!');
  }
}

function startGame() {
  rl.question(chalk.cyan('Choose rock, paper, or scissors: '), (answer) => {
    const playerChoice = answer.toLowerCase();

    if (!choices.includes(playerChoice)) {
      console.log(chalk.red('Invalid choice. Try again.'));
      return startGame();
    }

    const computerChoice = getComputerChoice();
    console.log(chalk.yellow(`Computer chose: ${computerChoice}`));

    const result = determineWinner(playerChoice, computerChoice);
    console.log(result);

    rl.question(chalk.magenta('Play again? (y/n): '), (res) => {
      if (res.toLowerCase() === 'y') {
        startGame();
      } else {
        console.log(chalk.blue('Thanks for playing!'));
        rl.close();
      }
    });
  });
}

startGame();
