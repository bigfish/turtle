var CTX, CANVAS_WIDTH, CANVAS_HEIGHT;

function RESET() {
    //clear state
    CTX.restore();
    //save initial state for later restore
    CTX.save();
    //move to center of canvas
    CTX.translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
}

function INIT(canvas) {

    if (canvas.getContext) {
        CTX = canvas.getContext("2d");
    } else {
        return;
    }

    CANVAS_WIDTH = canvas.width;
    CANVAS_HEIGHT = canvas.height;

    //set default line style
    CTX.strokeStyle = "#000000";

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
    var i = 0;
    setTimeout(function () {
        if (i < times) {
            i++;
            fn.apply(this, args);
            arguments.callee();
        }
    },
    0);
}

