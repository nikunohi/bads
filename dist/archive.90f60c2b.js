const barfourSketch = (p)=>{
    let canvasbar;
    let inter;
    let otFont = null;
    let counter = 0;
    let speedx, speedy, lox, loy;
    p.preload = ()=>{
        inter = p.loadFont('/typefaces/Inter-Regular.otf');
    };
    const getPageHeight = ()=>{
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    };
    p.setup = ()=>{
        const pageHeight = getPageHeight();
        canvasbar = p.createCanvas(p.windowWidth, pageHeight);
        canvasbar.position(0, 0);
        // canvasbar.style('position', 'fixed');
        canvasbar.style('z-index', '5');
        canvasbar.style('pointer-events', 'none');
        p.angleMode(p.DEGREES);
        opentype.load('/typefaces/Inter-Regular.otf', (err, font)=>{
            if (err) console.error(err);
            else otFont = font;
        });
        speedx = -1;
        speedy = 1;
        lox = p.windowHeight / 2 + 3000;
        loy = p.windowWidth / 2;
    };
    p.windowResized = ()=>{
        p.pixelDensity(window.devicePixelRatio);
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    p.draw = ()=>{
        p.clear();
        if (lox < -1300) lox = p.width;
        if (lox > p.width + 300) lox = 0;
        if (loy < -300) loy = p.height;
        if (loy > p.height + 50) loy = -300;
        lox += speedx;
        loy = 0;
        barfull(0, 1);
        counter++;
    };
    function barfull() {
        p.push();
        p.translate(0, 1950);
        p.rotate(0);
        p.scale(1);
        p.fill(255);
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
        textTracking(otFont, '4.24.25: LEGO PRINTMAKING', 0, 28, 16, -0.05);
        p.pop();
    }
    function textTracking(font, str, x, y, fontSize, trackingEm) {
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
new p5(barfourSketch);

//# sourceMappingURL=archive.90f60c2b.js.map
