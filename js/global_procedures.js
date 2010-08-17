/**
 * Turtle procedures defined as global functions
 * Designed for use in a single-page application
 * such as the TurtleExplorer
 * It requires that the following functions are also defined
 * FORWARD, BACK, RIGHT, LEFT, RESET, REPEAT
 * These functions are used to construct the turtle_procedures.js file
 * which can be passed to the Turtle constructor to add 
 * the procedures to an instance of a Turtle.
 */

function SQUAREPIECE (size) {
    FORWARD(size);
    RIGHT(90);
}

function SQUARE (size) {
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

function RAY(r) {
    REPEAT(2, function () {
        ARCL(r, 90);
        ARCR(r, 90);
    });
}

function SUN(size) {
    REPEAT(9, function () {
        RAY(size);
        RIGHT(160);
    });
}

function POLY(side, angle) {
    REPEAT(360, function () {
        FORWARD(side);
        RIGHT(angle);
    });
}

function NEWPOLY(side, angle) {
    REPEAT(100, function () {
        FORWARD(side);
        RIGHT(angle);
        FORWARD(side);
        RIGHT(2 * angle);
    });
}

function POLYSPI(side, angle, inc) {
    if (inc === undefined) {
        inc = 1;
    }
    FORWARD(side);
    RIGHT(angle);
    if (side < 500) {
        POLYSPI(side + inc, angle, inc);
    }
}

function MULTISPI(side, angle, factor, iter) {
    if (iter === undefined) {
        iter = 1;
    } else {
        iter += 1;
    }

    FORWARD(side);
    RIGHT(angle);

    if (iter < 500) {
        MULTISPI(side * factor, angle, factor, iter);
    }
}

function INSPI(side, angle, inc, iter) {
    iter = (iter === undefined) ? 1: iter;
    FORWARD(side);
    RIGHT(angle);
    if (iter < 500) {
        INSPI(side, angle + inc, inc, iter);
    }
}

function SUBSPIRO(side, angle, max) {
    var count = 1;
    while (count <= max) {
        FORWARD(side * count);
        RIGHT(angle);
        count++;
    }

}

function SPIRO(side, angle, max) {
    REPEAT(100, SUBSPIRO, [side, angle, max, 0]);
}

function SUBGSPIRO(side, angle, max, list) {
    var count = 1;
    while (count <= max) {
        FORWARD(side * count);
        if (list.indexOf(count) > - 1) {
            LEFT(angle);
        } else {
            RIGHT(angle);
        }
        count++;
    }
}

function GSPIRO(side, angle, max, list) {
    REPEAT(100, SUBGSPIRO, [side, angle, max, list]);
}

function RAND(min, max) {
    return min + Math.random()*(max - min);
}
function RANDOM_MOVE(d1, d2, a1, a2, times) {
    //if times is not specified, use 1000
    REPEAT(times || 1000, function () {
        FORWARD(RAND(d1, d2));
        RIGHT(RAND(a1, a2));
    });
}

function XCOR() {
    //determining global co-ords of turtle
    //which is always at local 0,0
    var localX = 0, localY = 0;
    //we will check X points across the screen at the midpoint
    //between the top and bottom
    var y = CANVAS_HEIGHT/2;
    //initially set result X coord to be -1 in case it is not found
    var globalX = -1;
    //start a path for the 'cross-hair' vertical line
    //which we will draw at the X position of the turtle ( x = 0 )
    CTX.beginPath();
    //make it as high as the screen in both directions
    //to account for extremes of top and bottom
    CTX.moveTo(localX,-CANVAS_HEIGHT);
    CTX.lineTo(localX,CANVAS_HEIGHT);
    //check if each X pos on the midpoint horizontal line
    //is on the 'cross-hair' line 
   for(var x = 0; x < CANVAS_WIDTH; x++) {
         if(CTX.isPointInPath(x,y)) {
           console.log("XCOR = "+x);
           globalX = x;
           break;
         }
    }
    return globalX;
    //will return -1 if offscreen
}
function YCOR() {
    var localX = 0, localY = 0;
    var globalY = -1;
    //draw horizontal 'cross-hair' line at turtle Y position (0)
    CTX.beginPath();
    CTX.moveTo(-CANVAS_WIDTH, localY);
    CTX.lineTo(CANVAS_WIDTH, localY);
    var x = CANVAS_WIDTH/2;
    //check all Y positions (globally) along midline of screen
    for(var y = 0; y < CANVAS_HEIGHT; y++) {
         if(CTX.isPointInPath(x,y)) {
            //we collided with the horizontal cross-hair
            //this is the Y position of the turtle
            globalY = y;
            break;
         }
    }
    return globalY;
    //will return -1 if offscreen
}


