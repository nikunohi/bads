import interFontLink from 'url:../../typefaces/Inter-Regular.otf';

const barSketch = (p) => {
  let canvasbar;
  let inter;
  let otFont = null;

  let counter = 0;
  let speedx, speedy, lox;

  p.preload = () => {
    inter = p.loadFont(interFontLink);
  };

  p.setup = () => {
    canvasbar = p.createCanvas(p.windowWidth, p.windowHeight);
    canvasbar.position(0, 0);
    canvasbar.style('position', 'fixed');
    canvasbar.style('z-index', '-4');
    canvasbar.style('pointer-events', 'none');

    p.angleMode(p.DEGREES);

    opentype.load(interFontLink, (err, font) => {
      if (err) {
        console.error(err);
      } else {
        otFont = font;
      }
    });

    speedx = -1;
    speedy = 1;
    lox = p.windowHeight / 2;

  };

  p.windowResized = () => {
    p.pixelDensity(window.devicePixelRatio);
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.clear();

    if (lox < -340) lox = p.width;



    lox += speedx;


    barfull(0, 1);

  };

  function barfull() {
    p.push();
    p.translate(0, 30 + 20);
    p.rotate(0);
    p.scale(1);
    p.fill('#efefef');
    p.rect(0, 12, p.windowWidth + 10, 20);
    bartext(lox);

    p.pop();
  }

  function bartext(lx) {
    p.push();
    p.translate(lx + 2, 0);
    p.scale(0.8, 1);
    p.fill(0);
    p.textSize(16);

    textTracking(
      otFont,
      'OUR WEBSITE IS CONSTANTLY UNDER CONSTRUCTION',
      0,
      28,
      16,
      -0.05
    );

    p.pop();
  }

  function textTracking(font, str, x, y, fontSize, trackingEm) {
    if (!font || !str) return;

    let trackingPx = trackingEm * fontSize;
    let penX = x;
    let scale = fontSize / font.unitsPerEm;

    for (let i = 0; i < str.length; i++) {
      let glyph = font.charToGlyph(str[i]);
      let nextGlyph = i < str.length - 1 ? font.charToGlyph(str[i + 1]) : null;

      let path = glyph.getPath(penX, y, fontSize);
      path.draw(p.drawingContext);

      let advance = glyph.advanceWidth * scale;

      if (nextGlyph) {
        advance += font.getKerningValue(glyph, nextGlyph) * scale;
      }

      if (i < str.length - 1) {
        advance += trackingPx;
      }

      penX += advance;
    }

    penX += fontSize * 0.25;
  }
};

new p5(barSketch);
