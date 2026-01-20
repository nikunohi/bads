let canvasbar;
let inter;

let counter = 0;
let speedx, speedy, lox, loy, loxTwo;

let otFont = null;

function preload() {
    inter = loadFont('/typefaces/Inter-Regular.otf');

}



// var myElement = hypeDocument.getElementById("theUniqueIDFromStepOne");
// myElement.style["pointer-events"] = "none";
// myElement.style["pointerEvents"] = "none"; 



function setup() {

    canvasbar = createCanvas(windowWidth, windowHeight);
    canvasbar.position(0, 0);
    canvasbar.style("z-index", "2");
    canvasbar.style('pointer-events', 'none');
    angleMode(DEGREES);
    // background(225);

    opentype.load('/typefaces/Inter-Regular.otf', (err, font) => {
        if (err) {
            console.error('asdasd', err);
        } else {
            otFont = font;
            console.log('hjkhgghj');
        }
    });



    speedx = -1;
    speedxTwo = 1;
    speedy = 1;
    lox = windowHeight / 2 -250;
    loy = windowWidth / 2;
    loxTwo = windowHeight / 2;

    // fill(255);


}



function windowResized() {
    pixelDensity(window.devicePixelRatio);
    resizeCanvas(windowWidth, windowHeight);

}

function draw() {
    clear();

    // square(mouseX, mouseY, 200);

    // fill(255);



    if (lox < 0 - 370) {
        lox = width;
    }
    if (lox > width + 300) {
        lox = 0;
    }
    if (loy < -300) {
        loy = height;
    }
    if (loy > height + 50) {
        loy = -300;
    }


    lox += speedx;



    if (loxTwo < 0 - 370) {
        loxTwo = width;
    }
    if (loxTwo > width + 300) {
        loxTwo = 0;
    }


    loxTwo += speedxTwo;

    loy = 0;


    // rect(0, 12, windowWidth + 10, 20);
    // bartext(lox);
    // setLineDash([5, 5]); //another dashed line pattern
    // line(windowWidth / 8 * 7, 0, windowWidth / 8 * 7, windowHeight);
    // line(0 * 7, windowHeight/13*4.5, windowWidth, windowHeight/13*4.5);
    // line(0 * 7, windowHeight/13*9, windowWidth, windowHeight/13*9);
    // setLineDash([]);
    barfull(0);
    barfullTwo(0);
    counter += 1;


}


function barfull(rot, sc) {
    push();

    translate(0, 30)
    rotate(rot);
    scale(sc);

    rect(0, 12, windowWidth + 10, 20);
    bartext(lox);
    pop();

}

function bartext(lx) {
    push();
    translate(lx + 2, 0);
    scale(.8, 1);


    fill(0);

    // textFont(inter);
    textSize(16);
    textTracking(
        otFont,
        'OUR WEBSITE IS CONSTANTLY UNDER CONSTRUCTION',
        0,
        28,
        16,
        -0.05 // tracking em
    );
    // text('OUR WEBSITE IS CONSTANTLY UNDER CONSTRUCTION', 0, 28);
    // ellipse(mouseX, mouseY, 30, 30);
    pop();
}



function textTracking(font, str, x, y, fontSize, trackingEm) {
    if (!font || !str) return;

    let trackingPx = trackingEm * fontSize;
    let penX = x;
    let scale = fontSize / font.unitsPerEm;

    for (let i = 0; i < str.length; i++) {
        let glyph = font.charToGlyph(str[i]);
        let nextGlyph = (i < str.length - 1) ? font.charToGlyph(str[i + 1]) : null;

        let path = glyph.getPath(penX, y, fontSize);
        path.draw(drawingContext);

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



function barfullTwo(rot, sc) {
    push();

    translate(0, 70)
    rotate(rot);
    scale(sc);

    rect(0, 12, windowWidth + 10, 20);
    bartextTwo(loxTwo);
    pop();

}

function bartextTwo(lx) {
    push();
    translate(lx + 2, 0);
    scale(.8, 1);


    fill(0);

    // textFont(inter);
    textSize(16);
    textTrackingtwo(
        otFont,
        'ALWAYS KNOW WHEN OUR NEXT MEETING IS BY SCANNING YOUR NEAREST QR FLYER',
        0,
        28,
        16,
        -0.05 // tracking em
    );

    pop();
}


function textTrackingtwo(font, str, x, y, fontSize, trackingEm) {
    if (!font || !str) return;

    let trackingPx = trackingEm * fontSize;
    let penX = x;
    let scale = fontSize / font.unitsPerEm;

    for (let i = 0; i < str.length; i++) {
        let glyph = font.charToGlyph(str[i]);
        let nextGlyph = (i < str.length - 1) ? font.charToGlyph(str[i + 1]) : null;

        let path = glyph.getPath(penX, y, fontSize);
        path.draw(drawingContext);

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



function setLineDash(list) {
    drawingContext.setLineDash(list);
}

