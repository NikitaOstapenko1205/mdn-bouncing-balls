import Shape from './Shape';
import { canvasObj, width, height } from './createCanvas';
import { getRandomInt } from './utils';

class EvilBall extends Shape {
  constructor(x, y, velX, velY, isGood, color, size) {
    super(x, y, velX, velY, isGood);
    this.color = color;
    this.size = size;
  }

  draw() {
    canvasObj.beginPath();
    canvasObj.strokeStyle = this.color;
    canvasObj.lineWidth = 5;
    canvasObj.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    canvasObj.stroke();
  }

  checkBounds() {
    if ((this.x + this.size) >= width) {
      this.x -= this.size;
    }

    if ((this.x - this.size) <= 0) {
      this.x += this.size;
    }

    if ((this.y + this.size) >= height) {
      this.y -= this.size;
    }

    if ((this.y - this.size) <= 0) {
      this.y += this.size;
    }
  }

  setControls() {
    const thisEvilBall = this;
    const btns = {
      a: 0,
      w: 0,
      s: 0,
      d: 0,
    };
    window.onkeydown = (e) => {
      btns[e.key] = 1;
    };
    window.onkeyup = (e) => {
      btns[e.key] = 0;
    };

    const loop = () => {
      thisEvilBall.x -= btns.a * thisEvilBall.velX;
      thisEvilBall.x += btns.d * thisEvilBall.velX;
      thisEvilBall.y -= btns.w * thisEvilBall.velY;
      thisEvilBall.y += btns.s * thisEvilBall.velY;
      requestAnimationFrame(loop);
    };
    loop();

    // setInterval(() => {
    //   thisEvilBall.x -= btns.a * thisEvilBall.velX;
    //   thisEvilBall.x += btns.d * thisEvilBall.velX;
    //   thisEvilBall.y -= btns.w * thisEvilBall.velY;
    //   thisEvilBall.y += btns.s * thisEvilBall.velY;
    // }, 10);
  }

  collisionDetect(balls) {
    const leftBalls = balls;
    for (let i = 0; i < leftBalls.length; i += 1) {
      if (!(this === leftBalls[i])) {
        const dx = this.x - leftBalls[i].x;
        const dy = this.y - leftBalls[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + leftBalls[i].size) {
          leftBalls.splice(i, 1);
          this.size = getRandomInt(0, 2) ? this.size * 1.15 : this.size * 0.85;
        }
      }
    }
  }
}

export default EvilBall;
