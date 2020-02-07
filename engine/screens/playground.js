function PlaygroundScreen() {
  this.draw = function() {
    if (this.snake.collided()) {
      this.snake.stop()
      noLoop()
      introMusic.stop()
      return
    }

    this.snake.move()
  }
}
