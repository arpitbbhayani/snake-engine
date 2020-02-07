function Food(x, y, wx, wy) {
  this.x = x
  this.y = y
  this.wx = wx
  this.wy = wy

  this.draw = function() {
    fill(255, 0, 0);
    rect(this.x, this.y, wx, wy);
  }
}
