// Define the words for the game
const words = [
  "love",
  "html",
  "echo",
  "epic",
  "lion",
  "icon",
  "gama",
  "beta",
  "male",
  "club",
  "cafe",
  "cash",
  "cent",
  "city",
  "coco",
  "race",
  "bond",
  "chat",
  "cold",
  "dead",
  "easy",
  "hard",
  "evil",
  "good",
  "girl",
  "giga",
  "mega",
  "hajj",
  "omra",
  "tech",
  "jeep",
  "rock",
  "take",
  "risk",
  "game",
];

const refreshButton = document.querySelector("#refresh-button");
// Select a random word from the array
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Create an array to store the correct guesses
let correctGuesses = [];

// Create an array to store the incorrect guesses
let incorrectGuesses = [];

// Create a variable to keep track of the number of incorrect guesses
let numIncorrectGuesses = 0;

// Create a function to update the game board
function updateGameBoard() {
  // Clear the game board
  document.getElementById("word").innerHTML = "";

  // Display the correct guesses on the game board
  for (let i = 0; i < selectedWord.length; i++) {
    let letter = selectedWord.charAt(i);
    if (correctGuesses.includes(letter)) {
      document.getElementById("word").innerHTML += letter;
    } else {
      document.getElementById("word").innerHTML += "_";
    }
    document.getElementById("word").innerHTML += " ";
  }

  // Display the incorrect guesses
  document.getElementById("guesses").innerHTML = incorrectGuesses.join(", ");

  // Display the number of incorrect guesses remaining
  document.getElementById("num-guesses").innerHTML = `attempts: ${
    6 - numIncorrectGuesses
  }`;
}

// Create a function to handle a correct guess
function handleCorrectGuess(letter) {
  correctGuesses.push(letter);
  updateGameBoard();
  checkGameStatus();
}

// Create a function to handle an incorrect guess
function handleIncorrectGuess(letter) {
  incorrectGuesses.push(letter);
  numIncorrectGuesses++;
  updateGameBoard();
  checkGameStatus();
}

// Create a function to check the game status
function checkGameStatus() {
  // Check for a win
  if (correctGuesses.length === selectedWord.length) {
    document.getElementById("message").innerHTML = "You win! My Friend 😃";
    document.getElementById("message").style.color = "green";
    document.getElementById("letters").style.display = "none";
  }

  // Check for a loss
  if (numIncorrectGuesses === 6) {
    document.getElementById("message").innerHTML =
      "oops, You lose! Let's Try Again ,dude🙃";
    document.getElementById("message").style.color = "red";
    document.getElementById("letters").style.display = "none";
  }
}

// Add event listener for letter buttons
document.querySelectorAll(".letter").forEach((button) => {
  button.addEventListener("click", () => {
    let letter = button.innerHTML.toLowerCase();
    if (selectedWord.includes(letter)) {
      handleCorrectGuess(letter);
    } else {
      handleIncorrectGuess(letter);
    }
    button.disabled = true;
  });
});

// Initialize the game board
updateGameBoard();

// Refresh the page
refreshButton.addEventListener("click", () => {
  location.reload();
});
