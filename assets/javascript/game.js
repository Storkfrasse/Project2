const choices = document.querySelectorAll(".choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");
const comment = document.getElementById("comment"); // Added comment element
const resetButton = document.getElementById("reset-button");
let playerWins = 0;
let computerWins = 0;

// Add a click event listener to each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.getAttribute("data-choice");
        playerChoiceDisplay.textContent = playerChoice;
        const computerChoice = getComputerChoice();
        computerChoiceDisplay.textContent = computerChoice;
        determineWinner(playerChoice, computerChoice); // Determine the winner
        console.log("Player choice: " + playerChoice);
        console.log("Computer choice: " + computerChoice);
    });
});

// Function to generate a random choice for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        console.log("It's a tie!");
        resultText.textContent = "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        console.log("You Win!");
        resultText.textContent = "You Win!";
        playerWins++; // Increment player's win counter
    } else {
        console.log("Computer Win!");
        resultText.textContent = "Computer Win";
        computerWins++; // Increment computer's win counter
    }

    // Update the win counters in the result text
    resultText.textContent += ` (Player: ${playerWins} | Computer: ${computerWins})`;
}



// Get reference to the HTML elements
const rulesButton = document.querySelector(".rules-button"); // Use .querySelector to select by class
const rulesPopup = document.getElementById("rules-popup");
const closeRulesButton = document.getElementById("close-rules");

// Add an event listener to open rules pop-up when the "Rules" button is pressed
rulesButton.addEventListener("click", () => {
    rulesPopup.style.display = "block";
});

// Add an event listener to close the rules pop-up
closeRulesButton.addEventListener("click", () => {
    rulesPopup.style.display = "none";
});

// Add an event listener to reset the game
resetButton.addEventListener("click", () => {
    // Reset player and computer win counters
    playerWins = 0;
    computerWins = 0;

    // Reset the result text
    resultText.textContent = "(Player: 0 | Computer: 0)";

    // Reset player and computer choices
    playerChoiceDisplay.textContent = "";
    computerChoiceDisplay.textContent = "";
});
