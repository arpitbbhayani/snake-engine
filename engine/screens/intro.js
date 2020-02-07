function IntroScreen(screenProperties) {
  this.screenProperties = screenProperties
  introMusic.play()
  this.draw = function() {
    textSize(32);
    text('Snake Game', 10, 30);
    var button = createButton('Play');
    button.position(100, 200);
    button.mousePressed(function() {
      introMusic.stop()
    });
  }
}
