var gDebugMode = true;

// Setup code goes here
function setup() {
  createCanvas(1000, 800);

  print(width/2);

  textSize(24);
  textAlign(LEFT);
 }


// Draw code goes here
function draw() {
  background(221, 193, 245);

  backhair();
  // face base and facial features
  ears();
  neck();
  face();
  nose();
  eyes();
  // hair base 
  hair();
  torso();
  //glasses();

  if (gDebugMode == true) {
  	drawDebugInfo();
  }

}

function face() {
	noStroke();
	fill(247, 148, 196);

	//starting circle
	circle(width/2, height/2 - 100, 300);

	//lines
	beginShape();
	vertex(360, 355);
	vertex(380, 447);
	vertex(620, 447);
	vertex(640, 355);
	endShape(CLOSE); 

	beginShape();
	vertex(380, 447);
	vertex(465, 531);
	vertex(535, 531);
	vertex(620, 447);
	endShape(CLOSE); 

	stroke(214, 103, 130);
	strokeWeight(3);

	//smile
	arc(500, 420, 110, 15, 0, PI);
	noStroke();

}

function ears() {
	noStroke();
	fill(247, 148, 196);
	circle(365, 370, 95);
	circle(635, 370, 95);
}

function eyes() {
	noStroke();

	push();
	translate(425, 344);
	rotate(-.2);
	arc(0, 0, 75, 70, PI, 0, CLOSE);
	stroke(0);
	arc(0, 0, 75, 70, PI, 0, CLOSE);
	noStroke();


	fill(255);
	arc(0, 0, 75, 30, 0, PI, CLOSE);

	fill(0);
	ellipse(10, -5, 50, 50);
	pop();

	push();
	translate(575, 344);
	rotate(.2);
	arc(0, 0, 75, 70, PI, 0, CLOSE);
	arc(0, 0, 75, 30, 0, PI, CLOSE);

	stroke(0);
	arc(0, 0, 75, 70, PI, 0, CLOSE);
	noStroke();

	fill(0);
	arc(0, 0, 75, 70, -3, -2, CLOSE);
	ellipse(-10, -5, 50, 50);
	pop();
}

function neck() {
	noStroke();
	fill(227, 107, 161);
	beginShape();
	vertex(433, 500);
	vertex(433, 600);
	vertex(567, 600);
	vertex(567, 500);
	endShape(CLOSE);
}

function nose() {
	noStroke();
	fill(214, 103, 130);
	circle(485, 398, 5);
	circle(515, 398, 5);
	fill(255);
	push();
	translate(width/2 - 20, height/2 - 20);
	rotate(.5);
	ellipse(0,0,20,25);
	pop();
}

function hair() {
	noFill()
	stroke(255);
	arc(width/2, 130, 280, 50, PI, 0, OPEN);

	noStroke();
	fill(156, 40, 92);
	
	//scalp
	arc(width/2, height/2 - 100, 300, 300, 3, 4.7, OPEN);
	arc(width/2, height/2 - 100, 300, 300, 4.7, 6.4, OPEN);
	

	arc(720, 90, 475, 475, 1.88, 3, OPEN);
	arc(280, 90, 475, 475, .1, 1.27, OPEN);
	// arc(365, 180, 275, 275, -.225, 1.68, OPEN);

	//bun
	arc(width/2, 150, 150, 110, 2.5 , 1);

	noFill()
	stroke(255);
	arc(width/2, 130, 280, 50, 0, PI, OPEN);
	

}

function backhair() {
	noStroke();
	fill(156, 40, 92);

	circle(390, 588, 150);
	circle(610, 588, 150);

	rect(353, 323, 290,350);

}

function torso() {
	noStroke();
	fill(148, 62, 125);
	// fill(255, 166, 188);
	beginShape();
	vertex(433, 600);
	vertex(207, 677);
	vertex(142, height);
	vertex(858, height);
	vertex(793, 677);
	vertex(567, 600);
	endShape(CLOSE);
}

function drawDebugInfo() {
	fill(255);
  	text("X: " + mouseX + "   Y: " + mouseY, 40, 40);
  	stroke(0);
  	strokeWeight(4);
  	strokeWeight(1);
}

// keyTyped gets triggered 
function keyTyped() {
  if (key === ' ') {
    //gDebugMode =!gDebugMode;
  }
 }
