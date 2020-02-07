function SnakeHead(x, y) {
  this.x = x
  this.y = y

  this.draw = function() {
    fill(255, 255, 255);
    rect(this.x, this.y, 10, 10);
  }
}

function SnakeTail(x, y) {
  this.x = x
  this.y = y

  this.draw = function() {
    fill(255, 255, 255);
    rect(this.x, this.y, 10, 10);
  }
}

function Snake(screenProperties) {
  this.screenProperties = screenProperties
  this.directionX = 1;
  this.directionY = 0;

  this.elements = [
    new SnakeHead(100, 100),
    new SnakeTail(90, 100),
  ]

  this.move = function() {
    for (var i = 1; i < this.elements.length; i+=1) {
      this.elements[i].x = this.elements[i-1].x;
      this.elements[i].y = this.elements[i-1].y;
    }
    this.elements[0].x += this.directionX * 10;
    this.elements[0].y += this.directionY * 10;
  }

  this.changeDirection = function(x, y) {
    if (this.directionX * -1 == x && this.directionY * -1 == y) {
      return
    }
    this.directionX = x;
    this.directionY = y;
  }

  this.collided = function() {
    var head = this.elements[0];
    if (head.x <= 0 || head.y <= 0 || head.x >= this.screenProperties.width - 10 || head.y >= this.screenProperties.height - 10) {
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
