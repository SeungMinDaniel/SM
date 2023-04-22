var i=0;
var d=5;
function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  background(0);
}

function draw() {
  if(on) background(255);
  else background(0);
  
  i+=d
  if(i>255 || i<1) d=-d;
  if(mouseX>=width/2-50 && mouseX<=width/2+50) {
    fill(0,0,255,100);
  } else {
    fill(255,0,0,100);
  }
  rect(width/2,height/2,100,100);
  ellipse(width/2,height/2,100,30);
  ellipse(width/2,height/2,30,100);
  rect(width/2,height/2,100,100);
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}

function mousePressed() {
  d=d+100;
}

function  keyPressed() {
  
}