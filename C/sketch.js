function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(220, 120, 120);

  strokeWeight(2);
  let pitch = 100;
  let sqDim = 0.9 * pitch;
  translate(pitch / 2, pitch / 2);

  randomSeed(1010);
  // draw a column of rows
  for (let y = 0; y < height; y += pitch) {
    // draw a row of squares
    for (let x = 0; x < width; x += pitch) {
      let dd = random(16,sqDim);
      let vx = random(-60,10);
      let vy = random(-30,30);
      push();
      translate(x, y);
      rect(vx, vy,dd);
      pop();
    }
  }
}

function draw() {}
