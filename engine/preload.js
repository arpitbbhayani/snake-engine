var introMusic = null;
var nameImage = null;
var playImage = null;
var gameOverImage = null;

function preload() {
  introMusic = loadSound('/sounds/intro.mp3');
  nameImage = loadImage('/img/name.png');
  playImage = loadImage('/img/play.png');
  gameOverImage = loadImage('/img/game-over.png');
}
