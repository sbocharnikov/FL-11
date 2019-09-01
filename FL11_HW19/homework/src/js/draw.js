import rockImg from "../img/rock.jpg";
import paperImg from "../img/paper.jpg";
import scissorsImg from "../img/scissors.jpg";
export var youImg = document.getElementById("you-img");
export var computerImg = document.getElementById("computer-img");
var rockImgPath = "./img/rock.jpg";
var paperImgPath = "./img/paper.jpg";
var scissorsImgPath = "./img/scissors.jpg";
export var draw = function draw(yourFigure, computerFigure) {
  switch (yourFigure) {
    case "rock":
      youImg.src = rockImgPath;
      break;

    case "paper":
      youImg.src = paperImgPath;
      break;

    case "scissors":
      youImg.src = scissorsImgPath;
      break;
  }

  switch (computerFigure) {
    case "rock":
      computerImg.src = rockImgPath;
      break;

    case "paper":
      computerImg.src = paperImgPath;
      break;

    case "scissors":
      computerImg.src = scissorsImgPath;
      break;
  }
};
