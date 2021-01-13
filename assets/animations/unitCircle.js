let x = 100.0;
let y = 0.0;
let x_1 = 0;
let y_1 = 0;
function setup(){
    var viewport = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const winWidth = viewport;
    const winHeight = winWidth/2;
    const canvas = createCanvas(winWidth, winHeight);
    canvas.parent('sketch-unitCircle')
    frameRate(60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth / 2);
}

function easeInOut(t, b, c, d){
    t=t / (d / 2);
    if(t < 1) {
        return c / 2 * t * t * t + b;
    }
    t-=2;
    return c / 2 * (t * t * t + 2) + b;
}

function draw(){
    let zoom;
    let z_out = 0.5;
    if(frameCount % (60 * 12) == frameCount % (60 * 6)) zoom=easeInOut(frameCount % (60 * 6), 0, z_out, 60 * 6);
    else zoom=easeInOut(frameCount % (60 * 6), z_out, -z_out, 60 * 6);
    translate(width / 2, height / 2);
    scale(1.9 - zoom, -1.9 + zoom);
    background(232);
    stroke(0);
    noFill();
    circle(0, 0, 200);
    fill(255);
    let duration = 60 * 12;
    let rotation = easeInOut(frameCount % duration, 0, 2 * PI, duration);
    // rotate(-rotation / 2);
    let tangent = 1.0 / cos(rotation);
    tangent*=100;
    line(x_1, 0, x_1, y_1);
    stroke(190);
    line(tangent, 0, 0, 0);
    stroke(0);
    line(-x, 0, x, y);
    x_1=(x * cos(rotation)) - (y * sin(rotation));
    y_1=(x * sin(rotation)) + (y * cos(rotation));
    stroke(0, 120, 255);
    line(0, 0, x_1, y_1);
    line(tangent, 0, x_1, y_1);
    stroke(0);
    circle(tangent, 0, 5);
    circle(0, 0, 10);
    circle(x, y, 10);
    circle(x_1, y_1, 10);
}

