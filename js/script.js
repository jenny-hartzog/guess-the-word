const guessedLetters = document.querySelector(".guessed-letters");
const guessBtn = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingSpan = document.querySelector("span");
const messages = document.querySelector(".message");
const playAgainBtn = document.querySelector(".play-again");

//Starter word
const word = "magnolia";

//function to add placeholders for each letter
const placeholders = function(word) {
    const placeholderLetters = [];
    for(const letter of word) {
        console.log(letter);
        placeholderLetters.push( "●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholders(word);

//Event Listener for button
guessBtn.addEventListener("click", function(e){
    e.preventDefault();
    const guess = guessInput.value;
    console.log(guess);
    guessInput.value = "";
})
