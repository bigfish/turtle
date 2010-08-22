//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions

	function RESET() {
		return t.RESET();
	}

	function INIT(canvas, bg, fg) {
		return t.INIT(canvas, bg, fg);
	}

	function FORWARD(len) {
		return t.FORWARD(len);
	}

	function BACK(len) {
		return t.BACK(len);
	}

	function RIGHT(angle) {
		return t.RIGHT(angle);
	}

	function LEFT(angle) {
		return t.LEFT(angle);
	}

	function REPEAT(times, fn, args) {
		return t.REPEAT(times, fn, args);
	}

	function BEARING() {
		return t.BEARING();
	}

	function PENDOWN() {
		return t.PENDOWN();
	}

	function PENUP() {
		return t.PENUP();
	}

	function OUT_OF_BOUNDS() {
		return t.OUT_OF_BOUNDS();
	}

	function MOVE_FORWARD(len) {
		return t.MOVE_FORWARD(len);
	}

	function CHECK_FORWARD(len) {
		return t.CHECK_FORWARD(len);
	}

	function STUCK() {
		return t.STUCK();
	}

	function SET_BG(color) {
		return t.SET_BG(color);
	}

	function SET_LINE(color) {
		return t.SET_LINE(color);
	}

	function BEGIN_FILL(color) {
		return t.BEGIN_FILL(color);
	}

	function END_FILL() {
		return t.END_FILL();
	}

	function CENTER_X() {
		return t.CENTER_X();
	}

	function CENTER_Y() {
		return t.CENTER_Y();
	}

   //end wrapper functions
	
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
	    return min + Math.random() * (max - min);
	}
	
	function RANDOM_MOVE(d1, d2, a1, a2, times) {
	    //if times is not specified, use 1000
	    REPEAT(times || 1000, function () {
	        FORWARD(RAND(d1, d2));
	        RIGHT(RAND(a1, a2));
	    });
	}
	
	function RANDOM_MOVE_IN_BOX(d1, d2, a1, a2, times) {
	    //if times is not specified, use 1000
	    REPEAT(times || 1000, function () {
	        RIGHT(RAND(a1, a2));
	        CHECK_FORWARD(RAND(d1, d2));
	        if (STUCK()) {
	            RIGHT(180);
	        }
	    });
	}
	
	function RANDOM_COLOR() {
	    var hex = "0123456789ABCDEF";
	    var rgb = "";
	    for (var i = 0; i < 6; i++) {
	        rgb += hex.charAt(Math.round(Math.random()*15));
	    }
	    return "#" + rgb;
	}
	
	var FOOD_X = 0;
	var FOOD_Y = 0;
	
	function SET_FOOD(x, y) {
	    FOOD_X = x;
	    FOOD_Y = y;
	}
	var DISTANCE_LAST_TIME;
	
	function DIST(x1, y1, x2, y2) {
	
	    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	}
	
	function SMELL() {
	
	    var result;
	    var DISTANCE_TO_FOOD = DIST(FOOD_X, FOOD_Y, XCOR, YCOR);
	
	    if (DISTANCE_LAST_TIME === undefined){
	        DISTANCE_LAST_TIME = DISTANCE_TO_FOOD;
	    }
	    
	    if (DISTANCE_TO_FOOD > DISTANCE_LAST_TIME) {
	        result = "weaker";
	    } else {
	        result = "stronger";
	    }
	
	    DISTANCE_LAST_TIME = DISTANCE_TO_FOOD;
	    return result;
	}
	
	var ANIMATION;
	function STOP_ANIM() {
	    if(ANIMATION){
	        clearInterval(ANIMATION);
	    }
	}
	function ANIMATE(fn, max) {
	    function timer(time) {
	        time = time || 1;
	        fn.call();
	        if( max && time < max){
	            setTimeout(function () {
	                timer(++time);
	            }, 25);
	        } else {
	           ANIMATION = setInterval(fn, 25);
	        }
	    }
	    timer(1);
	}
	
	function FIND_BY_SMELL1() {
	    ANIMATE(function () {
	        FORWARD(1);
	        if(SMELL() == "weaker"){
	            RIGHT(1);
	        }
	    });
	}
	function FIND_BY_SMELL2(TURN) {
	    ANIMATE(function () {
	        FORWARD(1);
	        if(SMELL() == "weaker"){
	            RIGHT(TURN);
	        }
	    });
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
	t.RAND = RAND;
	t.RANDOM_MOVE = RANDOM_MOVE;
	t.RANDOM_MOVE_IN_BOX = RANDOM_MOVE_IN_BOX;
	t.RANDOM_COLOR = RANDOM_COLOR;
	t.SET_FOOD = SET_FOOD;
	t.DIST = DIST;
	t.SMELL = SMELL;
	t.STOP_ANIM = STOP_ANIM;
	t.ANIMATE = ANIMATE;
	t.timer = timer;
	t.FIND_BY_SMELL1 = FIND_BY_SMELL1;
	t.FIND_BY_SMELL2 = FIND_BY_SMELL2;

};