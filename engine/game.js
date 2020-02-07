function Game(screenProperties) {
  this.snake = new Snake(screenProperties)
  this.introScreen = new IntroScreen(screenProperties)
  this.playgroundScreen = new PlaygroundScreen(screenProperties)

  this.currentScreen = this.introScreen;

  this.run = function() {
    this.currentScreen.draw()
  }

  this.keyPressed = function(keyCode) {
    if (this.currentScreen.keyPressed) {
      this.currentScreen.keyPressed(keyCode)
    }
  }
}
