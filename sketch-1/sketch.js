function setup() {
	// we begin by creating our "artist canvas"
	// here we set the width and height to be the size
	// of the entire browser window
	createCanvas(windowWidth, windowHeight) // parameters: width, height
	background(255, 0, 127) // parameters: red, green, blue (0 - 255)
}

function draw() {

	// set the drawing color
	fill(255, 255, 0) // parameters: red, green, blue (0 - 255)
	// set the outline color. Grayscale colors can be expressed using only one
	// parameter instead of three. This is equivalent to 255, 255, 255.
	stroke(255) // parameter: grayscale value (0 - 255)
	// set the outline thickness
	strokeWeight(50)

	// we are going to draw a circle, which is an ellipse that has the same width
	// and height value. Because we will use the same value twice, this is a
	// great chance to use a variable, in this case size.
	size = width / 5 // here we define size as a ratio of the canvas width.
	ellipse(width/2, height/2, size, size) // parameters: x, y, width, height
}
