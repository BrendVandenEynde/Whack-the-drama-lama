var clicks = 0;

function onClick() {
  clicks += 1;
  var clicksText = clicks + " " + (clicks === 1 ? "time" : "times");
  document.getElementById("clicks").innerHTML = clicksText;
  audio.currentTime = 0;
  audio.play();

};

const audio = new Audio("./audio/scream.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});