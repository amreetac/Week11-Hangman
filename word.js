var letter = require('./letter.js');

//Given a word to guess, this will initialize
// the current word and the word to be displayed
function word(displayedWord) {
	//attributes

	this.displayedWord = new Array(displayedWord.length); // something like '_ _ A _ _ L _'
	this.length = displayedWord.length;

	for (var i = 0; i < displayedWord.length; i++){
		this.displayedWord[i] = new letter(displayedWord[i]);
//		this.displayedWord[i] = currentWord[i];
	}

	// methods
	// Checks if the letter guessed is in the current word
	// and updates the word to display and displays it.
	// Returns true if found, otherwise false
	this.hasLetter = function(letter) {
		if (debugOn) { console.log("word.hasLetter()") };

		var count = 0;

		for (var i=0; i<this.length; i++) {
			if (this.displayedWord[i].isEqual(letter)) {
				count++;
			}
		}			

		return count;
	}

this.display = function() {
		if (debugOn) { console.log("this.display()"); }
		
		displayWord = "";
		for(var i=0; i<this.length; i++) {
			displayWord += this.displayedWord[i].charDisplayed;
		}

		console.log(displayWord);
	}

	this.log = function() {
		console.log("word.displayedWord: ");
		for (var i=0; i < this.length; i++) {
			this.displayedWord[i].log();
		}
	}
}

module.exports = word;
//var w = new word("WORD");
//w.log();