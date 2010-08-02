
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
function TRIANGLE(size) {
    REPEAT(3, function () {
        FORWARD(size);
        RIGHT(120);
    });
}

function HOUSE(size) {
    SQUARE(size);
    FORWARD(size);
    RIGHT(30);
    TRIANGLE(size);
}

function THING() {
    FORWARD(100);
    RIGHT(90);
    FORWARD(100);
    RIGHT(90);
    FORWARD(50);
    RIGHT(90);
    FORWARD(50);
    RIGHT(90);
    FORWARD(100);
    RIGHT(90);
    FORWARD(25);
    RIGHT(90);
    FORWARD(25);
    RIGHT(90);
    FORWARD(50);
}

function CIRCLE(size) {
    REPEAT(360, function () {
        FORWARD(size);
        RIGHT(1);
    });
}

function ARCR(r, deg) {
    REPEAT(deg, function () {
        FORWARD(r);
        RIGHT(1);
    });
}

function ARCL(r, deg) {
    REPEAT(deg, function () {
        FORWARD(r);
        LEFT(1);
    });
}

function PETAL(size) {
    ARCR(size, 60);
    RIGHT(120);
    ARCR(size, 60);
    RIGHT(120);
}

function FLOWER(size) {
    REPEAT(6, function () {
        PETAL(size);
        RIGHT(60);
    });
}




