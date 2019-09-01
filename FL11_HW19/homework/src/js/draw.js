import rockImg from "../img/rock.jpg";
import paperImg from "../img/paper.jpg";
import scissorsImg from "../img/scissors.jpg";
export const youImg = document.getElementById('you-img');
export const computerImg = document.getElementById('computer-img');
const rockImgPath = './img/rock.jpg';
const paperImgPath = './img/paper.jpg';
const scissorsImgPath = './img/scissors.jpg';

export const draw = (yourFigure, computerFigure) => {
    switch (yourFigure) {
      case 'rock':
        youImg.src = rockImgPath;
        break;
      case 'paper':
        youImg.src = paperImgPath;
        break;
      case 'scissors':
        youImg.src = scissorsImgPath;
        break;
    }
  
    switch (computerFigure) {
      case 'rock':
        computerImg.src = rockImgPath;
        break;
      case 'paper':
        computerImg.src = paperImgPath;
        break;
      case 'scissors':
        computerImg.src = scissorsImgPath;
        break;
    }
  };