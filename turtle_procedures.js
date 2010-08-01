
function SQUAREPIECE(size) {
    FORWARD(size);
    RIGHT(90);
}

function SQUARE(size) {
    REPEAT(4, SQUAREPIECE, [size]);
}

function RECTANGLE(side1, side2) {
    REPEAT(2, function () {
        SQUAREPIECE(side1);
        SQUAREPIECE(side2);
    });
}


