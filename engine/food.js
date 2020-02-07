function Food(x, y, wx, wy) {
  this.x = x
  this.y = y

  this.draw = function() {
    fill(255, 0, 0);
    rect(this.x * wx, this.y * wy, wx, wy);
  }
}
