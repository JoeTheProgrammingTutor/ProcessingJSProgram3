var stopHere;

function setup() {
	createCanvas(400, 400);
	stopHere = 0;
}

function drawSpiral(cx, cy, radi) {
	var sx, sy, sradi;
	stroke(255);
	fill(0, 125, 240);
	sradi = 0;
	for (var i=0; i < stopHere; i++) {
		sx = cx + sradi*sin(radians(i));
		sy = cy + sradi*cos(radians(i));
		ellipse(sx, sy, sradi/5, sradi/5);
		sradi = sradi + radi/720;
	}
	//advance the loop parameter so each frame it animates more
	//as long as we haven’t reach 720 (visually pleasing)
	if ( stopHere < 720) {
		stopHere = stopHere + 1;
	}
}
function draw() {
	background(12, 34, 56);
	drawSpiral(width/2, height/2, 80);
	drawSpiral(100, 100, 60);
}