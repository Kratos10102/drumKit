
//DETECTING mouse clicking

let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

  var buttunInnerHTML = this.innerHTML;

  buttonAnimation(buttunInnerHTML)

  switch (buttunInnerHTML) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "j":
      var kick = new Audio("sounds/kick-bass.wav");
      kick.play();
    break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    default: console.log(buttunDrum)

  }



})}


//DETECTING keyboard clicking

  document.addEventListener("keydown", function(event) {

    switch (event.code) {
      case "KeyW":

      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
       buttonAnimation("w");
      break;

      case "KeyA":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      buttonAnimation("a");
      break;

      case "KeyS":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      buttonAnimation("s");
      break;

      case "KeyD":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      buttonAnimation("d");
      break;

      case "KeyJ":
      var kick = new Audio("sounds/kick-bass.wav");
      kick.play();
      buttonAnimation("j");
      break;

      case "KeyK":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      buttonAnimation("k");
      break;

      case "KeyL":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      buttonAnimation("l");
      break;

      default: console.log(buttunDrum)
    }
  });

//this apllies the animation to the buttun pressed
function buttonAnimation(currentkey){

var activeButton = document.querySelector("." + currentkey)
activeButton.classList.add("pressed")

//this is inside function removing the styles
setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);

}
