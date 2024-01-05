
var started = false;
var level = 0;
function startover(){
    started = false;
    level = 0;
    usChoPatt =[];
    gamePatt =[];
}
$(document).keydown(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSeq();
        started = true;
      }
});
$("#level-title").click(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSeq();
        started = true;
      }
    });
let usChoPatt =[];
let gamePatt =[];
let btnClr = ["red", "blue", "green", "yellow"];

function nextSeq() {
    usChoPatt =[];
    level++;
$("#level-title").text("Level " + level);
let ranNum = Math.floor(Math.random()*4);
let ranChoClr = btnClr[ranNum];
gamePatt.push(ranChoClr);
$("#" + ranChoClr).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(ranChoClr);
console.log(gamePatt);
}

$(".btn").click(function() {
    var usChoClr = $(this).attr("id");
    usChoPatt.push(usChoClr);
    playSound(usChoClr);
    animate(usChoClr);
    checkAnswer(usChoPatt.length - 1);
    console.log(usChoPatt);
});

function checkAnswer(currentLevel) {
    if (gamePatt[currentLevel] === usChoPatt[currentLevel]){
    
    if (gamePatt.length === usChoPatt.length){
        setTimeout(function () {
            nextSeq();
          }, 1000);
    } 
    } else {
        console.log("wrong");
        $("#level-title").text("Game over click Here or Press any key to restart");
        setTimeout(function () {
            playSound("wrong");
          }, 200);
            $("body").addClass("game-over");
            setTimeout (function() {
                $("body").removeClass("game-over");
            }, 200);
            startover();
    }
}

function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
audio.play();
}
function animate(touch3) {
    $("." + touch3).addClass("pressed");
    setTimeout (function() {
        $("." + touch3).removeClass("pressed");
    }, 100);
}

