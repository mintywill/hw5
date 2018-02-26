var x = [];
var y = [];
var r = [];

function setup() {
  createCanvas(400, 400);
    for (var i = 0; i < 100; i++) {
      
    x[i] = random(200, 220);
    y[i] = random(50, 300);
    r[i] = random(360);
	}
}
  
function draw() {
  background(0);
  noStroke();

  fill(255);
  rect(195, height, 30, -100);

  for (var i = 0; i < 100; i++) {
  push();
  fill(y[i]);
  translate(x[i], y[i]);
  rotate(r[i]);
  rect(10, 5, 20, 20);
  pop(accelerationX);
  
  y[i] -= 3;
  r[i] += 0.05
  
  if (y[i] < 50) {
    y[i] = 270;
  }
}
}
