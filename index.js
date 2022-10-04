const items = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;
let result;
let round = 0;
let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let randomPick = Math.floor(Math.random() * 3);
    computerChoice = items[randomPick];
    // console.info(`Computer: ${computerChoice}`)
    return computerChoice;
}

let getPlayerChoice = () => {
    playerChoice = prompt("Pick an item:", "Rock, Paper, Scissors");
    // console.info(`Player: ${playerChoice}`)
    return playerChoice;
}

let restartGame = () => {
    console.warn(`Restart The game`);
    playerScore = 0;
    computerScore = 0;
}

let endGame = () => {
    console.warn('Run game(); in console to start a new game')
    playerScore = 0;
    computerScore = 0;
}


let playOneRound = (playerchoice, computerchoice) => {
    if (playerchoice === null || playerchoice === undefined) {
        result = "Player input was fucking wrong or something else happend!"
        return result;
    } else if (playerchoice.localeCompare(items[0], 'en', { sensitivity: 'base' }) === 0) {
        switch (computerchoice) {
            case items[0]:
                result = "Draw! Rock = Rock"
                break;
            case items[1]:
                result = "Computer Wins! Rock < Paper"
                computerScore += 1;
                break
            case items[2]:
                result = "Player Wins! Rock > Scissors"
                playerScore += 1
                break
            default:
                result = "Something went wrong!"
                break;
        }
        return result;
    } else if (playerchoice.localeCompare(items[1], 'en', { sensitivity: 'base' }) === 0) {
        switch (computerchoice) {
            case items[0]:
                result = "Player Wins! Paper > Rock"
                playerScore += 1
                break;
            case items[1]:
                result = "Draw! Paper = Paper"
                break
            case items[2]:
                result = "Computer Wins! Paper < Scissors"
                computerScore += 1;
                break
            default:
                result = "Something went wrong!"
                break;
        }
        return result;
    } else if (playerchoice.localeCompare(items[2], 'en', { sensitivity: 'base' }) === 0) {
        switch (computerchoice) {
            case items[0]:
                result = "Computer Wins! Scissors < Rock"
                computerScore += 1;
                break;
            case items[1]:
                result = "Player Wins! Scissors > Paper"
                playerScore += 1
                break
            case items[2]:
                result = "Draw! Scissors = Scissors"
                break
            default:
                result = "Something went wrong!"
                break;
        }
        return result;
    } else {
        result = "Player input was fucking wrong or something else happend!"
    }
}

let game = () => {
    for (let i = 1; i <= 5; i++) {
        playOneRound(getPlayerChoice(), getComputerChoice());

        if (playerScore > computerScore && i >= 5) {
            console.log(`Round: ${round = i}`);
            console.log(result);
            console.warn(`Player wins the game with: ${playerScore} : ${computerScore}`)
            endGame();
            i = 5;
        } else if (playerScore < computerScore && i >= 5) {
            console.log(`Round: ${round = i}`);
            console.log(result);
            console.warn(`Computer wins the game with: ${computerScore} : ${playerScore}`)
            endGame();
            i = 5;
        } else if (playerScore === computerScore && i >= 5) {
            console.log(`Round: ${round = i}`);
            console.log(result);
            console.warn(`It's a draw, final score: ${computerScore} : ${playerScore}`)
            endGame();
            i = 5;
        } else if (playerScore < 5 && computerScore < 5 && i < 5) {
            if (result === "Player input was fucking wrong or something else happend!" || result === "Something went wrong!") {
                console.log(`Round: ${round = i}`);
                console.warn(result);
                restartGame();
                i = 0;
            } else {
                console.log(`Round: ${round = i}`);
                console.log(result);
                console.log(`Player: ${playerScore} / Computer: ${computerScore}`)
            }
        } else {
            console.warn("Something is fucked up")
        }
    }
}