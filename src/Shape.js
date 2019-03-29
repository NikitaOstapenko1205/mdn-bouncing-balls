import { canvasObj, width, height } from './createCanvas';
import { getRandomInt } from './utils';

class Shape {
  constructor(x, y, velX, velY, isGood) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.isGood = isGood;
  }

  draw() {
    canvasObj.beginPath();
    canvasObj.fillStyle = this.color;
    canvasObj.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    canvasObj.fill();
  }

  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -this.velX;
    }

    if ((this.x - this.size) <= 0) {
      this.velX = -this.velX;
    }

    if ((this.y + this.size) >= height) {
      this.velY = -this.velY;
    }

    if ((this.y - this.size) <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect(balls) {
    const leftBalls = balls;
    for (let i = 0; i < leftBalls.length; i += 1) {
      if (!(this === leftBalls[i])) {
        const dx = this.x - leftBalls[i].x;
        const dy = this.y - leftBalls[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + leftBalls[i].size) {
          const newColor = `rgb(${getRandomInt(20, 255)}, ${getRandomInt(20, 255)}, ${getRandomInt(20, 255)})`;
          leftBalls[i].color = newColor;
          this.color = newColor;
        }
      }
    }
  }
}

export default Shape;
