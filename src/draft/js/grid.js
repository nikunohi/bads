


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
        canvasgrid.style('z-index', '-1');
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
        p.drawingContext.setLineDash([1, 2.5]);

        // p.line(p.windowWidth / 8, 0, p.windowWidth / 8, p.height);
        // p.line(p.windowWidth / 8 * 3, 0, p.windowWidth / 8 * 3, p.height);
        p.line(p.windowWidth / 8 * 7, 0, p.windowWidth / 8 * 7, p.height);

        // p.line(0, 0, p.windowWidth, p.height);

        p.line(0, p.windowHeight / 13 * 5.25, p.windowWidth, p.windowHeight / 13 * 5.25);
        // p.line(0, p.windowHeight / 13 * 8.15, p.windowWidth, p.windowHeight / 13 * 8.15);
        p.line(0, p.windowHeight / 13 * 11.05, p.windowWidth, p.windowHeight / 13 * 11.2);

        // p.line(0, p.windowHeight / 13 * 13.95, p.windowWidth, p.windowHeight / 13 * 13.95);


        p.line(0, p.windowHeight * 2 / 26 * 16.85, p.windowWidth, p.windowHeight * 2 / 26 * 16.85);
        // p.line(0, p.windowHeight * 2 / 26 * 19.75, p.windowWidth, p.windowHeight * 2 / 26 * 19.75);
        p.line(0, p.windowHeight * 2 / 26 * 22.65, p.windowWidth, p.windowHeight * 2 / 26 * 22.65);

        // p.line(0, p.windowHeight * 2 / 26 * 25.55, p.windowWidth, p.windowHeight * 2 / 26 * 25.55);


        p.line(0, p.windowHeight * 3 / 39 * 28.45, p.windowWidth, p.windowHeight * 3 / 39 * 28.45);
        // p.line(0, p.windowHeight * 3 / 39 * 31.35, p.windowWidth, p.windowHeight * 3 / 39 * 31.35);
        p.line(0, p.windowHeight * 3 / 39 * 34.25, p.windowWidth, p.windowHeight * 3 / 39 * 34.25);

        // p.line(0, p.windowHeight * 3 / 39 * 37.15, p.windowWidth, p.windowHeight * 3 / 39 * 37.15);

   


        p.line(0, p.windowHeight * 4 / 52 * 40.05, p.windowWidth, p.windowHeight * 4 / 52 * 40.05);
        // p.line(0, p.windowHeight * 4 / 52 * 42.95, p.windowWidth, p.windowHeight * 4 / 52 * 42.95);
        p.line(0, p.windowHeight * 4 / 52 * 45.85, p.windowWidth, p.windowHeight * 4 / 52 * 45.85);


        p.drawingContext.setLineDash([]);

    };
};

new p5(gridSketch);