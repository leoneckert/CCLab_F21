console.log("script works!");
// first things first:
// SELECT slider
let circlePosSlider = document.getElementById("circlePositionSlider");
let circleSizeSlider = document.getElementById("circleSizeSlider");


function setup(){
  //....
  let canvas = createCanvas(200, 200);
  canvas.parent("canvasContainer");

  background(0);
}

let x = 0;
function draw(){
  //...
  // background(0);
  fill("lightyellow");

  fill(255);
  noStroke();
  circle(x, height/2, 50);
  x++;
}
