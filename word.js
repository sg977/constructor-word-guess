//import { SSL_OP_NO_COMPRESSION } from "constants";

//An array of new Letter objects representing the letters of the underlying word
//A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js)
// that displays the character or an underscore and concatenate those together.
//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require("./letter");

var Word = function(myGuess) {
    this.myGuess = myGuess;
    this.letters = [];
    this.underscores = [];
    //need use split to add letters in the array  
    this.splitWord = function() {
        this.letters = this.myGuess.split("");
        //console.log(this.letters);
        //determine number of underscores needed based on length of this.letters arrray in the word constructor 
        //numberUnderscoresNeeded = this.letters.length;
        console.log("Underscores " + numberUnderscoresNeeded);
        //create for loop that pushes the underscores to the this.underscores array in Word constructor 
        for(var i=0; i<this.letters.length; i++) {
            this.underscores.push("_ ");
        }
        //use the .join method to join each underscore that we pushed to the this.underscores array by a space
        console.log(this.underscores.join(" "));
    }

    this.generateLetters = function() {
        for (i=0; i<this.letters.length; i++){
            this.letters[i] = new Letter (this.letters[i]);
            this.letters[i].displayCharacter();
        }
        
    }

}

//testing
// var someWord = new Word ("Coco");
// someWord.splitWord();
// someWord.generateLetters(); 


module.exports = Word; 