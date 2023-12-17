let thonk;
const charRamp = " .:-=+*#%@".split('').reverse().join('');
const charRampTwo = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

function preload() {
  thonk = loadImage('thonk-45x60.jpg'); 
}

function setup() {
  createCanvas(500, 400);
  background(0);
  fill(255);
  noLoop();
}

function draw() {

  let w = width / thonk.width;
  let h = height / thonk.height;

  thonk.loadPixels();
        
  for (let i = 0; i < thonk.width; ++i) {
    for (let j = 0; j < thonk.height; ++j) {
        const pixelIndex = (i + (j * thonk.width)) * 4;
        const r = thonk.pixels[pixelIndex + 0];
        const g = thonk.pixels[pixelIndex + 1];
        const b = thonk.pixels[pixelIndex + 2];
        const avg = (r + g + b) / 3;
 
        const len = charRamp.length;
        const charIndex = floor(map(avg, 0, 255, 0, len));

        text(charRamp.charAt(charIndex), i * w, j * h);
    }
  }

}
