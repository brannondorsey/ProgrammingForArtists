function setup() {
	// we begin by creating our "artist canvas"
	// here we set the width and height to be the size
	// of the entire browser window
	createCanvas(windowWidth, windowHeight) // parameters: width, height
}

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

	// here is a more advanced way to do the same thing using a "for loop". This
	// allows us to get the same functionality without having to write out the
	// code for each circle. It also allows us to better generalize our code and
	// easily increase our number of circles if we choose to.

	// numCircles = 10
	// size = (width / numCircles) * 0.66
	// step = width / (numCircles + 1)
	// x = 0
	// for (var i = 0; i < numCircles; i++) {
	// 	x += step
	// 	y = map(Math.sin((Date.now() / 1000) + radians((360 / numCircles) * i)),
	// 					-1.0, 1.0, height * 0.25, height * 0.75)
	// 	ellipse(x, y, size, size) // parameters: x, y, width, height
	// }

}
