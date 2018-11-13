
            var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'u', 'v', 'w', 'x', 'y', 'z'];
            var lettersToGuess = null;
            var guessesSoFar = [];
            var guessesLeft = 9;
            var wins = 0;
            var losses = 0;
            //_____________________________________________

            // function to capture letters pressed
            document.onkeyup = function (event) {
                // reduce guess by 1
                guessesLeft--;

                var userGuessLower = String.fromCharCode(event.which).toLowerCase();


                guessesSoFar.push(userGuessLower);

                updateGuessesLeft();
                updateGuessesSoFar();

                // if the letter is a match
                if (userGuessLower === letterToGuess) {
                    wins++;
                    document.querySelector("#wins").innerHTML = wins;
                    reset();
                } 
                if (guessesLeft === 0) {
                    losses++;
                    document.querySelector("#losses").innerHTML = losses;
                    reset();
                }
            };

            //_____________________________________________

            var updateGuessesLeft = function () {
                document.querySelector("#guesses-left").textContent = guessesLeft;
            };

            var updateLetterToGuess = function () {
                letterToGuess = choices[Math.floor(Math.random() * choices.length)];
            };

            var updateGuessesSoFar = function () {
                document.querySelector("#guesses-so-far").textContent = guessesSoFar.join(" , ");
            };

             //_____________________________________________

            var reset = function () {
                guessesLeft = 9;
                wins = 0;
                losses = 0;
                guessedLetters = [];
                updateLetterToGuess();
                updateGuessesLeft();
                updateGuessesSoFar();
            };
            
            updateLetterToGuess();
            updateGuessesLeft();
            reset();
 