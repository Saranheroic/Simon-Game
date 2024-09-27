var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var started = false;
var userClickedPattern = [];
var level = 0;
var ingame; 

//--------- Game start by pressing key----------------
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
      gameAudio()
      
    }
  });

//random sequence

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

 
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.volume=0.1;
    audio.play();
   
}

//-------------getting button class "btn" and set it to user userchosencolour and pushing it to userclickedpattern array-----------------
$(".btn").click(function(){
      
     var userChosenColour= $(this).attr("id");
     userClickedPattern.push(userChosenColour);
     checkAnswer(userClickedPattern.length-1);

    })

    //checking answers

    function checkAnswer(currentLevel) {

       
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    
          console.log("success");
         //--------------if user pattern correct wait for 1 second for the nextsequence------------------------
          
          if (userClickedPattern.length === gamePattern.length){
    
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    
        } else {

            // ---------------------------game over----------------------------
          $("body").addClass("game-over");
          var audio = new Audio('sounds/wrong.mp3');
          audio.volume=0.1;
     audio.play();
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
$("#level-title").text("Game Over, Press Any Key to Restart");
stopAudio();
startOver()

    
        }
    
    }

    var gameAudio=function(){

      ingame= new Audio("sounds/gameSound.mp3");
      ingame.volume = 0.2
      ingame.loop = true;
        ingame.play();
        
    };
    var stopAudio = function() {
      if (ingame) {
          ingame.pause(); // Pause the audio
          ingame.currentTime = 0; // Reset audio to the beginning
      }
  };
  

    // ------------------------game restart funciton---------------------------
    function startOver(){

        level = 0;
  gamePattern = [];
  started = false;
}
    




//----------------------------plays sound(we can make the below code shorter but i'm little bit lazy today sry!!!)--------------------------
$("#green").click(function(){
    $("#green").addClass("pressed");
    var audio = new Audio('sounds/green.mp3');
    audio.volume=0.1;
     audio.play();
    setTimeout(function(){
     $("#green").removeClass("pressed")
    },100)
 })
 
 
 $("#red").click(function(){
     $("#red").addClass("pressed");
     var audio = new Audio('sounds/red.mp3');
     audio.volume=0.1;
     audio.play();
     setTimeout(function(){
      $("#red").removeClass("pressed")
     },100)
  })
  
 
  $("#yellow").click(function(){
     $("#yellow").addClass("pressed");
     var audio = new Audio('sounds/yellow.mp3');
     audio.volume=0.1;
     audio.play();
     setTimeout(function(){
      $("#yellow").removeClass("pressed")
     },100)
  })
 
  
  $("#blue").click(function(){
     $("#blue").addClass("pressed");
     var audio = new Audio('sounds/blue.mp3');
     audio.volume=0.1;
     audio.play();
     setTimeout(function(){
      $("#blue").removeClass("pressed")
     },100)
  })
 