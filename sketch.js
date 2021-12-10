//🍀
let bubbles = [];
let rand4;
let rand5;
let rand6;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 1000; i++) {
    let rand1 = random(width);
    let rand2 = random(height);
    let rand3 = random(20, 60);
    rand4 = random(20,255);
    rand5 = random(20,255);
    rand6 = random(20,255);
    let b = new Bubble(rand1, rand2, rand3, rand4,rand5,rand6);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (var i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].mouseOver()) {
      bubbles.splice(i, 1);
    }
  }
}

function draw() {
  background(0);
  let a = createA('https://kelenina.github.io/ThirdChallange/', '🍀', '_blank');
  a.position(200, 200);
  
  for (let i = 0; i < bubbles.length; i++) {
    //bubbles[i].move();
    bubbles[i].display();
  }
}

function Bubble(inX, inY, size,rand4,rand5,rand6) {
  this.x = inX;
  this.y = inY;
  this.r = size;
  strokeWeight(4);
  
  this.col = color(rand4,rand5,rand6);
  
  this.mouseOver = function () {
    return dist(this.x, this.y, mouseX, mouseY) < this.r;
  }
 
  this.display = function () {
    if (this.mouseOver()) {
      this.col = color(128,128,128);
    } else {
      this.col = color(rand4,rand5,rand6);
    }
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }


  
}

