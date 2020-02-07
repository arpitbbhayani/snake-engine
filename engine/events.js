function keyPressed() {
  if (keyCode === UP_ARROW) {
    game.onUp()
  } else if (keyCode === DOWN_ARROW) {
    game.onDown()
  } else if (keyCode === LEFT_ARROW) {
    game.onLeft()
  } else if (keyCode === RIGHT_ARROW) {
    game.onRight()
  }
}
