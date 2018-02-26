var x=[];
var y=[];
var d=[];
var colors = [];

function setup() {
  createCanvas(400, 400);
	for (var i = 0; i < 50; i++) {
    x[i] = random(0,width);
    y[i] = random(0,height);
    //d[i] = random(20,60);  redraw individual circle while blinking/redraw 50 circles
    colors[i] = color(random(255), random(255), random(255));
  }
}
  
function draw() {
  background(255);
  noStroke();
  
  for (var i=0; i<50; i++){
    if (random() < 0.02) {
    	d[i] = random(30,70);
		}
    fill(colors[i]);
    ellipse(x[i],y[i],d[i]);
  }
}
