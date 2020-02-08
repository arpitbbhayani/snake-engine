function SnakeBody(x, y, wx, wy) {
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

  var head = new SnakeBody(10, 10, wx, wy); // center
  var tail = new SnakeBody(9, 10, wx, wy); // one behind

  this.elements = [
    head,
    tail,
  ]

  this.move = function() {
    var head = this.elements[0];
    var tail = this.elements[this.elements.length - 1]

    tail.x = head.x + this.directionX;
    tail.y = head.y + this.directionY;

    this.elements.unshift(this.elements.pop())
  }.bind(this)

  this.changeDirection = function(dirX, dirY) {
    if (dirX && dirX === this.directionX * -1) {
      return
    }
    if (dirY && dirY === this.directionY * -1) {
      return
    }
    this.directionX = dirX;
    this.directionY = dirY;
  }

  this.collided = function() {
    var head = this.elements[0];
    if (head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols) {
      return true;
    }
    return this.elements.slice(1).find(x => x.x === head.x && x.y === head.y)
  }

  this.eat = function(food) {
    var head = this.elements[0];
    if (head.x === food.x && head.y === food.y) {
      this.elements.splice(1, 0, new SnakeBody(head.x, head.y, wx, wy));
      head.x += this.directionX;
      head.y += this.directionY;
      return true;
    }
    return false;
  }.bind(this)

  this.isSnakeCell = function(x, y) {
    return this.elements.find(e => e.x === x && e.y === y);
  }.bind(this)

  this.stop = function() {
    this.directionX = 0;
    this.directionY = 0;
  }

  this.draw = function() {
    this.elements.forEach(x => x.draw())
  }
}
