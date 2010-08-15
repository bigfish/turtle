//Turtle graphics in global scope
//(uses global functions for easier interactive use)
//but only suports a single Turtle context
//for OOP style use turtle.js & turtle_procedures.js

var CTX, CANVAS_WIDTH, CANVAS_HEIGHT;

function RESET() {
    //clear state
    CTX.restore();
    //save initial state for later restore
    CTX.save();
    //delete everything
    CTX.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    //move to center of canvas
    CTX.translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
}

function INIT(canvas) {
    
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

    //set default line style
    CTX.strokeStyle = "#000000";
    CTX.save();
    RESET();
}

function FORWARD(len) {
    CTX.beginPath();
    CTX.moveTo(0, 0);
    //forwards = up : reverse the Y coordinate
    CTX.lineTo(0, - len);
    CTX.translate(0, - len);
    CTX.stroke();
}

function BACK(len) {
    FORWARD( - len);
}

function RIGHT(angle) {
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

