var CTX, CANVAS_WIDTH, CANVAS_HEIGHT;

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
}

function START() {
    //clear state
    CTX.restore();
    //save initial state for later restore
    CTX.save();
    //clear path points
    CTX.beginPath();
    //move to center of canvas
    CTX.translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    //add first point of path at center
    CTX.moveTo(0, 0);
}

function END() {
    //render path which was created
    CTX.stroke();
}

function FORWARD(len) {
    //forwards = up 
    CTX.lineTo(0, -len);
    //CTX.stroke();
    CTX.translate(0, -len);
}

function BACK(len) {
    //forwards = up 
    CTX.lineTo(0, len);
    //CTX.stroke();
    CTX.translate(0, len);
}

function RIGHT(angle) {
    CTX.rotate(angle * Math.PI / 180);
}
function LEFT(angle) {
    CTX.rotate( - angle * Math.PI / 180);
}

