// let canvasgrid;
// function setup() {
//     canvasgrid = createCanvas(windowWidth, windowHeight);
//     canvasgrid.position(0, 0);
//     canvasgrid.style("z-index", "-2");
//     canvasgrid.style('pointer-events', 'none');
//     angleMode(DEGREES);
//     // background(225);
// }
// function windowResized() {
//     pixelDensity(window.devicePixelRatio);
//     resizeCanvas(windowWidth, windowHeight);
// }
// function draw() {
//     // clear();
//     // square(mouseX, mouseY, 200);
//     // fill(255);
//     setLineDash([5, 5]); //another dashed line pattern
//     line(windowWidth / 8 * 7, 0, windowWidth / 8 * 7, windowHeight);
//     line(0 * 7, windowHeight/13*4.5, windowWidth, windowHeight/13*4.5);
//     line(0 * 7, windowHeight/13*9, windowWidth, windowHeight/13*9);
//     setLineDash([]);
// }
// function setLineDash(list) {
//     drawingContext.setLineDash(list);
// }
const gridSketch = (p)=>{
    let canvasgrid;
    const getPageHeight = ()=>{
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    };
    p.setup = ()=>{
        const pageHeight = getPageHeight();
        canvasgrid = p.createCanvas(p.windowWidth, pageHeight);
        canvasgrid.position(0, 0);
        // canvasgrid.style('position', 'fixed');
        // canvasgrid.style('top', '0');
        // canvasgrid.style('left', '0');
        canvasgrid.style('z-index', '-4');
        canvasgrid.style('pointer-events', 'none');
        p.angleMode(p.DEGREES);
    };
    p.windowResized = ()=>{
        const pageHeight = getPageHeight();
        p.pixelDensity(window.devicePixelRatio);
        p.resizeCanvas(p.windowWidth, pageHeight);
    };
    p.draw = ()=>{
        p.clear();
        p.drawingContext.setLineDash([
            5,
            5
        ]);
        p.line(p.windowWidth / 8, 0, p.windowWidth / 8, p.height);
        p.line(0, p.windowHeight / 13 * 6.15, p.windowWidth, p.windowHeight / 13 * 6.15);
        p.line(0, p.windowHeight / 13 * 12, p.windowWidth, p.windowHeight / 13 * 12);
        p.drawingContext.setLineDash([]);
    };
};
new p5(gridSketch);

//# sourceMappingURL=info.19e7dc92.js.map
