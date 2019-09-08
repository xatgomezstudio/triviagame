// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


setTimeout(timeUp, 1000 * 60);


function timeUp() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");


}  

    function roundComplete() {

        // First, log an initial status update in the console
        // telling us how many wins, losses, and guesses are left.
        console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);
      
        // HTML UPDATES
        // ============
      
        // Update the HTML to reflect the new number of guesses.
        document.getElementById("guesses-left").innerHTML = numGuesses;
      
        // This will print the array of guesses and blanks onto the page.
        document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
      
        // This will print the wrong guesses onto the page.
        document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
      
        // If our Word Guess string equals the solution.
        // (meaning that we guessed all the letters to match the solution)...
        if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
      
          // Add to the win counter
          winCounter++;
      
          // Give the user an alert
          alert("You win!");
      
          // Update the win counter in the HTML
          document.getElementById("win-counter").innerHTML = winCounter;
      
          // Restart the game
          startGame();
        }
      
        // If we've run out of guesses
        else if (numGuesses === 0) {
      
          // Add to the loss counter
          lossCounter++;
      
          // Give the user an alert
          alert("You lose");
      
          // Update the loss counter in the HTML
          document.getElementById("loss-counter").innerHTML = lossCounter;
      
          // Restart the game
          startGame();
      
        }
      
      }