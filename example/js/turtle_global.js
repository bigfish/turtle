//Turtle graphics in global scope
//(uses global functions for easier interactive use)
//but only suports a single Turtle context
//for OOP style use turtle.js & turtle_procedures.js
var CTX, CANVAS_WIDTH, CANVAS_HEIGHT, BG, FG, XCOR, YCOR, ROTATION, PEN_DOWN;

function RESET() {
    //reset transform matrix to default
    CTX.setTransform(1, 0, 0, 1, 0, 0);
    //delete everything
    CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //fill with background color
    CTX.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    XCOR = CANVAS_WIDTH / 2;
    YCOR = CANVAS_HEIGHT / 2;
    ROTATION = 90;
    PEN_DOWN = true;
    //move to center of canvas
    CTX.translate(XCOR, YCOR);
}

function INIT(canvas, bg, fg) {

    if (typeof canvas === "string") {
        canvas = document.getElementById(canvas);
    }
    if (canvas.getContext) {
        CTX = canvas.getContext("2d");
    } else {
        return;
    }

    CANVAS_WIDTH = canvas.width;
    CANVAS_HEIGHT = canvas.height;

    BG = bg || "#000000";
    FG = fg || "#00FF00";

    CTX.fillStyle = BG;
    CTX.strokeStyle = FG;

    CTX.save();
    RESET();
}

function FORWARD(len) {
    CTX.beginPath();
    CTX.moveTo(0, 0);
    //forwards = up : reverse the Y coordinate
    if (PEN_DOWN) {
        CTX.lineTo(0, - len);
        CTX.translate(0, - len);
        CTX.stroke();
    } else {
        CTX.moveTo(0, -len);
        CTX.translate(0, -len);
    }

    //update XCOR & YCOR 
    XCOR += len * Math.cos(ROTATION * Math.PI / 180);
    YCOR += len * Math.sin(ROTATION * Math.PI / 180);
}

function BACK(len) {
    FORWARD( - len);
}

function RIGHT(angle) {
    ROTATION -= angle;
    ROTATION %= 360;
    CTX.rotate(angle * Math.PI / 180);
}

function LEFT(angle) {
    RIGHT( - angle);
}

function REPEAT(times, fn, args) {
    for (var i = 0; i < times; i++) {
        fn.apply(this, args || []);
    }
}

function BEARING() {
    return ROTATION + 90;
}

function PENDOWN() {
    PEN_DOWN = true;
}
function PENUP() {
    PEN_DOWN = false;
}
