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

    var words = ['jalepeno', 'bladerunner', 'bison', 'screwdriver', 'cat']
    var letters = []
    var guess = null


    function getWord() {
    return words[Math.floor(Math.random() * words.length)]
    }
    
    function arrWord(wrd) {
        letters = wrd.split('')
        return letters
    }
   
    function lettrCheck(arr){
    $.each(arr, function(i, value){
        switch(value) {
            case guess:
              return console.log('worked')
            default:
            return console.log('nope')
        }
        })
    }




//********************************** */
guess = "a"
lettrCheck((arrWord(getWord())))
    
})
