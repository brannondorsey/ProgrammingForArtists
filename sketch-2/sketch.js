// the setup function runs only once when the sketch loads.
function setup() {
	// we begin by creating our "artist canvas"
	// here we set the width and height to be the size
	// of the entire browser window
	createCanvas(windowWidth, windowHeight)
	background(255, 0, 127)
}

// the draw function runs once every frame. The framerate is 60fps by default,
// but that can be changed by calling the frameRate() function.
function draw() {

	// set the outline color
	stroke(255) // parameter: grayscale (0-255)
	// set the outline weight
	strokeWeight(50)

	// create a variable to re-use for the eye size
	eyeSize = width / 5

	fill(255, 255, 0) // set the drawing color
	// draw the left eye
	ellipse(width * 0.25, height/3, eyeSize, eyeSize)

	fill(255, 200, 0) // change the drawing color
	// draw the right eye
	ellipse(width * 0.75, height/3, eyeSize, eyeSize)

	// disable outlines
	noStroke()
	fill(127, 0, 255) // change the drawing color
	// draw the nose, using the helper function below
	drawTriangle(width * 0.5, height * 0.5, 150) // parameters: x, y, size

	fill(0, 255, 127) // change the drawing color
	// draw the mouth
	rect(0, height * 0.75, width, height - 0.75)
}

// drawing triangles in P5.js is a little bit cumbersome, so I've created a
// helper function to make it a bit easier
function drawTriangle(x, y, size) {
	triangle(x, y - size / 2, x + size / 2, y + size / 2, x - size / 2, y + size / 2)
}
