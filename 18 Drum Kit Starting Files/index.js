var drumButton = document.querySelectorAll(".drum");
for (var i = 0; i < drumButton.length; i++) {
  drumButton[i].addEventListener("click", handleClick);
}
function handleClick() {
  var audio = new Audio("./sounds/tom-1.mp3");
  audio.play();
}
