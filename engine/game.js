function Game(screenProperties) {
  this.introScreen = new IntroScreen(screenProperties, this)
  this.playgroundScreen = new PlaygroundScreen(screenProperties, this)

  this.currentScreen = this.introScreen;

  this.run = function() {
    frameRate(10)
    this.currentScreen.draw()
  }

  this.changeScreen = function(name) {
    if (name === 'PlaygroundScreen') {
      this.currentScreen = this.playgroundScreen;
    } else {
      this.introScreen = this.introScreen;
    }
  }

  this.keyPressed = function(keyCode) {
    if (this.currentScreen.keyPressed) {
      this.currentScreen.keyPressed(keyCode)
    }
  }
}
