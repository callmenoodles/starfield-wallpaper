let speed = 2.5;
let n_stars = 2000;
const max_stars = 10000;
let color = [255, 255, 255];

window.wallpaperPropertyListener = {
  applyUserProperties: function (properties) {
    if (properties.speed) {
      speed = properties.speed.value;
    }
    if (properties.n_stars) {
      n_stars = properties.n_stars.value;
      max_stars = properties.n_stars.max;
    }
    if (properties.color) {
      let rgb = properties.color.value.split(' ');
      color = rgb.map(c => Math.ceil(c * 255));
    }
  },
};

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
    fill(color[0], color[1], color[2], this.b);
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 4, 0);

    square(sx, sy, r);
  }
}

let stars = new Array(n_stars);

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  for (let i = 0; i < max_stars; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let i = 0; i < n_stars; i++) {
    stars[i].update();
    stars[i].show();
  }
}
