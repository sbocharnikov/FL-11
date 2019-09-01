import '../less/styles.less';
import { draw, youImg, computerImg } from './draw.js';

const buttons = document.getElementsByTagName('button');
const rockBtn = buttons[0];
const paperBtn = buttons[1];
const scissorsBtn = buttons[2];
const resetBtn = buttons[3];
const dashImgPath = './img/dash.jpg';
const resultArea = document.getElementById('result-area');
const finalResultArea = document.getElementById('final-result-area');
let roundCount = 1;
let yourWins = 0;
let computerWins = 0;

rockBtn.onclick = () => {
  model('rock');
};

paperBtn.onclick = () => {
  model('paper');
};

scissorsBtn.onclick = () => {
  model('scissors');
};

const model = yourFigure => {
  const figures = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * 3);
  const computerFigure = figures[random];
  draw(yourFigure, computerFigure);

  if (roundCount <= 3) {
    if (
      (yourFigure === 'rock' && computerFigure === 'scissors') ||
      (yourFigure === 'paper' && computerFigure === 'rock') ||
      (yourFigure === 'scissors' && computerFigure === 'paper')
    ) {
      yourWins++;
      resultArea.innerHTML = `Round ${roundCount}, ${yourFigure} vs ${computerFigure}, You've WON!`;
    }
    if (
      (yourFigure === 'rock' && computerFigure === 'paper') ||
      (yourFigure === 'paper' && computerFigure === 'scissors') ||
      (yourFigure === 'scissors' && computerFigure === 'rock')
    ) {
      computerWins++;
      resultArea.innerHTML = `Round ${roundCount}, ${yourFigure} vs ${computerFigure}, You've LOST!`;
    }
    if (
      (yourFigure === 'rock' && computerFigure === 'rock') ||
      (yourFigure === 'paper' && computerFigure === 'paper') ||
      (yourFigure === 'scissors' && computerFigure === 'scissors')
    ) {
      resultArea.innerHTML = `Round ${roundCount}, ${yourFigure} vs ${computerFigure}, it's a draw!`;
    }
    roundCount++;
  }

  if (roundCount > 3) {
    if (yourWins > computerWins) {
      finalResultArea.innerHTML = `Final winner is you!`;
    }
    if (yourWins < computerWins) {
      finalResultArea.innerHTML = `Final winner is computer!`;
    }
    if (yourWins === computerWins) {
      finalResultArea.innerHTML = `Final result is draw`;
    }
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
};

resetBtn.onclick = () => {
  youImg.src = dashImgPath;
  computerImg.src = dashImgPath;
  rockBtn.removeAttribute('disabled');
  paperBtn.removeAttribute('disabled');
  scissorsBtn.removeAttribute('disabled');
  resultArea.innerHTML = '';
  finalResultArea.innerHTML = '';
  roundCount = 1;
  yourWins = 0;
  computerWins = 0;  
};
