function IntroScreen(screenProperties) {
  noLoop();

  this.screenProperties = screenProperties
  introMusic.play();
  introMusic.loop();

  this._drawNameImage = function() {
    var width = min(screenProperties.width/2, 600);
    var height = (nameImage.height / nameImage.width) * width;
    var x = screenProperties.width/2 - width/2;
    var y = max(screenProperties.height/2 - height, 0);
    image(nameImage, x, y, width, height);
  }

  this._drawPlayButton = function() {
    var width = min(screenProperties.width/2, 200);
    var height = (playImage.height / playImage.width) * width;
    var x = screenProperties.width/2 - width/2;
    var y = max(screenProperties.height/2, 0);
    var button = createImg('/engine/img/play.png');
    button.position(x, y);
    button.size(width, height);
    button.mousePressed(function() {
      introMusic.stop();
    })
  }

  this.draw = function() {
    background(0, 0, 0);
    this._drawNameImage();
    this._drawPlayButton();
  }
}
