import interFontLink from 'url:../../typefaces/Inter-Regular.otf';
import textFile from 'url:../../draft/js/textcontent.txt';
import badsPictogram from 'url:../../images/bads-pictogram.png';


const barfourSketch = (p) => {
  let canvasbar;
  let inter;
  let otFont = null;


  let rowHeight;
  let totalRows = 1;

  let xLeft;
  let xRight;
  let scrollSpeed = 1;
  let textContent;

  let col1, col2;

  let img;
  let speedx, speedy, lox, loxTwo;

  p.preload = () => {
    inter = p.loadFont(interFontLink);
    p.loadStrings(textFile, processText);
    img = p.loadImage(badsPictogram);
  };


  function processText(data) {
    textContent = p.join(data, " ");
  }

  p.setup = () => {
    canvasbar = p.createCanvas(p.windowWidth, p.windowHeight);

    xLeft = 0;
    xRight = p.width;
    rowHeight = 40;

    canvasbar.position(0, 0);
    canvasbar.style('position', 'fixed');
    canvasbar.style('z-index', '5');
    canvasbar.style('pointer-events', 'none');

    p.angleMode(p.DEGREES);

    opentype.load(interFontLink, (err, font) => {
      if (err) {
        console.error(err);
      } else {
        otFont = font;
      }
    });

    // speedx = -1.25;
    // speedy = 1;
    // lox = 0;
    // lox = p.windowHeight / 2 + 3000;
    // loxTwo = 0;

  };

  p.windowResized = () => {
    p.pixelDensity(window.devicePixelRatio);
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.clear();
    // barfull(0, 1);
    // if (lox < -825) lox = p.width;
    // if (lox > p.width) lox = 0;

    // if (loxTwo < -825) loxTwo = p.width;
    // if (loxTwo > p.width) loxTwo = 0;


    // loxTwo += speedx;
    // lox += speedx;
    for (let row = 0; row < totalRows; row++) {
      // let y = row * rowHeight;


      col1 = p.color('#d3d3d3');
      col2 = p.color(0);

      if (row % 2 == 0) p.fill(col1);
      else p.fill(col2);

      p.rect(0, p.windowHeight * 0.9, p.width, rowHeight);


    }

    p.textSize(rowHeight);

    let textcontentWidth = p.textWidth(textContent + " ");

    p.textAlign(p.LEFT, p.TOP);
    for (let x = xLeft; x < p.width; x += textcontentWidth) {

      p.fill(col2);
      for (let i = 1; i <= totalRows; i += 2) {
        // p.text(textContent + " ", x, p.windowHeight * 0.75+2.5);
        if (otFont && textContent) {
          p.drawingContext.fillStyle = col2.toString();
          textTracking(
            otFont,
            textContent + " ",
            x,
            p.windowHeight * .9 + 35,
            40,
            -.05
          );
        }
        p.image(img, 9, (p.windowHeight * 0.88) - 11, 95, 95);
      }
      // p.image(img, 9, (p.windowHeight * 0.88)-11, 95, 95);

    }
    xLeft -= scrollSpeed;

    p.textAlign(p.RIGHT, p.BOTTOM);
    for (let x = xRight; x > 0; x -= textcontentWidth) {
      p.fill(col1);
      for (let i = 2; i <= totalRows; i += 2) {
        p.text(textContent + " ", x, rowHeight * i);
      }
    }
    xRight -= scrollSpeed;

    // counter++;
  };



  textTracking(
    otFont,
    textContent,
    0,
    28,
    40,
    -0.05
  );

  // p.pop();


  function textTracking(font, str, x, y, fontSize, trackingEm, scaleX = .75) {
    if (!font || !str) return;

    let ctx = p.drawingContext;
    let trackingPx = trackingEm * fontSize;
    let penX = x;
    let scale = fontSize / font.unitsPerEm;

    ctx.save();

    ctx.translate(x, 0);
    ctx.scale(scaleX, 1);
    ctx.translate(-x, 0);

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
    ctx.restore();

  }

  

  // function barfull() {
  //   p.push();
  //   p.translate(0, p.windowHeight * 0.75);
  //   p.rotate(0);
  //   p.scale(1);
  //   p.fill(175);
  //   p.rect(0, 12, p.windowWidth + 10, 38);
  //   bartext(lox);
  //   bartext2(loxTwo);

  //   p.pop();
  // }

  // function bartext(lx) {
  //   p.push();
  //   p.textAlign(p.CENTER);
  //   p.translate(lx, 18);
  //   p.scale(0.8, 1);
  //   p.fill(0);
  //   p.textSize(40);


  //   textTracking(
  //     otFont,
  //     'FREE BIWEEKLY WORKSHOPS — MATERIALS PROVIDED',
  //     0,
  //     28,
  //     40,
  //     -0.05
  //   );



  //   p.pop();
  // }



};

new p5(barfourSketch);
