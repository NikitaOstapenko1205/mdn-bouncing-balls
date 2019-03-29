import Shape from './Shape';

class SimpleBall extends Shape {
  constructor(x, y, velX, velY, isGood, color, size) {
    super(x, y, velX, velY, isGood);
    this.color = color;
    this.size = size;
  }
}

export default SimpleBall;
