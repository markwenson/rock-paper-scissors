//Rock, Paper, Scissors game

// 5 Rounds

// Create a string array of choices for Rock, Paper, Scissors
const choices = ["rock", "paper", "scissors"];
//Create a string array we can populate with winners for each round
const winners = [];


//This function starts the game
function startGame() {
    //Loops the game 5 times
    for(i = 1; i <= 5; i++){
    playRound(i);
    }
    //Calls the function logWinners() to log the winner after round 5
    logWinners();
}
//Function to play a round
function playRound(round) {
    //Stores the returned value of playerChoice() to a variable
    const playerSelection = playerChoice();
    //Stores the returned value of computerChoice() to a variable
    const computerSelection = computerChoice();
    //Passes an argument containing the returned values of the player and computer's selection 
    //It then stores the returned value of the round's winner to a variable 
    const winner = checkRoundWinner(playerSelection, computerSelection);
    //The push() method adds item to the winners[] array
    winners.push(winner);
    //Passes arguments to the logRound() function
    logRound(playerSelection, computerSelection, winner, round);
}
//Function to return the value of a player's choice
function playerChoice() {
    //get input from a player through a prompt
    let input = prompt("Type Rock, Paper, or Scissors");
    //when user clicks cancel, prompt will continue
    while(input === null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    //input to lowercase
    input = input.toLowerCase();
    //Passes an argument to validateInput() to check if input is usable
    let check = validateInput(input);
    //While loop runs when validateInput() returns false
    while (check == false) {
        input = prompt("It is not case-sensitive but spelling needs to be exact. Type Rock, Paper, or Scissors");
        while(input === null) {
            input = prompt("It is not case-sensitive but spelling needs to be exact. Type Rock, Paper, or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}
//Function to validate if input is within the array of choices
function validateInput(choice){
    if (choices.includes(choice)) {
        return true;
    }
    else {
        return false;
    }
}
//Function to return the value of the computer's choice
function computerChoice() {
    //computer choice
    //from random generated number using math random function
    //use math floor to round the number below
    //then multiply by number of choices to get position in choices[] array
    //returns choices[0,1,or 2]. Each number corresponds to the position in the choices[] array
    return choices[Math.floor(Math.random()*choices.length)];
}
//Function to return the round's winner
function checkRoundWinner(player,comp) {
    if (player === comp) {
        return "Tie";
    }
    else if (
        (player === "rock" && comp === "scissors") || 
        (player === "paper" && comp === "rock") || 
        (player === "scissors" && comp === "paper")) {
        return "Player";
    }
    else {
        return "Computer";
    }
}
//Function to log winners after 5 rounds
function logWinners(){
    //Reads the winners[] array and filter items with the string "Player" in it. 
    //The length property returns the length of an array
    //It then stores the value to a variable
    //let playerWins = winners.filter(playerW).length;
    //function playerW(item) {return item == "Player"};
    //This is an arrow function of the function declaration above
    let playerWins = winners.filter((item) => item == "Player").length;
    //Reads the winners[] array and filter items with the string "Computer" in it
    let computerWins = winners.filter((item) => item == "Computer").length;
    //Reads the winners[] array and filter items with the string "Tie" in it
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player wins: ", playerWins);
    console.log("Computer wins: ", computerWins);
    console.log("Ties: ", ties);
}
//Function to log details of each round. This function is called inside the playRound() function
function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round: ", round);
    console.log("Player chose ", playerChoice);
    console.log("Computer chose ", computerChoice);
    console.log(winner, "won the round.");
    console.log("-----------------------------------");
}


