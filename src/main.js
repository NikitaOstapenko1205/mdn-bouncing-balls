import SimpleBall from './SimpleBall';
import EvilBall from './EvilBall';
import { getRandomInt, startTimer, endTimer } from './utils';
import { canvasObj, width, height } from './createCanvas';

let startInterval = null;

const startGame = () => {
  const evilBall = new EvilBall(25, 25, 5, 5, false, 'red', 20);
  evilBall.setControls();
  
  const balls = [];
  const ballsCount = getRandomInt(7, 15);
  while (balls.length < ballsCount) {
    const ball = new SimpleBall(
      getRandomInt(25, width - 25),
      getRandomInt(25, height - 25),
      getRandomInt(0, 7),
      getRandomInt(0, 7),
      true,
      `rgb(${getRandomInt(20, 255)}, ${getRandomInt(20, 255)}, ${getRandomInt(20, 255)})`,
      getRandomInt(15, 25),
    );
    balls.push(ball);
  }
  
  const loop = () => {
    canvasObj.fillStyle = 'rgba(0, 0, 0, 0.9)';
    canvasObj.fillRect(0, 0, width, height);
  
    const ballsCountNow = balls.length;
    const ballsCountText = document.querySelector('p');
    ballsCountText.textContent = `BALLS LEFT: ${ballsCountNow}`;
  
    if (ballsCountNow === 0) {
      const endText = document.querySelector('.final-time');
      endText.classList.add('show');

      cancelAnimationFrame(startInterval);
      endTimer();
      canvasObj.clearRect(0, 0, width, height);
      return;
    }
  
    for (let i = 0; i < balls.length; i += 1) {
      if (balls[i].isGood) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect(balls);
      }
      evilBall.draw();
      evilBall.checkBounds();
      evilBall.collisionDetect(balls);
    }
    startInterval = requestAnimationFrame(loop);
  };

  loop();
  startTimer();
};

startGame();

const newGameBtn = document.querySelector('button');
newGameBtn.addEventListener('click', () => {
  const endText = document.querySelector('.final-time');
  endText.classList.remove('show');
  startGame();
});
