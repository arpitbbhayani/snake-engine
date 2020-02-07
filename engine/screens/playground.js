function PlaygroundScreen(screenProperties, gameInstance) {
  this.btn = null;
  this.isGameOn = true;
  this.snake = new Snake(screenProperties)

  this._startGame = function() {
    if (this.btn) {
      this.btn.remove();
    }
    rect(0, 0, canvas.width, canvas.height);
    this.snake = new Snake(screenProperties)
    this.isGameOn = true;
    loop();
  }.bind(this)

  this.keyPressed = function(keyCode) {
    if (keyCode === UP_ARROW) {
      this.snake.changeDirection(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      this.snake.changeDirection(0, 1);
    } else if (keyCode === LEFT_ARROW) {
      this.snake.changeDirection(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
      this.snake.changeDirection(1, 0);
    } else if (keyCode === ENTER) {
      if (!this.isGameOn) {
        this._startGame();
      }
    }
  }

  this._drawGameOver = function() {
    var width = min(600, screenProperties.width/2);
    var height = (gameOverImage.height / gameOverImage.width) * width;
    var x = screenProperties.width/2 - width/2;
    var y = max(screenProperties.height/2 - height, 0);

    image(gameOverImage, x, y, width, height);
  }

  this._drawPlayButton = function() {
    var width = min(200, screenProperties.width/2);
    var height = (playImage.height / playImage.width) * width;
    var x = screenProperties.width/2 - width/2;
    var y = max(screenProperties.height/2, 0);
    this.btn = createImg('/engine/img/play.png');

    this.btn.position(x, y);
    this.btn.size(width, height);
    this.btn.mousePressed(this._startGame)
  }.bind(this)

  this.draw = function() {
    background(0, 0, 0);
    this.snake.draw();
    this.snake.move();

    if (this.snake.collided()) {
      this.isGameOn = false;
      this.snake.stop();
      this._drawGameOver();
      this._drawPlayButton();
      noLoop();
    }
  }.bind(this)
}
