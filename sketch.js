
var minute_xs = [], minute_ys = [];


function setup(){
  createCanvas(600,600);
  frameRate(1); //1 FPS, every second
  noStroke();

  // Set the random positions for the minutes stars


  for (var i = 0; i < 60; i++){
    append(minute_xs, random(width));
    append(minute_ys, random(height));
  }

}


function draw(){
  background('#2b2f77');
  fill('rgb(199, 216, 255)');

  
   for (var i = 0; i < hour(); i++){
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(0, 0, 80, 100, hour());
    pop();
  }
  
  for (var i = 0; i < minute(); i++){
    star(minute_xs[i], minute_ys[i], 20, 5, 5);
  }

}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
