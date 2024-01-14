let buttonColours = ["red", "blue", "green", "yellow"];
const gamePattren = [];
const userClickedPattren= [];
let gameStarted = false;
let level = 0;

$("body").keydown(()=> {
 if(!gameStarted) {
$("#level-title").text("Level " + level);
 nextSequence();
 gameStarted = true;
 }
});

$(".btn").click(function() {
  let userChosenColour = $(this).attr("id" );
  userClickedPattren.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattren.length - 1);
 })

function checkAnswer(currentLevel) {
 if(gamePattren[currentLevel] === userClickedPattren[currentLevel])  {
  console.log("success")
 } else if(userClickedPattren.length === gamePattren.length){
 setTimeout(function (){
  nextSequence();
 }, 1000);
 }
  else {
  let audio = new Audio ("./sounds/wrong.mp3") ;
  audio.play();
 }
}

function nextSequence() {

  userClickedPattren= [];

  level++;
  $("h1").text("level " + level);
 let randomNum = Math.floor(Math.random() * 4);
 let randomChosenColour = buttonColours[randomNum];
 gamePattren.push(randomChosenColour);
 console.log(gamePattren);

 $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

 playSound(randomChosenColour);

};


function playSound(name){
let audio = new Audio("./sounds/" + name + ".mp3");
 audio.play();
}

function animatePress(currentColour) {
 $("#" + currentColour).addClass("pressed");

 setTimeout(()=> {
  $("#" + currentColour).removeClass("pressed")
 },100)
};




