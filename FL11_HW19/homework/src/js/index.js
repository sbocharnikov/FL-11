import "../less/styles.less";
import { draw, youImg, computerImg } from "./draw.js";
var buttons = document.getElementsByTagName("button");
var rockBtn = buttons[0];
var paperBtn = buttons[1];
var scissorsBtn = buttons[2];
var resetBtn = buttons[3];
var dashImgPath = "./img/dash.jpg";
var resultArea = document.getElementById("result-area");
var finalResultArea = document.getElementById("final-result-area");
var roundCount = 1;
var yourWins = 0;
var computerWins = 0;

rockBtn.onclick = function() {
  model("rock");
};

paperBtn.onclick = function() {
  model("paper");
};

scissorsBtn.onclick = function() {
  model("scissors");
};

var model = function model(yourFigure) {
  var figures = ["rock", "paper", "scissors"];
  var random = Math.floor(Math.random() * 3);
  var computerFigure = figures[random];
  draw(yourFigure, computerFigure);

  if (roundCount <= 3) {
    if (
      (yourFigure === "rock" && computerFigure === "scissors") ||
      (yourFigure === "paper" && computerFigure === "rock") ||
      (yourFigure === "scissors" && computerFigure === "paper")
    ) {
      yourWins++;
      resultArea.innerHTML = "Round "
        .concat(roundCount, ", ")
        .concat(yourFigure, " vs ")
        .concat(computerFigure, ", You've WON!");
    }

    if (
      (yourFigure === "rock" && computerFigure === "paper") ||
      (yourFigure === "paper" && computerFigure === "scissors") ||
      (yourFigure === "scissors" && computerFigure === "rock")
    ) {
      computerWins++;
      resultArea.innerHTML = "Round "
        .concat(roundCount, ", ")
        .concat(yourFigure, " vs ")
        .concat(computerFigure, ", You've LOST!");
    }

    if (
      (yourFigure === "rock" && computerFigure === "rock") ||
      (yourFigure === "paper" && computerFigure === "paper") ||
      (yourFigure === "scissors" && computerFigure === "scissors")
    ) {
      resultArea.innerHTML = "Round "
        .concat(roundCount, ", ")
        .concat(yourFigure, " vs ")
        .concat(computerFigure, ", it's a draw!");
    }

    roundCount++;
  }

  if (roundCount > 3) {
    if (yourWins > computerWins) {
      finalResultArea.innerHTML = "Final winner is you!";
    }

    if (yourWins < computerWins) {
      finalResultArea.innerHTML = "Final winner is computer!";
    }

    if (yourWins === computerWins) {
      finalResultArea.innerHTML = "Final result is draw";
    }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
};

resetBtn.onclick = function() {
  youImg.src = dashImgPath;
  computerImg.src = dashImgPath;
  rockBtn.removeAttribute("disabled");
  paperBtn.removeAttribute("disabled");
  scissorsBtn.removeAttribute("disabled");
  resultArea.innerHTML = "";
  finalResultArea.innerHTML = "";
  roundCount = 1;
  yourWins = 0;
  computerWins = 0;
};
