var color1;
var color2;
var hueValue;
var hueDifference;
var hueShiftSpeed;

function setup() {
	
	createCanvas(windowWidth, windowHeight);
	
	// rather than using RGB, we are going to define
	// colors by Hue Saturation and Brightness values
	colorMode(HSB, // use HSB instead of RGB
			  360, // hue max
			  100, // saturation max
			  100, // brightness max
			  1); // alpha max

	// how many degrees apart the two colors are.
	// A value of 180 gives us complementary colors.
	hueDifference = 180;
	// The current hue value, always gauranteed to be
	// between 0 - 360.
	hueValue = 0; 
	// How much hueValue will be incremented by each frame.
	hueShiftSpeed = 0.33;
}

function draw() {

	// by default, P5 draws shapes with black outlines
	// let's disable this.
	noStroke();

	var saturation = 75;
	// here we are using the modulus (%) operator, which keeps hueValue in a 
	// range from 0-360. This operation wraps around values by returning their
	// remainder if they are greater than 360. (e.g. 380 becomes 20).
	color1 = color(hueValue % 360, saturation, 100);
	// we are adding hueDifference to hueValue before the modulus operation
	color2 = color((hueValue + hueDifference) % 360, saturation, 100);

	// draw the left background rectangle
	fill(color1); // set the drawing color
	rect(0, 0, windowWidth * 0.5, windowHeight);

	// draw the right background rectangle
	fill(color2);
	rect(windowWidth * 0.5, 0, windowWidth * 0.5, windowHeight);

	// Date.now() returns milliseconds, so 
	// dividing by 1000 gives us a value in seconds
	var time = Date.now() / 1000 * 2;

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

	// increment the hueValue by one each frame
	hueValue += hueShiftSpeed;
}

// called when the window is resized
function windowResized() {
  // here we resize the canvas by the new window width and height
  // to assure that our canvas is always "fullscreen".
  resizeCanvas(windowWidth, windowHeight);
}