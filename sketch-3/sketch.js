function setup() {
	// we begin by creating our "artist canvas"
	// here we set the width and height to be the size
	// of the entire browser window
	createCanvas(windowWidth, windowHeight)
	background(255, 0, 127)
	frameRate(24)
}

function draw() {
		drawFace(random(0, width), random(0, height), random(20, 150))
}

function drawTriangle(x, y, size, rotation) {
	triangle(x, y - size / 2,
		       x + size / 2, y + size / 2,
				   x - size / 2, y + size / 2)
}

function drawFace(x, y, size) {
	// draw the left background rectangle

	push()
	translate(-size / 2, -size / 2)

	stroke(255)
	strokeWeight(size / random(10, 20))

	eyeSize = size/random(3, 7)

	fill(random(127, 255), 0, random(127, 0)); // set the drawing color
	ellipse(x + size * 0.25, y + size/3, eyeSize, eyeSize)

	eyeSize = size/random(3, 7)

	fill(random(127, 255), 0, random(127, 255))
	ellipse(x + size * 0.75, y + size/3, eyeSize, eyeSize)

	fill(random(155), random(255), random(255))
	noStroke()
	drawTriangle(x + size * 0.5, y + size * 0.5, size / 7)

	fill(0, random(127, 255), random(127, 255))
	rect(x, y + size * 0.75, size, size * 0.25)

	pop()
}

// called when the window is resized
function windowResized() {
  // here we resize the canvas by the new window width and height
  // to assure that our canvas is always "fullscreen".
  resizeCanvas(windowWidth, windowHeight)
	background(255, 0, 127)
}
