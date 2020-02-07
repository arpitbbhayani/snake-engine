function Food(x, y) {
  this.x = x
  this.y = y

  this.draw = function() {
    fill(255, 0, 0);
    rect(this.x, this.y, 10, 10);
  }
}
