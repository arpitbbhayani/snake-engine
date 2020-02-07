function Game(screen) {
  this.snake = new Snake(screen)
  introMusic.play()

  this.run = function() {
    this.draw()

    if (this.snake.collided()) {
      this.snake.stop()
      noLoop()
      return
    }

    this.snake.move()
  }

  this.draw = function() {
    this.snake.draw()
  }

  this.onUp = function() {
    this.snake.changeDirection(0, -1)
  }

  this.onDown = function() {
    this.snake.changeDirection(0, 1)
  }

  this.onLeft = function() {
    this.snake.changeDirection(-1, 0)
  }

  this.onRight = function() {
    this.snake.changeDirection(1, 0)
  }
}
