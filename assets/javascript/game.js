//Initialize all to zero
var totalGuesses = 9;
var RemGuesses = 9;
var lettersGuessed = [];
var letterGuess = null;
var totalWins = 0;
var totalLosses = 0;
//Alphabet
var psychChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Provide a random letter from alphabet
var psychGuess = psychChoices[Math.floor(Math.random() * psychChoices.length)];

var updateLetterGuess = function() {
    this.letterGuess = this.psychChoices[Math.floor(Math.random() * this.psychChoices.length)];
};

//updates remaining guesses
var updateRemGuesses = function() {

    document.querySelector('#RemGuesses').innerHTML = "Guesses left: " + RemGuesses;
};
var updateGuessesSoFar = function() {
    //the user has tried -- then display it as letters separated by commas. 
    document.querySelector('#lettersGuessed').innerHTML = "Your Guesses so far: " + lettersGuessed.join(', ');
};

// resets everything
var reset = function() {
    totalGuesses = 9;
    RemGuesses = 9;
    lettersGuessed = [];

    updateLetterGuess();
    updateRemGuesses();
    updateGuessesSoFar();
}

updateLetterGuess();
updateRemGuesses();


//When key is released it becomes the users guess letter
document.onkeyup = function(event) {
    RemGuesses--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    lettersGuessed.push(userGuess);
    updateRemGuesses();
    updateGuessesSoFar();

    if (RemGuesses > 0) {
        if (userGuess == letterGuess) {
            totalWins++;
            document.querySelector('#totalWins').innerHTML = "Wins: " + totalWins;
            alert("Great!!! you are meant to be a psychic!");
            reset();
        }
    } else if (RemGuesses == 0) {

        totalLosses++;
        document.querySelector('#totalLosses').innerHTML = "Losses: " + totalLosses;
        alert("Sorry, you are not psychic, maybe next time");

        reset();
    }
}













;
