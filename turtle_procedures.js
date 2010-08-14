
//exposes the global function TEACH_TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TEACH_TURTLE_PROCEDURES = function (t) {
        
    function SQUAREPIECE (size) {
        t.forward(size);
        t.right(90);
    }

    function SQUARE (size) {
        t.repeat(4, SQUAREPIECE, [size]);
    }

    function RECTANGLE(side1, side2) {
        t.repeat(2, function () {
            SQUAREPIECE(side1);
            SQUAREPIECE(side2);
        });
    }

    function TRIANGLE(size) {
        t.repeat(3, function () {
            t.forward(size);
            t.right(120);
        });
    }

    function HOUSE(size) {
        SQUARE(size);
        t.forward(size);
        t.right(30);
        TRIANGLE(size);
    }

    function THING() {
        t.forward(100);
        t.right(90);
        t.forward(100);
        t.right(90);
        t.forward(50);
        t.right(90);
        t.forward(50);
        t.right(90);
        t.forward(100);
        t.right(90);
        t.forward(25);
        t.right(90);
        t.forward(25);
        t.right(90);
        t.forward(50);
    }

    function CIRCLE(size) {
        t.repeat(360, function () {
            t.forward(size);
            t.right(1);
        });
    }

    function ARCR(r, deg) {
        t.repeat(deg, function () {
            t.forward(r);
            t.right(1);
        });
    }

    function ARCL(r, deg) {
        t.repeat(deg, function () {
            t.forward(r);
            t.left(1);
        });
    }

    function PETAL(size) {
        ARCR(size, 60);
        t.right(120);
        ARCR(size, 60);
        t.right(120);
    }

    function FLOWER(size) {
        t.repeat(6, function () {
            PETAL(size);
            t.right(60);
        });
    }

    function RAY(r) {
        t.repeat(2, function () {
            ARCL(r, 90);
            ARCR(r, 90);
        });
    }

    function SUN(size) {
        t.repeat(9, function () {
            RAY(size);
            t.right(160);
        });
    }

    function POLY(side, angle) {
        t.repeat(360, function () {
            t.forward(side);
            t.right(angle);
        });
    }

    function NEWPOLY(side, angle) {
        t.repeat(100, function () {
            t.forward(side);
            t.right(angle);
            t.forward(side);
            t.right(2 * angle);
        });
    }

    function POLYSPI(side, angle, inc) {
        if (inc === undefined) {
            inc = 1;
        }
        t.forward(side);
        t.right(angle);
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

        t.forward(side);
        t.right(angle);

        if (iter < 500) {
            MULTISPI(side * factor, angle, factor, iter);
        }
    }

    function INSPI(side, angle, inc, iter) {
        iter = (iter === undefined) ? 1: iter;
        t.forward(side);
        t.right(angle);
        if (iter < 500) {
            INSPI(side, angle + inc, inc, iter);
        }
    }

    function SUBSPIRO(side, angle, max) {
        var count = 1;
        while (count <= max) {
            t.forward(side * count);
            t.right(angle);
            count++;
        }

    }

    function SPIRO(side, angle, max) {
        t.repeat(100, SUBSPIRO, [side, angle, max, 0]);
    }

    function SUBGSPIRO(side, angle, max, list) {
        var count = 1;
        while (count <= max) {
            t.forward(side * count);
            if (list.indexOf(count) > - 1) {
                t.left(angle);
            } else {
                t.right(angle);
            }
            count++;
        }
    }

    function GSPIRO(side, angle, max, list) {
        t.repeat(100, SUBGSPIRO, [side, angle, max, list]);
    }

    //public methods
    t.SQUARE = SQUARE;
    t.RECTANGLE = RECTANGLE;
    t.TRIANGLE = TRIANGLE;
    t.HOUSE = HOUSE;
    t.THING = THING;
    t.CIRCLE = CIRCLE;
    t.ARCR = ARCR;
    t.ARCL = ARCL;
    t.PETAL = PETAL;
    t.FLOWER = FLOWER;
    t.RAY = RAY;
    t.SUN = SUN;
    t.POLY = POLY;
    t.NEWPOLY = NEWPOLY;
    t.POLYSPI = POLYSPI;
    t.MULTISPI = MULTISPI;
    t.INSPI = INSPI;
    t.SUBSPIRO = SUBSPIRO;
    t.SPIRO = SPIRO;
    t.SUBGSPIRO = SUBGSPIRO;
    t.GSPIRO = GSPIRO;

};

