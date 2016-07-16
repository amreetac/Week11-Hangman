/*
Object: 
	game
Attributes:
	wordList // list of words to choose from 
	guessesAllowed // number of guesses allowed
	guessesSoFar // number of guesses taken for this game
	guesses // string of letters guessed
	word 	// word object to handle guesses and updates of the
			// word to be displayed
Methods:
	game(guessesAllowed) 	// Constructor to init attributes. 
							// Set current Word to a random word
							// in the word list
	play() 	// Play this game until the player uses up the number of 
			// guesses allowed
	takeAGuess() // Prompt User for a new letter to guess.  Call
				 // word.guessAletter() with the letter entered
				 // Returns true if found, otherwise false
*/

debugOn = true;

var inquirer = require('inquirer');
var word = require('./word.js');

function game(guessesAllow) {
	//attributes
	this.guessesAllow = guessesAllow;
	this.guessesSoFar = "";
	this.wrongGuesses = 0;
	this.Correct = 0;

	this.wordlist = ["javascript", "nodejs", "mysql", "mongodb", 
		"webdesign", "coder"];

	var random = Math.floor((Math.random()*(this.wordlist.length-1)));

	this.word = new word(this.wordlist[random]); 

	//methods
	this.play = function() { 
		console.log("NEW GAME!");

		var self = this;

    //RUNS INQUIRER AND ASKS THE USER A SERIES OF QUESTIONS WHOSE REPLIES ARE STORED WITHIN 
    //THE VARIABLE answers INSIDE OF THE .then STATEMENT.
    inquirer.prompt([{
    type: 'input',
    message: 'Hello, what is your guess?',
    name: 'letter'
    }]).then(function(input) {

    	if (debugOn == true) {
    		console.log("Then function from prompt");
    	}


    	// Check the index of the letter, if it is correct then play. 
  		if (self.guessesSoFar.indexOf(input.letter) >=0) {
  			self.play();
  		//console.log("letter1");
  			return;
  		}
  		//console.log("letter2");
  		self.guessesSoFar += input.letter;


  		var count= self.word.hasLetter(input.letter); //# times it found the letter

  		//self.Correct += count; 

  		self.word.display();

  		if (count > 0) {
  			self.Correct += count;
  		} else {
  			self.wrongGuesses++;
  		}

  		if (self.Correct == self.word.length) {
  			console.log ("You have won the game!");
  		}
  		else if (self.wrongGuesses < self.guessesAllow) {
  				self.play();
  			}
  		else {
  			console.log("You lost!");
  		}
        		
    })

}

	this.log = function() {
		console.log("game.guessesAllow: " + this.guessesAllow);
		console.log("game.guessesSoFar: " + this.guessesSoFar);
		console.log("game.wrongGuesses: "+ this.wrongGuesses);

		this.word.log();
	}
}



module.exports = game;
var g = new game(10);
//g.log();
g.play();
