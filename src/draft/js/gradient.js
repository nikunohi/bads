


const gradientSketch = (p) => {
    let canvasgradient;
    let c1, c2;
    let n;
    console.log("info/gradient.js loaded");

    const getPageHeight = () => {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
    };


    p.setup = () => {

        const pageHeight = getPageHeight();

        canvasgradient = p.createCanvas(p.windowWidth, pageHeight);
        canvasgradient.position(0, 0);
        ` // canvasgrid.style('position', 'fixed');`
        // canvasgrid.style('top', '0');
        // canvasgrid.style('left', '0');
        canvasgradient.style('z-index', '-6');
        canvasgradient.style('pointer-events', 'none');




        c1 = p.color(200);
        c2 = p.color(239, 239, 239);
        for (let y = 0; y < p.height; y++) {
            n = p.map(y, 0, p.height, 0, 1);
            let newc = p.lerpColor(c1, c2, n);
            p.stroke(newc);
            p.line(0, y, p.width, y);
        }



        p.angleMode(p.DEGREES);
    };

    p.windowResized = () => {
        const pageHeight = getPageHeight();

        p.pixelDensity(window.devicePixelRatio);
        p.resizeCanvas(p.windowWidth, pageHeight);

    };

    p.draw = () => {
        // p.clear();
        p.stroke(125);
        p.strokeWeight(.5);
        // p.background(255, 105, 180);




    };
};

new p5(gradientSketch);