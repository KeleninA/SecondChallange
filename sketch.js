// Click and Drag an object
let shapes = [];
let shape1;
let rand1;
let rand2;
let rand3;
let rand4;

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 5000; i++) {
    rand1 = random(-10, width);
    rand2 = random(-10, height);
    rand3 = random(20, 100);
    rand4 = random(20, 100);
    shapes[i] = new Draggable(rand1, rand2, rand3, rand4);
  }
  
  //shape1 = new Draggable(50, 50, 300, 300);
}

function draw() {
  background(0);
  
  for(let i = 0; i <5000; i++) {
    shapes[i].over();
    shapes[i].update();
    shapes[i].show();
  }
  /*
  shape1.over();
  shape1.update();
  shape1.show();
    shapes[0].over();
    shapes[0].update();
    shapes[0].show();
  shapes[1].over();
    shapes[1].update();
    shapes[1].show();

  shapes[2].over();
    shapes[2].update();
    shapes[2].show();
    */


}

function mousePressed() {
  /*
  shape1.pressed();
  shapes[0].pressed();
  shapes[1].pressed();
  shapes[2].pressed();
  */
  for(let i = 0; i <5000; i++) {
    shapes[i].pressed();
  }
}

function mouseReleased() {
  /*
  shape1.released();
  shapes[0].released();
  shapes[1].released();
  shapes[2].released();
  */
  for(let i = 0; i <5000; i++) {
    shapes[i].released();
  }
}