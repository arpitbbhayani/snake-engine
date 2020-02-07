var game = null;
var gameCanvas = null;

var screen = {
  width: 640,
  height: 480,
}

function setup() {
  screen.width = windowWidth;
  screen.height = windowHeight;
  gameCanvas = createCanvas(screen.width, screen.height);
  gameCanvas.parent('sketch');
  game = new Game(screen);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 0)
  game.run()
}
