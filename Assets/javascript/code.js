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

            // functions to updateGuessesLeft, updateLetterToGuess and updateGuessesSoFar
            // updateGuessesLeft
            var updateGuessesLeft = function () {
                // grab HTML element and set equal to the guessesLeft
                // then display the guessesLeft on page
                document.querySelector("#guesses-left").innerHTML = guessesLeft;
            };

            // updateLetterToGuess
            var updateLetterToGuess = function () {
                // take random letterToGuess and assign it based on a random generator that only looks at choices of correct answers
                letterToGuess = choices[Math.floor(Math.random() * choices.length)];
            };

            // updateGuessesSoFar
            var updateGuessesSoFar = function () {
                // Take guessed letters and display it separaeted by a comma on the page
                document.querySelector("#guesses-so-far").innerHTML = guessesSoFar.join(", ");
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

            // function that captures a key event 
            document.onkeyup = function (event) {
                // reduce guess by 1
                guessesLeft--;

                // * important to lowercase letter pressed
                // this makes the letter lowercase
                var letter = String.fromCharCode(event.which).toLowerCase();

                // to add the guess to the guessedLetters Array
                guessesSoFar.push(letter);

                // run the update functions
                updateGuessesLeft();
                updateGuessesSoFar();

                // Check to see if the letter is a match
                if (letter === letterToGuess) {

                    // if matched, count as win and update HTML to display the win
                    wins++;
                    document.querySelector("#wins").innerHTML = wins;

                    // Reset the game
                    reset();
                }

                // If out of guesses then,
                if (guessesLeft === 0) {

                    // then the user lost and the HTML needs to update to display the loss
                    losses++;
                    document.querySelector("#losses").innerHTML = losses;

                    // reset game
                    reset();
                }
            };