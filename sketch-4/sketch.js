var color1;
var color2;

function setup() {
	
	createCanvas(windowWidth, windowHeight);

	color1 = color(210, 72, 69); // muted red
	color2 = color(82, 164, 214); // baby blue
}

function draw() {
	
	// we must redraw the background color each frame
	background(218, 222, 111); // pale yellow-green

	noStroke();
	// draw the red rectangle on the right
	fill(color1);
	var rectMargin = windowWidth * 0.07; // 7% of the full width
	rect(windowWidth * 0.5 + rectMargin, // x
		 rectMargin, // y
		 windowWidth * 0.5 - rectMargin * 2, // width 
		 windowHeight - rectMargin * 2); // height

	// the y value of each blue rectangle is determined by Math.sin() formed from Date.now()
	// divided by values that are multiples of 100 apart from eachother (900, 1000, 1100, etc).
	// Also, each blue rectangle is drawn with a different alpha value. 

	// draw the first blue rectangle
	fill(red(color2), green(color2), blue(color2), 200);
	var blueRectHeight = 110;
	var y = map(Math.sin(Date.now() / 900), -1.0, 1.0, 
		        rectMargin,
		        windowHeight - rectMargin - blueRectHeight);
	rect(rectMargin, y, windowWidth * 0.75 - rectMargin, blueRectHeight);	

	// draw the second blue rectangle
	fill(red(color2), green(color2), blue(color2), 150);
	y = map(Math.sin(Date.now() / 1000), -1.0, 1.0, 
		        rectMargin,
		        windowHeight - rectMargin - blueRectHeight);
	rect(rectMargin, y, windowWidth * 0.75 - rectMargin, blueRectHeight);	

	// draw the third blue rectangle
	fill(red(color2), green(color2), blue(color2), 100);
	y = map(Math.sin(Date.now() / 1100), -1.0, 1.0, 
		        rectMargin,
		        windowHeight - rectMargin - blueRectHeight);
	rect(rectMargin, y, windowWidth * 0.75 - rectMargin, blueRectHeight);	
}

// called when the window is resized
function windowResized() {
  // here we resize the canvas by the new window width and height
  // to assure that our canvas is always "fullscreen".
  resizeCanvas(windowWidth, windowHeight);
}