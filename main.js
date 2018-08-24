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
    var guesses = 7
    var points = 0
    
    var hangman = ['-----------------------------',
    '              |              ',
    '              0              ',
    '             /               ',
    '             /|              ',
    '             /|\\             ',
    '             /               ',
    '             /\\              ']



    function getGuess() {
        $('#submit').on('click', function() {
            guess  = $('#guess').val()
            guess = guess.split("")
            console.log(guess)
            console.log(points)
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


        function lettrCheck(arr){
            $.each(arr, function(k,v) {
                if (guess == v) {
                    points += 1
                }else{
                    points
                }
            })
        }
    

        function wordBoard() {
            letters.forEach()
            console.log("_")
        }


    function drawPart(guesses) {
         switch(guesses){
         case 6:
         return hangman[0]
         case 5:
         return hangman[0] + "\n" + hangman[1] + "\n" + hangman[2]
         case 4:
         return hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[3]
         case 3:
         return hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[4]
         case 2:
         return hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[5]
         case 1:
         return hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[5] + "\n" + hangman[6]
         case 0:
         return hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[5] + "\n" + hangman[7]
         default:
         return hangman[0]
         }
    }

});

//********************************** */    
