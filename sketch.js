let zBereich;

function setup() {
  zBereich = createCanvas(windowWidth, windowHeight);

  zBereich.position(0,0);
  zBereich.style('z-index', '-1');
}

function draw() {
  noStroke();
  /*for(let i = 0; i <= 255; i++) {
    for(let j = 0; j <= 255; j++) {
      for(let l = 0; l <= 255; l++) {
          fill(i, j, l);
      }
    }
  }*/
  fill(255, 50);
  circle(mouseX, mouseY, 24);
}

function mousePressed() {
  background(0);
}