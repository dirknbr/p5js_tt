function setup() {
  createCanvas(400, 400);
  myPlayer = new player();
  myBall = new ball();
  // myOpponent = new Opponent
}

function draw() {
  background(220);
  
  fill(0, 81, 82)
  rect(100, 50, 100, 150)
  fill(0, 81, 82)
  rect(200, 50, 100, 150)
  fill(0, 81, 82)
  rect(100, 200, 100, 150)
  fill(0, 81, 82)
  rect(200, 200, 100, 150)
  
  fill(0)
  square(193, 20, 14) 
  // player
  fill(100, 0, 0)
  square(193, 380, 15)
  //Ball
  myBall.show();
  myBall.update();
}
function player() {
  //
}
function ball() {
  this.x = 200;
  this.y = 200;
  
  this.show = function () {
  
  fill(255)
  ellipse(this.x, this.y, 10)
  }
  this.xmove = 0;
  this.ymove = 0;
  
  this.update = function() {
    this.x = this.x + this.xmove;
    this.y = this.y + this.ymove;  
    
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height)
  }
  this.direction = function (dx, dy){
    this.xmove = dx;
    this.ymove = dy;
}
}
function keyPressed() {
  if (key === "1"){
      myBall.direction(0, -5);
  }
  if (key === "2"){
      myBall.direction(5, -5);
  }
  if (key === "9"){
      myBall.direction(-5, -5);
  }
}
function Opponent () {
  // my opponent has a 10% chance of missing 45% of hitting it on the right half and a 45% of hitting it on the Left half.
  
}
