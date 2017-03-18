// This sketch uses a frame differencing algorithm to detect motion 
// from a connected webcam. Thanks to Kyle McDonald for the awesome
// examples: https://github.com/kylemcdonald/cv-examples

var color1;
var color2;
var rotationSpeed1;
var rotationSpeed2;
var angleSum1;
var angleSum2;
var debug;

// frame differencing variables
var capture;
var previousPixels;
var threshold;
var motion;

function setup() {

	createCanvas(windowWidth, windowHeight);
	
	color1 = color(49, 174, 212); // blue
	color2 = color(255, 196, 163); // peach
	rotationSpeed1 = 0.02;
	angleSum1 = 0;
	rotationSpeed2 = 0.03;
	angleSum2 = 0;

	threshold = 25.0;
	capture = createCapture(VIDEO);
	capture.size(640, 480);
  	capture.hide();
  	debug = false;
  	motion = 0;
}

function draw() {

	background(223, 223, 204);

	noStroke();
	// when rectMode CENTER changes how rect() parameters are interpretted.
	// Rather than drawing from the top right, the x and y parameters passed
	// into rect() define the center x and y of the rectangle.
	rectMode(CENTER);
	blendMode(DIFFERENCE);

	// the x and y values that are used to translate the large red rectangle
	// are defined as functions of Math.sin().
	var x = map(Math.sin(Date.now() / 1000), -1.0, 1.0, 0, windowWidth);
	var y = map(Math.sin(Date.now() / 2000), -1.0, 1.0, 0, windowHeight);
	
	// push the current matrix so as not to disrupt the drawing of other shapes
	// see: http://p5js.org/reference/#/p5/push
	push();
	// translate to x and y and consider that the new 
	// coordinate origin until pop() is called
	translate(x, y);
	rotate(angleSum1);
	fill(color1);
	// draw with x offset 200 pixels from the new origin to make
	// the red rectangle rotate off axis
	rect(200, 0, windowWidth * 1.5, windowHeight * 1.5);
	pop();

	push();
	translate(width/2, height/2);
	rotate(angleSum2);
	fill(color2);
	rect(0, 0, 300, 300);
	pop();

	// map motion (from frame differencing algorithm) to slight
	// changes in rotation speed of the shapes
	rotationSpeed1 = map(motion, 0, 1500000, 0.01, 0.03);
	rotationSpeed2 = map(motion, 0, 1500000, 0.01, 0.08);
	angleSum1 += rotationSpeed1;
	angleSum2 += rotationSpeed2;

	// this function packages Kyle McDonald's frame differencing example
	// it is used to update the motion variable.
	calculateFrameDiff();
}

function keyPressed() {
	// space bar
	if (keyCode == 32) {
		// if debug is true, this will switch it false, and vv.
		debug = !debug;
	}
}

// called when the window is resized
function windowResized() {
  // here we resize the canvas by the new window width and height
  // to assure that our canvas is always "fullscreen".
  resizeCanvas(windowWidth, windowHeight);
}

function calculateFrameDiff() {

	capture.loadPixels();
 	var total = 0;
  	if(capture.pixels.length > 0) { // don't forget this!
    	
    	if(!previousPixels) {
      		previousPixels = copyImage(capture.pixels, previousPixels);
    	} else {
	      	var w = capture.width, h = capture.height;
	      	var i = 0;
	      	var pixels = capture.pixels;

	      	var thresholdAmount = threshold * 255.0 / 100.0;
	      	thresholdAmount *= 3; // 3 for r, g, b
	      	for(var y = 0; y < h; y++) {
	        	for(var x = 0; x < w; x++) {
	          	// Math.abs is faster than p5 abs
	          	var rdiff = Math.abs(pixels[i+0] - previousPixels[i+0]);
	          	previousPixels[i+0] = pixels[i+0];
	          	var gdiff = Math.abs(pixels[i+1] - previousPixels[i+1]);
	          	previousPixels[i+1] = pixels[i+1];
	          	var bdiff = Math.abs(pixels[i+2] - previousPixels[i+2]);
	          	previousPixels[i+2] = pixels[i+2];
	          	var diffs = rdiff + gdiff + bdiff;
	          	var output = 0;
	          	if(diffs > thresholdAmount) {
	            	output = 255;
	            	total += diffs;
	          	}
	          	pixels[i++] = output;
	          	pixels[i++] = output;
	          	pixels[i++] = output;
			        // also try this:
			        // pixels[i++] = rdiff;
			        // pixels[i++] = gdiff;
			        // pixels[i++] = bdiff;
			        i++; // skip alpha
	        	}
	      	}
    	}
  	}

  	if (total > 0) {
  		motion = total;
  	}

  	if (debug) {
  		capture.updatePixels();
   		blendMode(BLEND);
    	image(capture, 0, 0, 640, 480);
  	}
}

// copy an array, creating a new array if necessary
// usage: dst = copyImage(src, dst)
// based on http://jsperf.com/new-array-vs-splice-vs-slice/113
function copyImage(src, dst) {
	var n = src.length;
  	if(!dst || dst.length != n) {
    	dst = new src.constructor(n);
  	}
  	while(n--) {
    	dst[n] = src[n];
  	}
  	return dst;
}