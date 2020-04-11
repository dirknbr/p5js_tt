function setup() {
  createCanvas(400, 400);
  myPlayer = new player();
  myBall = new ball();
  myOpponent = new opponent();
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
  myOpponent.update();
  myBall.reset();
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
  this.reset = function() {
    // if on edge put back to center
    if (this.y == 0 | this.y == height) {
      console.log('reset');
      this.x = 200
      this.y = 200
      this.xmove = 0
      this.ymove = 0
    }
  }
}
function keyPressed() {
  if (myBall.y >= 200 & myBall.y <= 350 & myBall.x >= 100 & myBall.x <= 300) {
  // straight but up
  if (key === "1"){
      myBall.direction(0, -5);
  }
  // goes diagonal right
  if (key === "2"){
      myBall.direction(5, -5);
  }
  // diagonal left
  if (key === "9"){
      myBall.direction(-5, -5);
  }
  }
}
function opponent() {
  // my opponent has a 10% chance of missing 45% of hitting it on the right half and a 45% of hitting it on the Left half.
  this.update = function() {
  r = random();
  // if passes back line of table
  if (myBall.y < 50 & myBall.x > 100 & myBall.x < 300) {
    if (r < .45) {
      // hit right
      myBall.direction(1, 5);
    } else if (r < .9) {
      myBall.direction(-1, 5);
    }
  }
  // if passes left side
  if (myBall.y > 50 & myBall.y < 200 & myBall.x < 100) {
    if (r < .9) {
      // hit right
      myBall.direction(1, 5);
    }
  }
  // if passes right side 
  if (myBall.y > 50 & myBall.y < 200 & myBall.x > 300) {
    if (r < .9) {
      // hit left
      myBall.direction(-1, 5);
    }
  }
    
  }
  
}
