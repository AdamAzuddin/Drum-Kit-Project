var numDrumButtons = document.querySelectorAll(".drum").length;

for (
  var index = 0;
  index < numDrumButtons;
  index++
) {
  document
    .querySelectorAll(".drum")[index]
    .addEventListener("click", function () {
      var audio = new Audio(`./sounds/crash.mp3`)
      audio.play()
    });
}



