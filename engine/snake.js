function SnakeHead(x, y, wx, wy) {
  this.x = x
  this.y = y
  this.wx = wx
  this.wy = wy

  this.draw = function() {
    fill(255, 255, 255);
    rect(this.x, this.y, wx, wy);
  }
}

function SnakeTail(x, y, wx, wy) {
  this.x = x
  this.y = y
  this.wx = wx
  this.wy = wy

  this.draw = function() {
    fill(255, 255, 255);
    rect(this.x, this.y, wx, wy);
  }
}

function Snake(screenProperties) {
  screenProperties = screenProperties
  this.directionX = 1;
  this.directionY = 0;

  var width = int(screenProperties.width/50);
  var height = int(screenProperties.height/50)

  var head = new SnakeHead(width * 25, height * 25, width, height); // center
  var tail = new SnakeTail(width * 24, height * 25, width, height); // one behind

  this.elements = [
    head,
    tail,
  ]

  this.move = function() {
    for (var i = 1; i < this.elements.length; i+=1) {
      this.elements[i].x = this.elements[i-1].x;
      this.elements[i].y = this.elements[i-1].y;
    }
    this.elements[0].x += this.directionX * this.elements[0].wx;
    this.elements[0].y += this.directionY * this.elements[0].wy;
  }

  this.changeDirection = function(x, y) {
    this.directionX = x;
    this.directionY = y;
  }

  this.collided = function() {
    var head = this.elements[0];
    if (head.x <= 0 || head.y <= 0 || head.x >= screenProperties.width - head.wx || head.y >= screenProperties.height - head.wy) {
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
