function IntroScreen(screenProperties) {
  this.screenProperties = screenProperties

  this._drawNameImage = function() {
    var width = min(screenProperties.width/2, 600);
    var height = (nameImage.height / nameImage.width) * width;
    var x = screenProperties.width/2 - width/2;
    var y = max(screenProperties.height/2 - height, 0);
    image(nameImage, x, y, width, height);
  }

  this._drawPlayButton = function() {
  }

  this.draw = function() {
    background(0, 0, 0);
    this._drawNameImage();
    this._drawPlayButton();
  }
}
