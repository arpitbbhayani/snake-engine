p5.disableFriendlyErrors = true; // disables FES

var game = null;
var gameCanvas = null;

var screenProperties = {
  width: 640,
  height: 480,
}

function setup() {
  screenProperties.width = windowWidth;
  screenProperties.height = windowHeight;
  gameCanvas = createCanvas(screenProperties.width, screenProperties.height);
  gameCanvas.parent('sketch');
  game = new Game(screenProperties);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  game.run()
}
