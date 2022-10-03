let items = ["rock", "paper", "scissors"]
let computerChoice;

function getComputerChoice(){
    let randomPick = Math.floor(Math.random()*3)
    computerChoice = items[randomPick]
    return computerChoice
}