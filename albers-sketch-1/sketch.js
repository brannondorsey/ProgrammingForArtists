var color1;
var color2;

function setup() {

	createCanvas(windowWidth, windowHeight);

	color1 = color(0, 200, 80); // light green
	color2 = color(0, 160, 60); // darker green
}

function draw() {

	// by default, P5 draws shapes with black outlines
	// let's disable this.
	noStroke();

	// draw the left background rectangle
	fill(color1); // set the drawing color
	rect(0, 0, windowWidth * 0.5, windowHeight); // draw a rectangle

	// draw the right background rectangle
	fill(color2);
	rect(windowWidth * 0.5, 0, windowWidth * 0.5, windowHeight);

	// let's use a variable for the square size
	// because we use it so often, if we want to
	// change it we will only have to update it in
	// one place.
	var squareSize = 150;

	// draw the left foreground rectangle

	// here we have written each of the four required parameters
	// on a new line for readibility, although this isn't neccessary
	rect(windowWidth * 0.25 - squareSize * 0.5, windowHeight * 0.5 - squareSize * 0.5, squareSize, squareSize); 
	// draw the right foreground rectangle
	fill(color1);
	rect(windowWidth * 0.75 - squareSize * 0.5, windowHeight * 0.5 - squareSize * 0.5, squareSize, squareSize);
}

// called when the window is resized
function windowResized() {
  // here we resize the canvas by the new window width and height
  // to assure that our canvas is always "fullscreen".
  resizeCanvas(windowWidth, windowHeight);
}
