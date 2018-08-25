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
    guess = ""
    var hangman = ['-----------------------------',
    '              |              ',
    '              0              ',
    '             /               ',
    '             /|              ',
    '             /|\\            ',
    '             /               ',
    '              /\\            ']



    function getGuess() {
        $('#submit').on('click', function() {
            guess  = ($('#guess').val()).split("")
            lettrCheck(word, guess)
            console.log("guesses " + guesses)
            console.log("points " + points)
            drawPart(guesses)
        })
    }
        function getWord() {
            letters = words[Math.floor(Math.random() * words.length)]
            word = letters.split("")
            console.log(word)
        }

        function lettrCheck(arr, ch){
            temp = points
            $.each(arr, function(k,v) {
                if ( ch == v) {
                    points += 1
                    board.splice(k, 1, guess[0])
                    $('#dash').text(board)
                    console.log(board)
                }else{
                    points
                }
            })
            if (temp == points) {
                guesses -= 1
            } else {
                guesses
            }
        }
        function wordBoard() {
            var i;
                for (i = 0; i < letters.length; i++) { 
                bd = $('#dash').append('_')
            }
            board = (bd.val()).split("")
            console.log(board)
         }

        function drawPart(guesses) {
            switch(guesses){
            case 6:
            return $('#hangbox').text(hangman[0])
            case 5:
            return $('#hangbox').text(hangman[0] + "\n" + hangman[1] + "\n" + hangman[2])
            case 4:
            return $('#hangbox').text(hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[3])
            case 3:
            return $('#hangbox').text(hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[4])
            case 2:
            return $('#hangbox').text(hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[5])
            case 1:
            return $('#hangbox').text(hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[5] + "\n" + hangman[6])
            case 0:
            return $('#hangbox').text(hangman[0] + "\n" + hangman[1]+ "\n" + hangman[2] + "\n" + hangman[5] + "\n" + hangman[7])
            default:
            return $('#hangbox').text(hangman[0])
                     }
        }

    console.log('*************************************************')
    getWord()
    wordBoard()
    getGuess()
    drawPart(guesses)
    console.log('*************************************************')

});

//********************************** */    
