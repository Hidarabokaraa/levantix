// Removes the flat cream/white background from the Levantix logo and
// writes a transparent PNG. Run from the project root:  npm i jimp && node tools/make-logo-transparent.js
// Input : images/logo-raw.png  (the cream-background logo)
// Output: images/logo.png       (transparent source logo; copy what you need into assets/img)
const { Jimp } = require("jimp");

const INPUT = "images/logo-raw.png";
const OUTPUT = "images/logo.png";

// Pixels brighter than this (and low-saturation) are treated as background.
const BRIGHTNESS = 205;

(async () => {
  const img = await Jimp.read(INPUT);
  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max - min; // low for the grey cream background
    if (max > BRIGHTNESS && sat < 30) {
      this.bitmap.data[idx + 3] = 0; // make transparent
    }
  });
  await img.write(OUTPUT);
  console.log("Done -> " + OUTPUT);
})();
