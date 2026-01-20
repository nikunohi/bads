let canvasbarTwo;
let interTwo;

let counterTwo = 0;
let speedxThree, speedyTwo, loxThree, loyThree, loxFour;

let otFontTwo = null;

function preload() {
    interTwo = loadFont('/typefaces/Inter-Regular.otf');

}



// var myElement = hypeDocument.getElementById("theUniqueIDFromStepOne");
// myElement.style["pointer-events"] = "none";
// myElement.style["pointerEvents"] = "none"; 



function setup() {

    canvasbarTwo = createCanvas(windowWidth, windowHeight);
    canvasbarTwo.position(0, 0);
    canvasbarTwo.style("z-index", "-5");
    canvasbarTwo.style('pointer-events', 'none');
    angleMode(DEGREES);
    // background(225);

    opentype.load('/typefaces/Inter-Regular.otf', (err, font) => {
        if (err) {
            console.error('asdasd', err);
        } else {
            otFontTwo = font;
            console.log('hjkhgghj');
        }
    });



    speedx = -1;
    speedxThree = 1;
    speedy = 1;
    lox = windowHeight / 2;
    loy = windowWidth / 2;
    loxThree = windowHeight / 2;

    // fill(255);


}



function windowResized() {
    pixelDensity(window.devicePixelRatio);
    resizeCanvas(windowWidth, windowHeight);

}

function draw() {
    background('#efefef');

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



    if (loxThree < 0 - 370) {
        loxThree = width;
    }
    if (loxThree > width + 300) {
        loxThree = 0;
    }


    loxThree += speedxThree;

    loy = 0;


    
    barfullTwo(0);
    counter += 1;


}




function barfullTwo(rot, sc) {
    push();

    translate(0, 70)
    rotate(0);
    scale(1);

    rect(0, 12, windowWidth + 10, 20);
    bartextTwo(loxThree);
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
        otFontTwo,
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


