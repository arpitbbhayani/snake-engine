var introMusic = null;
var nameImage = null;
var playImage = null;
var gameOverImage = null;

function preload() {
  introMusic = loadSound('/engine/sounds/intro.mp3');
  nameImage = loadImage('/engine/img/name.png');
  playImage = loadImage('/engine/img/play.png');
  gameOverImage = loadImage('/engine/img/game-over.png');
}
