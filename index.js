//DOM
const gameHistory = document.querySelector('.gameHistory');
const currentRoundWinner = document.querySelector('.current-round-winner');
const scorePlayer = document.querySelector('.scorePlayer');
const scoreComputer = document.querySelector('.scoreComputer');
const historySubTitle = document.querySelector('.historySubTitle');
const endGameDiv = document.querySelector('.endGame');
const gameImages = document.querySelector('.gameMenu');
const rockImage = document.querySelector('.rock');
const paperImage = document.querySelector('.paper');
const scissorsImage = document.querySelector('.scissors');
const btnR = document.querySelector('.btnR');
const newGameBtn = document.querySelector('.newGameBtn')

//EVENTS
let rockPick = rockImage.addEventListener('click', (e) => {
    playOneGame(items[0]);
})
let paperPick = paperImage.addEventListener('click', (e) => {
    playOneGame(items[1]);
})
let scissorsPick = scissorsImage.addEventListener('click', (e) => {
    playOneGame(items[2]);
})
let newGameBtnclick = newGameBtn.addEventListener('click', () => {
    restartGame();
})
let btnRclick = btnR.addEventListener('click', () => {
    restartGame();
})

//game logic
const items = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let result;
let round = 0;

let getComputerChoice = () => {
    let randomPick = Math.floor(Math.random() * 3);
    let computerChoice = items[randomPick];
    return computerChoice;
}

let playOneRound = (playerChoice, computerChoice) => {
    if (playerChoice === null || playerChoice === undefined) return "ERROR";
    if (playerChoice === items[0]) {
        switch (computerChoice) {
            case items[0]:
                result = "DRAW! ROCK = ROCK";
                break;
            case items[1]:
                computerScore += 1;
                result = "YOU LOST! ROCK < PAPER";
                break;
            case items[2]:
                playerScore += 1;
                result = "YOU WON! ROCK > SCISSORS";
                break;
            default:
                result = "ERROR";
                break;
        }
    }
    if (playerChoice === items[1]) {
        switch (computerChoice) {
            case items[0]:
                playerScore += 1;
                result = "YOU WON! PAPER > ROCK";
                break;
            case items[1]:
                result = "DRAW! PAPER = PAPER";
                break;
            case items[2]:
                computerScore += 1;
                result = "YOU LOST! PAPER < SCISSORS";
                break;
            default:
                result = "ERROR";
                break;
        }
    }
    if (playerChoice === items[2]) {
        switch (computerChoice) {
            case items[0]:
                computerScore += 1;
                result = "YOU LOST! SCISSORS < ROCK";
                break;
            case items[1]:
                playerScore += 1;
                result = "YOU WON! SCISSORS > PAPER";
                break;
            case items[2]:
                result = "DRAW! SCISSORS = SCISSORS";
                break;
            default:
                result = "ERROR";
                break;
        }
    }
    return result;
}

let restartGame = () => {
    let history = gameHistory.querySelectorAll('p');
    currentRoundWinner.textContent = "";
    round = 0;
    for (let i = 0; i < history.length; i++) {
        gameHistory.removeChild(history[i])
    }
    historySubTitle.textContent = 'START A NEW GAME BY SELECTIONG ROCK, PAPER OR SCISSORS'
    playerScore = 0;
    computerScore = 0;
    scoreComputer.textContent = `${computerScore} BATMAN`;
    scorePlayer.textContent = `PLAYER ${playerScore}`;
    gameImages.style.cssText = "display: block;"
    endGameDiv.style.cssText = "display: none;"
    btnR.style.cssText = "display: none;"
}

let endGame = (winner) => {
    historySubTitle.textContent = `${winner} SCORE: ${playerScore} - ${computerScore}`;
    newgame = true;
    endGameDiv.firstChild.nextSibling.textContent = `${winner} SCORE: ${playerScore} - ${computerScore}`;
    gameImages.style.cssText = "display: none;"
    endGameDiv.style.cssText = "display: block;"
    btnR.style.cssText = "display: none;"
}

let playOneGame = (playerChoice) => {
    playOneRound(playerChoice, getComputerChoice())
    round += 1;
    historySubTitle.textContent = 'NEW GAME'
    let history = document.createElement('p')
    history.textContent = `#${round} : ${result}`;
    currentRoundWinner.textContent = history.textContent;
    gameHistory.appendChild(history)
    gameHistory.insertBefore(history, gameHistory.children[0])
    scoreComputer.textContent = `${computerScore} BATMAN`;
    scorePlayer.textContent = `PLAYER ${playerScore}`;
    btnR.style.cssText = "display: block;"

    if (playerScore < 5 && computerScore === 5) {
        endGame('You LOST!', playerScore, computerScore)
    } else if (playerScore === 5 && computerScore < 5) {
        endGame('You WON!', playerScore, computerScore)
    }
}