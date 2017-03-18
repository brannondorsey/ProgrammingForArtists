// the setup function runs only once when the sketch loads.
function setup() {
	// create a canvas to draw to. Here we make it the size of the entire browser
	// window.
	createCanvas(windowWidth, windowHeight) // parameters: width, height
	// set the background color
	background(127, 127, 127) // parameters: red, green, blue (values 0 - 255)
}

// the draw function runs once every frame. The framerate is 60fps by default.
function draw() {

	// // comments are great for little notes to yourself, but they also
	// // serve another useful purpose: Enabling/disabling code snippets
	// // uncomment below to see how the sketch changes.
	// background(127, 127, 127)

	// // try the same with enabling/disabling the stroke
	// noStroke()

	// if the mouse is pressed
	if (mouseIsPressed) {
		// set the color to a red
		fill(200, 0, 0)
		// and draw a circle
		ellipse(mouseX, mouseY, 50, 50) // parameters: x, y, width, height
	}
}
