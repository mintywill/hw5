var x = 230;
var y = [220,280,340];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x-10, 20);
  
  
  // draw drip
  ellipse(x, y[0], 10);
  ellipse(x, y[1], 10);
  ellipse(x, y[2], 10);
  // down 3 pixels each frame, but maybe should be accelerating?
  

for (var index = 0; index < 3; index = index + 1) {
    ellipse(x[index], y[index], 10);
  //y[index] = y[index] + 0.5;

    y[0] = y[0] + 0.5
    y[1] = y[1] + 0.5
    y[2] = y[2] + 0.5
}
  
  // if invisible for a full “height” amount…
if (y[0] > height) {
    // reset
    y[0] = 220;
}
if (y[1] > height) {
    // reset
    y[1] = 220;
}
if (y[2] > height) {
    // reset
    y[2] = 220;
 }
}
    
