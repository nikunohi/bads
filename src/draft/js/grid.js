


const gridSketch = (p) => {
    let canvasgrid;

    console.log("info/grid.js loaded");

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

        canvasgrid = p.createCanvas(p.windowWidth, pageHeight);
        canvasgrid.position(0, 0);
       ` // canvasgrid.style('position', 'fixed');`
        // canvasgrid.style('top', '0');
        // canvasgrid.style('left', '0');
        canvasgrid.style('z-index', '-2');
        canvasgrid.style('pointer-events', 'none');

        p.angleMode(p.DEGREES);
    };  

    p.windowResized = () => {
        const pageHeight = getPageHeight();
        p.pixelDensity(window.devicePixelRatio);
        p.resizeCanvas(p.windowWidth, pageHeight);

    };

    p.draw = () => {
        p.clear();
        p.stroke(125);
        p.strokeWeight(.5);
        p.drawingContext.setLineDash([1, 3.5]);

        p.line(p.windowWidth / 8 * 7, 0, p.windowWidth / 8 * 7, p.height);
        p.line(0, p.windowHeight / 13 * 5.25, p.windowWidth, p.windowHeight / 13 * 5.25);
        p.line(0, p.windowHeight / 13 * 11.05, p.windowWidth, p.windowHeight / 13 * 11.2);

        p.drawingContext.setLineDash([]);

    };
};

new p5(gridSketch);