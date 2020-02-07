function PlaygroundScreen(screenProperties, gameInstance) {
  this.snake = new Snake(screenProperties)
  this.gameInstance = gameInstance;

  this.keyPressed = function(keyCode) {
    if (keyCode === UP_ARROW) {
      this.snake.changeDirection(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      this.snake.changeDirection(0, 1);
    } else if (keyCode === LEFT_ARROW) {
      this.snake.changeDirection(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
      this.snake.changeDirection(1, 0);
    }
  }

  this.draw = function() {
    background(0, 0, 0);
    this.snake.draw();
    this.snake.move();

    if (this.snake.collided()) {
      this.snake.stop();
    }
  }
}
