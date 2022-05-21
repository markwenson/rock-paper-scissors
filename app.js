const choices = ["rock", "paper", "scissors"];
let roundWinnerArr = [];

function resetGame() {
    roundWinnerArr = [];
    document.querySelector('text').textContent = "";
    document.querySelector('.winner').textContent = "";
    document.querySelector('.you-score').textContent = "0";
    document.querySelector('.comp-score').textContent = "0";
    document.querySelector('.tie-score').textContent = "0";
    document.querySelector('text.player').textContent = "";
    document.querySelector('text.computer').textContent = "";
    document.querySelector('text.winner-results').textContent = "";
    document.querySelector('.reset').style.display = "none"
}

function startGame() {
const playerBtns = document.querySelectorAll('[data-selection]');
playerBtns.forEach(playerBtn => {
    playerBtn.addEventListener('click', () => {
        const selectedItem = playerBtn.dataset.selection;
        playRound(selectedItem);
    } )});
};

function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) {
        return;
    }
    const computerChoice = computerSelection();
    const winner = roundWinner(playerChoice, computerChoice);
    roundWinnerArr.push(winner);
    tallyWins();
    displayRoundWinner(playerChoice, computerChoice, winner);
    wins = checkWins();
    if (wins == 5) {
        matchEnd();
    }
};

function displayRoundWinner(playerChoice, computerChoice, winner) {
    document.querySelector('text.player').textContent = `You chose ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}.`;
    document.querySelector('text.computer').textContent = `Computer chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`;
    if (winner == "Player") {
        document.querySelector('text.winner-results').textContent = "You won this round."
    } else if (winner == "Computer") {
        document.querySelector('text.winner-results').textContent = "Computer wins this round."
    } else {
        document.querySelector('text.winner-results').textContent = "It's a tie."
    }
}

function matchEnd() {
    let playerCount = roundWinnerArr.filter(item => item == "Player").length;
    if (playerCount == 5) {
        document.querySelector('.winner').textContent = "You won! Congratulations!"
    } else {
        document.querySelector('.winner').textContent = "Aww, better luck next time."
    }
    document.querySelector('.reset').style.display = "block"
}

function checkWins() {
    let playerCount = roundWinnerArr.filter(item => item == "Player").length;
    let compCount = roundWinnerArr.filter(item => item == "Computer").length;
    return Math.max(playerCount, compCount);
}

function tallyWins() {
    let playerCount = roundWinnerArr.filter(item => item == "Player").length;
    let compCount = roundWinnerArr.filter(item => item == "Computer").length;
    let tieCount = roundWinnerArr.filter(item => item == "Tie").length;
    document.querySelector('.you-score').textContent = playerCount;
    document.querySelector('.comp-score').textContent = compCount;
    document.querySelector('.tie-score').textContent = tieCount;
}

function computerSelection() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function roundWinner(player, comp) {
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
};




startGame();