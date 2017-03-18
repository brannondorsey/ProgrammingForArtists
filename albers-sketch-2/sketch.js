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

	// Date.now() returns milliseconds, so 
	// dividing by 1000 gives us a value in seconds
	var time = Date.now() / 1000 * 2;

// ...............o......o.......................................................
// ............o............o....................................................
// ..........o................o..................................................
// ........o....................o................................................
// .......o......................o...............................................
// .....o..........................o.............................................
// ....o............................o............................................
// ...o...............................o..........................................
// ....................................o..............................o..........
// .....................................o............................o...........
// ......................................o..........................o............
// ........................................o......................o..............
// .........................................o....................o...............
// ...........................................o................o.................
// .............................................o............o...................
// ................................................o......o......................
// The Math.sin() produces sinusoidal values (think waveform) over time when it is
// given an incrementing value as the input parameter. Often Date.now() is used in
// some compacity as the input parameter to Math.sin() because it returns the 
// current time in milliseconds since Jan 1, 1970 (<-- the Unix timestamp).
 
	// the map() function takes a value and maps its value from one
	// range to another. In this case because Math.sin() returns
	// values between -1.0 and 1.0, we map -1.0 to 50 and 1.0 to 200
	// and let the map() function interpolate values in-between.
	var leftSquareSize = map(Math.sin(time), -1.0, 1.0, 50, 200);
	// Here we use negative Math.sin(time) to create an inversely
	// proportionate relationship between the two square sizes.
	var rightSquareSize = map(-Math.sin(time), -1.0, 1.0, 50, 200);

	// draw the left foreground rectangle
	rect(windowWidth * 0.25 - leftSquareSize * 0.5, // x
		 windowHeight * 0.5 - leftSquareSize * 0.5, // y
		 leftSquareSize, // width
		 leftSquareSize); // height

	// draw the right foreground rectangle
	fill(color1);
	rect(windowWidth * 0.75 - rightSquareSize * 0.5,
	     windowHeight * 0.5 - rightSquareSize * 0.5, 
	     rightSquareSize, 
	     rightSquareSize);
}

// called when the window is resized
function windowResized() {
  // here we resize the canvas by the new window width and height
  // to assure that our canvas is always "fullscreen".
  resizeCanvas(windowWidth, windowHeight);
}