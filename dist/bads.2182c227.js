const barTwoSketch = (p)=>{
    let canvasbar;
    let inter;
    let otFont = null;
    let counter = 0;
    let loxTwo;
    let speedxTwo = 1;
    p.preload = ()=>{
        inter = p.loadFont('../../typefaces/Inter-Regular.otf');
    };
    p.setup = ()=>{
        canvasbar = p.createCanvas(p.windowWidth, p.windowHeight);
        canvasbar.position(0, 0);
        canvasbar.style('position', 'fixed');
        canvasbar.style('z-index', '2');
        canvasbar.style('pointer-events', 'none');
        p.angleMode(p.DEGREES);
        opentype.load('../../typefaces/Inter-Regular.otf', (err, font)=>{
            if (err) console.error(err);
            else otFont = font;
        });
        loxTwo = p.windowHeight / 2;
    };
    p.windowResized = ()=>{
        p.pixelDensity(window.devicePixelRatio);
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    p.draw = ()=>{
        p.clear();
        if (loxTwo < -515) loxTwo = p.width;
        if (loxTwo > p.width + 300) loxTwo = -500;
        loxTwo += speedxTwo;
        barfullTwo(0, 1);
        counter++;
    };
    function barfullTwo() {
        p.push();
        p.translate(0, 72.5);
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
        textTrackingtwo(otFont, 'ALWAYS KNOW WHEN OUR NEXT MEETING IS BY SCANNING YOUR NEAREST QR FLYER', 0, 28, 16, -0.05);
        p.pop();
    }
    function textTrackingtwo(font, str, x, y, fontSize, trackingEm) {
        if (!font || !str) return;
        let trackingPx = trackingEm * fontSize;
        let penX = x;
        let scale = fontSize / font.unitsPerEm;
        for(let i = 0; i < str.length; i++){
            let glyph = font.charToGlyph(str[i]);
            let nextGlyph = i < str.length - 1 ? font.charToGlyph(str[i + 1]) : null;
            let path = glyph.getPath(penX, y, fontSize);
            path.draw(p.drawingContext);
            let advance = glyph.advanceWidth * scale;
            if (nextGlyph) advance += font.getKerningValue(glyph, nextGlyph) * scale;
            if (i < str.length - 1) advance += trackingPx;
            penX += advance;
        }
        penX += fontSize * 0.25;
    }
};
new p5(barTwoSketch);

//# sourceMappingURL=bads.2182c227.js.map
