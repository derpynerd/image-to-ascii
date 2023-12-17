let y = 100;
let toggleLoop = 1;

function setup() {
  createCanvas(400, 400);
  stroke(255);
  frameRate(30);
  noLoop();
}

function draw() {
  background(50);
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

function mousePressed() {
  if (toggleLoop == 1) {
    loop();
    toggleLoop = 2;
  }
  else {
    noLoop();
    toggleLoop = 1;
  }
}