// the setup function runs only once when the sketch loads.
function setup() {
	// we begin by creating our "artist canvas"
	// here we set the width and height to be the size
	// of the entire browser window
	createCanvas(windowWidth, windowHeight) // parameters: width, height
}

// the draw function runs once every frame. The framerate is 60fps by default,
// but that can be changed by calling the frameRate() function.
function draw() {

	background(255, 0, 127) // parameters: red, green, blue (0 - 255)

	// set the drawing color
	fill(255, 255, 0) // parameters: red, green, blue (0 - 255)
	// set the outline color. Grayscale colors can be expressed using only one
	// parameter instead of three. This is equivalent to 255, 255, 255.
	stroke(255) // parameter: grayscale value (0 - 255)
	// set the outline thickness
	strokeWeight(20)

	// we are going to draw a circle, which is an ellipse that has the same width
	// and height value. Because we will use the same value twice, this is a
	// great chance to use a variable, in this case size.
	size = width / 15 // here we define size as a ratio of the canvas width.
	step = width / 11

	x = step
	y = map(Math.sin((Date.now() / 1000) + radians(36 * 0)), -1.0, 1.0, height * 0.25, height * 0.75)
	ellipse(x, y, size, size) // parameters: x, y, width, height

	x += step
	y = map(Math.sin((Date.now() / 1000) + radians(36 * 1)), -1.0, 1.0, height * 0.25, height * 0.75)
	ellipse(x, y, size, size) // parameters: x, y, width, height

	x += step
	y = map(Math.sin((Date.now() / 1000) + radians(36 * 2)), -1.0, 1.0, height * 0.25, height * 0.75)
	ellipse(x, y, size, size) // parameters: x, y, width, height

	x += step
	y = map(Math.sin((Date.now() / 1000) + radians(36 * 3)), -1.0, 1.0, height * 0.25, height * 0.75)
	ellipse(x, y, size, size) // parameters: x, y, width, height

	x += step
	y = map(Math.sin((Date.now() / 1000) + radians(36 * 4)), -1.0, 1.0, height * 0.25, height * 0.75)
	ellipse(x, y, size, size) // parameters: x, y, width, height

	x += step
	y = map(Math.sin((Date.now() / 1000) + radians(36 * 5)), -1.0, 1.0, height * 0.25, height * 0.75)
	ellipse(x, y, size, size) // parameters: x, y, width, height

	x += step
	y = map(Math.sin((Date.now() / 1000) + radians(36 * 6)), -1.0, 1.0, height * 0.25, height * 0.75)
	ellipse(x, y, size, size) // parameters: x, y, width, height

	x += step
	y = map(Math.sin((Date.now() / 1000) + radians(36 * 7)), -1.0, 1.0, height * 0.25, height * 0.75)
	ellipse(x, y, size, size) // parameters: x, y, width, height

	x += step
	y = map(Math.sin((Date.now() / 1000) + radians(36 * 8)), -1.0, 1.0, height * 0.25, height * 0.75)
	ellipse(x, y, size, size) // parameters: x, y, width, height

	x += step
	y = map(Math.sin((Date.now() / 1000) + radians(36 * 9)), -1.0, 1.0, height * 0.25, height * 0.75)
	ellipse(x, y, size, size) // parameters: x, y, width, height

}

// called when the window is resized
function windowResized() {
  // here we resize the canvas by the new window width and height
  // to assure that our canvas is always "fullscreen".
  resizeCanvas(windowWidth, windowHeight)
	background(255, 0, 127)
}
