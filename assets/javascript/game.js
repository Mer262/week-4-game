   // 2. The player will have to guess the answer, just like in Hangman.
   //   This time, though, the player will guess with numbers instead of letters. 

   //  3. Here's how the app works:
   //  * There will be four crystals displayed as buttons on the page.

   //  * The player will be shown a random number at the start of the game.

   //  * When the player clicks on a crystal, it will add a specific amount of 
   //   points to the player's total score. 
   //      * Your game will hide this amount until the player clicks a crystal.
   //      * When they do click one, update the player's score counter.

   //  * The player wins if their total score matches the random number from the 
   //   beginning of the game.

   //  * The player loses if their score goes above the random number.

   //  * The game restarts whenever the player wins or loses.
   //      * When the game begins again, the player should see a new random number. 
   //   Also, all the crystals will have four new hidden values. Of course, the 
   //   user's score (and score counter) will reset to zero.

   //  * The app should show the number of games the player wins and loses. 
   //   To that end, do not refresh the page as a means to restart the game.

   // * The random number shown at the start of the game should be between 19 - 120.
    
   // * Each crystal should have a random hidden value between 1 - 12.

$(document).ready(function() {
    // variable to store randomly-generated Number to Match
    var numToMatch;

    // variable to store random number assigned to each jewel
    var jewel1Value;
    var jewel2Value;
    var jewel3Value;
    var jewel4Value;

    // variable to store accumulating total
    var runningTotal;

    // variable to store number of user wins
    var numWins;

    // variable to store number of user losses
    var numLosses;


    // call function to reset the game
    function reset() {
        
        // generate a random number to match
        numToMatch = Math.floor((Math.random() * 120) + 19);

        // generate a random value for each jewel
        jewel1Value = Math.floor((Math.random() * 12) + 1);
        jewel2Value = Math.floor((Math.random() * 12) + 1);
        jewel3Value = Math.floor((Math.random() * 12) + 1);
        jewel4Value = Math.floor((Math.random() * 12) + 1);

        $("#wins").text(numLosses);
        $("#losses").text(numWins);
        $("#number-to-match").text(numToMatch);
        $("score").append(runningTotal)



    }
    
numWins = 4;
numLosses = 9;
numToMatch = 20;
runningTotal = 5;
$("#score").append(runningTotal)
console.log(runningTotal)

$("#wins").text(numLosses);
$("#losses").text(numWins);
$("#number-to-match").text(numToMatch);

});


