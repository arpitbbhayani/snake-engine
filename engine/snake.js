function SnakeHead(x, y, wx, wy) {
  this.x = x
  this.y = y

  this.draw = function() {
    fill(255, 255, 255);
    rect(this.x * wx, this.y * wy, wx, wy);
  }
}

function SnakeTail(x, y, wx, wy) {
  this.x = x
  this.y = y

  this.draw = function() {
    fill(255, 255, 255);
    rect(this.x * wx, this.y * wy, wx, wy);
  }
}

function Snake(rows, cols, wx, wy) {
  this.directionX = 1;
  this.directionY = 0;

  var head = new SnakeHead(10, 10, wx, wy); // center
  var tail = new SnakeTail(9, 10, wx, wy); // one behind

  this.elements = [
    head,
    tail,
  ]

  this.move = function() {
    for (var i = 1; i < this.elements.length; i+=1) {
      this.elements[i].x = this.elements[i-1].x;
      this.elements[i].y = this.elements[i-1].y;
    }
    this.elements[0].x += this.directionX;
    this.elements[0].y += this.directionY;
  }

  this.changeDirection = function(dirX, dirY) {
    this.directionX = dirX;
    this.directionY = dirY;
  }

  this.collided = function() {
    var head = this.elements[0];
    if (head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols) {
      return true;
    }
    return false;
  }

  this.eat = function(food) {
    var head = this.elements[0];
    if (head.x === food.x && head.y === food.y) {
      return true;
    }
    return false;
  }

  this.stop = function() {
    this.directionX = 0;
    this.directionY = 0;
  }

  this.draw = function() {
    this.elements.map(e => e.draw())
  }
}
