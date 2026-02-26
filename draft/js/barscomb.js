const barTwoSketch = (p) => {
    let canvasbar;
    let inter;
    let otFont = null;

    let counter = 0;
    let lox, loxTwo;
    let speedxTwo = 1;
    let speedx = -1;
    var pgPos = 62.5;

    p.preload = () => {
        inter = p.loadFont('/typefaces/inter-Regular.otf');
    };

    p.setup = () => {
        canvasbar = p.createCanvas(p.windowWidth, p.windowHeight);
        canvasbar.position(0, 0);
        canvasbar.style('position', 'fixed');
        canvasbar.style('z-index', '2');
        canvasbar.style('pointer-events', 'none');

        p.angleMode(p.DEGREES);

        opentype.load('/typefaces/Inter-Regular.otf', (err, font) => {
            if (err) {
                console.error(err);
            } else {
                otFont = font;
            }
        });


        lox = p.windowHeight / 2 + 3000;
        loxTwo = p.windowHeight / 2;
    };

    p.windowResized = () => {
        p.pixelDensity(window.devicePixelRatio);
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
        p.clear();
        console.log(pgPos);
        if (loxTwo < -515) loxTwo = p.width;
        if (loxTwo > p.width + 300) loxTwo = -500;

        loxTwo += speedxTwo;


        // if (pgPos < 0) {
        //     // p.background(p.color(0, 255, 0));
        //     // console.log("green");
        //     pgPos = 0;
        // } unfinished scroll function


        if (lox < -470) lox = p.width;
        if (lox > p.width + 300) lox = 0;
        lox += speedx;


        barfullTwo(0, 1);
        barfull(0, 1);
        counter++;
    };

    function barfullTwo() {
        p.push();
        p.translate(0, pgPos + 10);
        p.rotate(0);
        p.scale(1);

        p.rect(0, 12, p.windowWidth + 10, 20);
        bartextTwo(loxTwo);

        p.pop();
    }

    function bartextTwo(lx) {
        p.push();
        p.translate(lx + 2, 0);
        p.scale(0.8, 1);
        p.fill(0);
        p.textSize(16);

        textTrackingtwo(
            otFont,
            'ALWAYS KNOW WHEN OUR NEXT MEETING IS BY SCANNING YOUR NEAREST QR FLYER',
            0,
            28,
            16,
            -0.05
        );

        p.pop();
    }




    function barfull() {
        p.push();
        p.translate(0, 110 + 10);
        p.rotate(0);
        p.scale(1);

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

        textTrackingtwo(
            otFont,
            'WELCOMING EVEN THE WORST DESIGNERS',
            0,
            28,
            16,
            -0.05
        );

        p.pop();
    }

















    function textTrackingtwo(font, str, x, y, fontSize, trackingEm) {
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

    // p.mouseWheel = (event) => {
    //     pgPos -= event.delta * .2;
    // }

};

new p5(barTwoSketch);
