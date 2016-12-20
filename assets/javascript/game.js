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

       // variable to store accumulating total
       var runningTotal;

       // variable to store number of user wins
       var numWins = 0;
       $("#wins").text(numWins);

       // variable to store number of user losses
       var numLosses = 0;
       $("#losses").text(numLosses);


       // function to reset the game
       function reset() {
           runningTotal = 0
               // generate a random number to match
           numToMatch = Math.floor((Math.random() * 120) + 19);

           // generate a random value for each jewel
           // setting attribute for elements on the DOM
           $("#crystal-1").attr("data-crystal-value", Math.floor((Math.random() * 12) + 1));
           $("#crystal-2").attr("data-crystal-value", Math.floor((Math.random() * 12) + 1));
           $("#crystal-3").attr("data-crystal-value", Math.floor((Math.random() * 12) + 1));
           $("#crystal-4").attr("data-crystal-value", Math.floor((Math.random() * 12) + 1));

           // write the values to each panel/well
           $("#score").text("Your Current Score:")
           $("#number-to-match").text(numToMatch);


       }

       function checks() {
           $("#score").text("Your Current Score: " + runningTotal);
           if (runningTotal === numToMatch) {
               alert("You win!");
               numWins++;
               $("#wins").text(numWins);
               reset();
           } else if (runningTotal >= numToMatch) {
               alert("You lose!!");
               numLosses++;
               $("#losses").text(numLosses);
               reset();
           } else {
               return
           }
       }

       // call function to reset game
       reset()

       $("#number-to-match").text(numToMatch);

       $(".crystal").click(function(event) {
           console.log(event.target.getAttribute("data-crystal-value"));
           runningTotal += parseInt(event.target.getAttribute("data-crystal-value")); 
           checks();
       });

   });
