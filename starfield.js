/* Credits to The Coding Train */

let speed = 2.5;

window.wallpaperPropertyListener = {
  applyUserProperties: function(properties) {
    if (properties.speed) {
      if (properties.speed.value !== "") {
          speed = properties.speed.value;
      }
    }
  }
}

class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.b = random(100, 255);
  }
  
  update() {
    this.z -= speed;
    
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }
  
  show() {
    fill(this.b, this.b, this.b);
    noStroke();
    
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    
    let r = map(this.z, 0, width, 4, 0);
    square(sx, sy, r);
  }
}

let stars = new Array(2000);

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  for (let i = 0; i < stars.length; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}