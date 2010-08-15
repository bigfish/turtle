//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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
//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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

};//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
    }
    //end wrapper functions
	
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
	

	t.SQUAREPIECE = SQUAREPIECE;
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