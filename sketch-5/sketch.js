var color1;
var color2;
var color3;

function setup() {
	
	createCanvas(windowWidth, windowHeight);

	color1 = color(0, 100, 255);
	color2 = color(255, 0, 100);
	color3 = color(100, 255, 0);
}

function draw() {

	// the y value of each rectangle is determined by Math.sin() formed from Date.now()
	// divided by values that are multiples of 100 apart from eachother (900, 1000, 1100, etc).
	background(0);
	noStroke();

	// blend mode in processing works similarly to how you may be familiar with
	// it in Photoshop. EXCLUSION mode is a less extreme version of a DIFFERENCE
	// blend mode which produces a color that is a subtraction of the current color
	// and the color below it on the screen.
	// For more info check out: http://p5js.org/reference/#/p5/blendMode
	blendMode(EXCLUSION);

	// draw the first rectangle
	fill(color1);
	var rectHeight = windowHeight / 3;
	var y = map(Math.sin(Date.now() / 900), -1.0, 1.0, 0, windowHeight - rectHeight);
	rect(0, y, windowWidth, rectHeight);	

	// draw the second rectangle
	fill(color2);
	y = map(Math.sin(Date.now() / 1000), -1.0, 1.0, 0, windowHeight - rectHeight);
	rect(0, y, windowWidth, rectHeight);	

	// draw the third rectangle
	fill(color3);
	y = map(Math.sin(Date.now() / 1100), -1.0, 1.0, 0, windowHeight - rectHeight);
	rect(0, y, windowWidth, rectHeight);	
}

// called when the window is resized
function windowResized() {
  // here we resize the canvas by the new window width and height
  // to assure that our canvas is always "fullscreen".
  resizeCanvas(windowWidth, windowHeight);
}