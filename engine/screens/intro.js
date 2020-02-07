function IntroScreen(screenProperties, gameInstance) {
  noLoop();

  introMusic.play();
  introMusic.loop();

  this._gotoPlaygroundScreen = function() {
    clear()
    introMusic.stop();
    gameInstance.changeScreen('PlaygroundScreen');
  }.bind(this)

  this._drawNameImage = function() {
    var width = min(600, screenProperties.width/2);
    var height = (nameImage.height / nameImage.width) * width;
    var x = screenProperties.width/2 - width/2;
    var y = max(screenProperties.height/2 - height, 0);

    image(nameImage, x, y, width, height);
  }

  this._drawPlayImage = function() {
    var width = min(200, screenProperties.width/2);
    var height = (playImage.height / playImage.width) * width;
    var x = screenProperties.width/2 - width/2;
    var y = max(screenProperties.height/2, 0);

    image(playImage, x, y, width, height);
  }

  this.keyPressed = function(keyCode) {
    if (keyCode === ENTER) {
      this._gotoPlaygroundScreen()
    }
  }

  this.draw = function() {
    background(0, 0, 0);
    this._drawNameImage();
    this._drawPlayImage();
  }
}
