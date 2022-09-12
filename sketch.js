var cloud = {
  xpos: 200,
  ypos: 90,
  minX: 105,
  maxX: 315,
  minY: 65,
  maxY: 130
};

var bug = {
  xpos: 200,
  ypos: 300,
};

var leaf = {
  xpos: 200,
  ypos: 300,
}

var rain = {
  xpos: [],
  ypos: []
}

var jump = false

function setup() {
  createCanvas(400, 400);
}

function draw() {  
  // Gradient background //
  for (let y = 0; y < height; y++) {
    stroke(165-y, 193-y, 248-y)
    line(0, height-y, width, height-y);
  }
  
  // draw everything else
  noStroke();
  drawCloud();
  drawLeaf();
  drawBug();
  drawRain();
}


function mousePressed() {
  if (mouseX > cloud.minX && mouseX < cloud.maxX && mouseY > cloud.minY && mouseY < cloud.maxY) {
    rain.xpos.push(mouseX);
    rain.ypos.push(mouseY);
  }
  if (mouseX > bug.xpos - 50 && mouseX < bug.xpos + 75 && mouseY > bug.ypos - 50 && mouseY < bug.ypos + 50) {
    jump = true
    bug.ypos--;
  }
}

function drawLeaf() {
  fill(175, 230, 121);
  push();
  rotate(-0.2);
  triangle(leaf.xpos-80, leaf.ypos+90, leaf.xpos-80, leaf.ypos+2, leaf.xpos-180, leaf.ypos+50);
  triangle(leaf.xpos-20, leaf.ypos+90, leaf.xpos-20, leaf.ypos+2, leaf.xpos+80, leaf.ypos+50);
  ellipse(leaf.xpos-50, leaf.ypos+50, 200, 100);
  rect(leaf.xpos-180, leaf.ypos + 30, 10, 90);
  pop();
  
}

function drawRain() {
  fill(157, 241, 251);
  
  // keey drawing all the raindrops that were added.
  for (let i = 0; i < rain.xpos.length; i++) {
    triangle(rain.xpos[i]-5, rain.ypos[i], rain.xpos[i]+5, rain.ypos[i], rain.xpos[i], rain.ypos[i]-10);
    ellipse(rain.xpos[i], rain.ypos[i], 10, 10);
    
    rain.ypos[i] += 1;  // This makes the rain fall.
    
    // When rain hits bottom, it starts falling from the cloud again.
    if (rain.ypos[i] == height) {  
      rain.ypos[i] = 90;
    }
  }
}

function drawCloud() {
  fill(120);
  ellipse(cloud.xpos, cloud.ypos, 100, 100);
  ellipse(cloud.xpos-50, cloud.ypos, 60, 50);
  ellipse(cloud.xpos-50, cloud.ypos+30, 90, 50);
  ellipse(cloud.xpos+30, cloud.ypos+20, 170, 60);
  ellipse(cloud.xpos+30, cloud.ypos+40, 130, 40);
  ellipse(cloud.xpos+30, cloud.ypos, 130, 60);
}

function drawBug() {
  // body //
  fill(120);
  ellipse(bug.xpos, bug.ypos, 100, 60);
  fill(243, 80, 84);
  arc(bug.xpos, bug.ypos, 100, 100, PI, 0);
  
  // Spots //
  fill(0);
  ellipse(bug.xpos, bug.ypos - 10, 13, 10);
  ellipse(bug.xpos + 20, bug.ypos - 20, 13, 10);
  ellipse(bug.xpos - 20, bug.ypos - 30, 13, 10);
  ellipse(bug.xpos - 35, bug.ypos - 15, 13, 10);
  ellipse(bug.xpos + 10, bug.ypos - 35, 13, 10);
  
  // Head //
  fill(120);
  ellipse(bug.xpos + 50, bug.ypos, 50, 50);  
  
  /// Antennae ///
  stroke(120);
  strokeWeight(4);
  noFill();
  // right antenna //
  beginShape();  
  curveVertex(bug.xpos + 40, bug.ypos);
  curveVertex(bug.xpos + 40, bug.ypos - 10);
  curveVertex(bug.xpos + 40, bug.ypos - 40);
  curveVertex(bug.xpos + 50, bug.ypos - 50);
  curveVertex(bug.xpos + 60, bug.ypos - 40);
  curveVertex(bug.xpos + 55, bug.ypos - 35);
  curveVertex(bug.xpos + 50, bug.ypos - 40);
  curveVertex(bug.xpos + 50, bug.ypos - 40);
  endShape();
  // left antenna //
  beginShape();  
  curveVertex(bug.xpos + 70, bug.ypos);
  curveVertex(bug.xpos + 70, bug.ypos - 0);
  curveVertex(bug.xpos + 70, bug.ypos - 30);
  curveVertex(bug.xpos + 80, bug.ypos - 40);
  curveVertex(bug.xpos + 90, bug.ypos - 30);
  curveVertex(bug.xpos + 85, bug.ypos - 25);
  curveVertex(bug.xpos + 80, bug.ypos - 30);
  curveVertex(bug.xpos + 80, bug.ypos - 30);
  endShape();
  
  // legs //
  // front legs
  line(bug.xpos - 35, bug.ypos + 10, bug.xpos - 40, bug.ypos+40);
  line(bug.xpos, bug.ypos + 10, bug.xpos - 5, bug.ypos+45);
  line(bug.xpos + 25, bug.ypos + 10, bug.xpos + 25, bug.ypos+45);
  
  // back legs
  line(bug.xpos - 40, bug.ypos + 10, bug.xpos - 45, bug.ypos+30);
  line(bug.xpos-5, bug.ypos + 10, bug.xpos - 10, bug.ypos+35);
  line(bug.xpos + 30, bug.ypos + 10, bug.xpos + 20, bug.ypos+35);
  
  
  // Eyes //
  noStroke();
  fill(0);
  ellipse(bug.xpos + 45, bug.ypos, 15, 15);
  ellipse(bug.xpos + 62, bug.ypos, 15, 15);
  // eye sparkle //
  fill(255);
  ellipse(bug.xpos + 47, bug.ypos-2, 5, 5);
  ellipse(bug.xpos + 64, bug.ypos-2, 5, 5);
  ellipse(bug.xpos + 41, bug.ypos+1, 3, 3);
  ellipse(bug.xpos + 58, bug.ypos+1, 3, 3);
  ellipse(bug.xpos + 43, bug.ypos+3, 2.5, 2.5);
  ellipse(bug.xpos + 60, bug.ypos+3, 2.5, 2.5);
  // blush //
  fill(255, 176, 227);
  ellipse(bug.xpos+43, bug.ypos+7, 10, 5);
  ellipse(bug.xpos+65, bug.ypos+7, 10, 5);
  noFill();
  stroke(0)
  strokeWeight(1);
  // mouth //
  arc(bug.xpos+54, bug.ypos+10.5, 8, 3, 0, PI);
  noStroke();
  
  
  /// jump ///
  if (jump) {
    if (bug.ypos > width/2 + 15) {
      bug.ypos -= 4;
    }
    else {
      jump = false;
    }
  }
  else {
    if (bug.ypos != 300) {
      bug.ypos += 4;
      if (bug.ypos > 300) {
        bug.ypos = 300;
      }
    }
  }
}
