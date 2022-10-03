let items = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;
let result;

let getComputerChoice = () => {
    let randomPick = Math.floor(Math.random() * 3);
    computerChoice = items[randomPick];
    console.info(`Computer: ${computerChoice}`)
    return computerChoice;
}

let getPlayerChoice = () => {
    playerChoice = prompt("Pick an item:", "Rock, Paper, Scissors");
    console.info(`Player: ${playerChoice}`)
    return playerChoice;
}


let playOneRound = (playerchoice, computerchoice) => {

    if (playerchoice.localeCompare(items[0], 'en', { sensitivity: 'base' }) === 0) {
        switch (computerchoice) {
            case items[0]:
                result = "Draw! Rock = Rock"
                break;
            case items[1]:
                result = "Computer Wins! Rock < Paper"
                break
            case items[2]:
                result = "Player Wins! Rock > Scissors"
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
                break;
            case items[1]:
                result = "Draw! Paper = Paper"
                break
            case items[2]:
                result = "Computer Wins! Paper < Scissors"
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
                break;
            case items[1]:
                result = "Player Wins! Scissors > Paper"
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

function game() {
    playOneRound(getPlayerChoice(), getComputerChoice());
    if (result === "Player input was fucking wrong or something else happend!"){
        console.error(result);
    }else{
        console.log(result);
    }
}