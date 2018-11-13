            // a list of psychic's correct answers 
            var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'u', 'v', 'w', 'x', 'y', 'z'];

            // lettersToGuess variable will be randomly assigned one of the letter choices
            var lettersToGuess = null;


            // an array to hold what has been guessed
            var guessesSoFar = [];

            // to hold the count down of guesses
            var guessesLeft = 9;

            // A Counter for wins/losses
            var wins = 0;
            var losses = 0;


            //  3 functions updateGuessesLeft, updateLetterToGuess and updateGuessesSoFar

            var updateGuessesLeft = function () {
                document.querySelector("#guesses-left").textContent = guessesLeft;
            };

            // updateLetterToGuess
            var updateLetterToGuess = function () {
                letterToGuess = choices[Math.floor(Math.random() * choices.length)];
            };

            // updateGuessesSoFar
            var updateGuessesSoFar = function () {
                document.querySelector("#guesses-so-far").textContent = guessesSoFar.join(" , ");
            };


            //  a function to be called when reset takes place
            var reset = function () {
                guessesLeft = 9;
                guessedLetters = [];
                updateLetterToGuess();
                updateGuessesLeft();
                updateGuessesSoFar();
            };

            // Execute on page load/ refresh page
            updateLetterToGuess();
            updateGuessesLeft();

 
            // function to capture letters pressed
            document.onkeyup = function (event) {
                // reduce guess by 1
                guessesLeft--;

                // makes letter pressed lowercase
                var userGuessLower = String.fromCharCode(event.which).toLowerCase();

                // to add the guess to the guessedLetters Array
                guessesSoFar.push(userGuessLower);

                // run the update functions
                updateGuessesLeft();
                updateGuessesSoFar();

                // Check to see if the letter is a match
                if (userGuessLower === letterToGuess) {

                    // if matched, count as win and update HTML to display the win
                    wins++;
                    document.querySelector("#wins").innerHTML = wins;

                    // Reset the game
                    reset();
                } 
                if (guessesLeft === 0) {

                    // then the user lost and the HTML needs to update to display the loss
                    losses++;
                    document.querySelector("#losses").innerHTML = losses;

                    // reset game
                    reset();
                }
            };