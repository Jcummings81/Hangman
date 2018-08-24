//Variables
// words
// guess


//Functions
    //Get word -- Default Array? Gamemaster created?
    //Get user guess
    //    -user inputs(text-box) letter and that letter is stored
    //compare user guess
    //    -take stored variable and iterate through each letter in word
    //    -if a match a '_' is replaced with the letter
    //    -otherwise a new body part is drawn and number of guesses is dropped by 1
    //Draw part
    //    -draws a newline? of hanging man


$(document).ready(function () {

    var words = ["jalepeno", "bladerunner", "bison", "screwdriver", "cat"]
    var letters = []
    var guesses = 6
    var points = 0
    var hangman = ['-----------------------------',
    '              |              ',
    '              0              ',
    '             /               ',
    '             /|              ',
    '             /|\             ',
    '             /               ',
    '             /\              ']

    
   function getGuess() {
    $('#guess').on('change', function() {
        guess = $('#guess').val()
        guess = guess.split("")
        if (guess.length > 1)
         return console.log("Invalid Entry, Please Type a Single Letter")
         else
         return guess  
    })
}



    function getWord() {
    letters = arrWord(words[Math.floor(Math.random() * words.length)])
    console.log(letters)
    return letters
    }
    
    function arrWord(wrd) {
        return wrd.split("")
        
    }
   function lettrCheck(){
    $.each(letters, function(k,v) {
        if (guess == v) {
             points++
        }
        console.log(points); 
      });
    }
    
    
    function wordBoard() {
        letters.forEach()
            console.log("_")
    }

    function drawPart(guesses) {
         switch(guesses){
         case 6:
         return console.log(hangman[0])
         case 5:
         return console.log(hangman[0] + "\n" + hangman[1] + "\n" + hangman[2])
         case 4:
         return console.log(hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[3])
         case 3:
         return console.log(hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[4])
         case 2:
         return console.log(hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[5])
         case 1:
         return console.log(hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[5] + "\n" + hangman[6])
         case 1:
         return console.log(hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[5] + "\n" + hangman[7])
         default:
         return
         }
    }

    $('#submit').on('click', function (){

        getGuess()
        getWord()
        lettrCheck()
            })

//********************************** */    
    })
