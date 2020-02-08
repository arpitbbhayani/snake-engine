function PlaygroundScreen(screenProperties, gameInstance) {
  this.isGameOn = false;
  this.snake = null;
  this.food = null
  this.rows = 50;
  this.cols = 50;
  this.wx = int(screenProperties.width/this.rows)
  this.wy = int(screenProperties.height/this.cols)
  this.score = 0;

  gameCanvas.resize(this.rows * this.wx, this.cols * this.wy)

  this._startGame = function() {
    this.snake = new Snake(this.rows, this.cols, this.wx, this.wy)
    this._spawnFood();
    this.isGameOn = true;
    loop();
  }.bind(this)

  this._spawnFood = function() {
    var x = 0, y = 0;
    do {
      x = int(Math.random() * this.rows);
      y = int(Math.random() * this.cols);
    } while(this.snake.isSnakeCell(x, y));
    this.food = new Food(x, y, this.wx, this.wy);
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

    image(playImage, x, y, width, height);
  }.bind(this)

  this._drawScore = function() {
    textSize(32);
    textFont('monospace');
    text('Score: ' + this.score, 10, 30);
    fill(255, 255, 255);
  }.bind(this)

  this.draw = function() {
    background(0, 0, 0);
    this.snake.move();
    this.snake.draw();
    this._drawScore();

    if (this.snake.collided()) {
      this.isGameOn = false;
      this.snake.stop();
      this._drawGameOver();
      this._drawPlayButton();
      noLoop();
    }

    if (this.snake.eat(this.food)) {
      this._spawnFood()
      this.score+=1;
    }

    this.food.draw();
  }.bind(this)

  this._startGame();
}
