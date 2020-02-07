function IntroScreen(screenProperties, gameInstance) {
  noLoop();

  this.btn = null;

  introMusic.play();
  introMusic.loop();

  this._startGame = function() {
    introMusic.stop();
    gameInstance.changeScreen('PlaygroundScreen');
    this.btn.remove();
    loop();
  }.bind(this)

  this._drawNameImage = function() {
    var width = min(600, screenProperties.width/2);
    var height = (nameImage.height / nameImage.width) * width;
    var x = screenProperties.width/2 - width/2;
    var y = max(screenProperties.height/2 - height, 0);

    image(nameImage, x, y, width, height);
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
  }

  this.keyPressed = function(keyCode) {
    if (keyCode === ENTER) {
      this._startGame()
    }
  }

  this.draw = function() {
    background(0, 0, 0);
    this._drawNameImage();
    this._drawPlayButton(gameInstance);
  }
}
