function setup() {
	// we begin by creating our "artist canvas"
	// here we set the width and height to be the size
	// of the entire browser window
	createCanvas(windowWidth, windowHeight)
	background(255, 0, 127)
}

function drawTriangle(x, y, size, rotation) {
	triangle(x, y - size / 2,
		       x + size / 2, y + size / 2,
				   x - size / 2, y + size / 2)
}

function draw() {

	stroke(255)
	strokeWeight(50)

	eyeSize = width/5

	fill(255, 255, 0); // set the drawing color
	ellipse(width * 0.25, height/3, eyeSize, eyeSize)

	fill(255, 200, 0)
	ellipse(width * 0.75, height/3, eyeSize, eyeSize)

	fill(127, 0, 255)
	noStroke()
	drawTriangle(width * 0.5, height * 0.5, 150)

	fill(0, 255, 127)
	rect(0, height * 0.75, width, height - 0.75)
}

// called when the window is resized
function windowResized() {
  // here we resize the canvas by the new window width and height
  // to assure that our canvas is always "fullscreen".
  resizeCanvas(windowWidth, windowHeight)
	background(255, 0, 127)
}
