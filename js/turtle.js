
function Turtle(canvas, bgcolor, fgcolor, procedures) {

	var ANIMATION;
	var CTX;
	var CANVAS_WIDTH;
	var CANVAS_HEIGHT;
	var DEFAULT_BG;
	var DEFAULT_FG;
	var BG;
	var FG;
	var XCOR; 
	var YCOR; 
	var ROTATION; 
	var PEN_DOWN;
	var PI = Math.PI;
	var DEG2RAD = PI / 180;
	var RAD2DEG = 180 / PI;
	var FORWARD_FAILED;
	var FILL = "";
	var MODE = "immediate";
	var FOOD_X = 0;
	var FOOD_Y = 0;
	var DISTANCE_TO_FOOD;
	var DISTANCE_LAST_TIME;

	function RESET() {
	    //reset transform matrix to default
	    CTX.setTransform(1, 0, 0, 1, 0, 0);
	    //delete everything
	    CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	    //fill with background color
	    CTX.fillStyle = DEFAULT_BG;
	    CTX.strokeStyle = DEFAULT_FG;
	    CTX.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	    STOP_ANIM();
	    XCOR = CANVAS_WIDTH / 2;
	    YCOR = CANVAS_HEIGHT / 2;
	    ROTATION = 90;
	    PEN_DOWN = true;
	    MODE = "immediate";
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
	
	    BG = DEFAULT_BG = bg || "#000000";
	    FG = DEFAULT_FG = fg || "#00FF00";
	
	    CTX.save();
	    RESET();
	}
	
	function FORWARD(len) {
	    if(MODE == "immediate") {
	        CTX.beginPath();
	        CTX.moveTo(0,0);
	    }
	    //forwards = up : reverse the Y coordinate
	    if (PEN_DOWN) {
	        CTX.lineTo(0, - len);
	        CTX.translate(0, - len);
	        if (MODE == "immediate") {
	            CTX.stroke();
	        }
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
	    if(MODE == "delayed") {
	        CTX.beginPath();
	        CTX.moveTo(0, 0);
	    }
	}
	function PENUP() {
	    PEN_DOWN = false;
	}
	
	function OUT_OF_BOUNDS() {
	    if (XCOR < 0 || XCOR >= CANVAS_WIDTH) {
	        return true;
	    } else if (YCOR < 0 || YCOR >= CANVAS_HEIGHT) {
	        return true;
	    } else {
	        return false;
	    }
	}
	
	function MOVE_FORWARD(len) {
	    PENUP();
	    FORWARD(len);
	    PENDOWN();
	}
	
	function CHECK_FORWARD(len) {
	    PENUP();
	    FORWARD(len);
	    FORWARD_FAILED = OUT_OF_BOUNDS();
	    BACK(len);
	    if (!FORWARD_FAILED) {
	        PENDOWN();
	        FORWARD(len);
	    }
	    PENDOWN();
	}
	
	function STUCK() {
	    return FORWARD_FAILED;
	}
	
	function SET_BG(color) {
	    BG = color;
	}
	
	function SET_LINE(color) {
	    FG = color;
	    CTX.strokeStyle = FG;
	}
	
	function BEGIN_FILL(color) {
	    FILL = color;
	    CTX.fillStyle = FILL;
	    MODE = "delayed";
	    //end the previous path
	    //and start a new one
	    //since the whole path will be filled
	    PENDOWN();
	}
	
	function END_FILL() {
	    //execute delayed rendering
	    CTX.fill();
	    CTX.stroke();
	    //go back to immediate mode
	    MODE = "immediate";
	    FILL = "";
	}
	
	function CENTER_X() {
	    return CANVAS_WIDTH/2;
	}
	
	function CENTER_Y() {
	    return CANVAS_HEIGHT/2;
	}
	
	function GET_WIDTH() {
	    return CANVAS_WIDTH;
	}
	
	function GET_HEIGHT() {
	    return CANVAS_HEIGHT;
	}
	
	function SET_FOOD(x, y) {
	    FOOD_X = x;
	    FOOD_Y = y;
	}
	
	function DIST(x1, y1, x2, y2) {
	
	    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	}
	
	function SMELL() {
	
	    var result;
	
	    DISTANCE_TO_FOOD = DIST(FOOD_X, FOOD_Y, XCOR, YCOR);
	
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
	
	function DRAW_TURTLE(width, height, color) {
	    var angle, hypotenuse;
	    CTX.save();
	    SET_LINE(color);
	    //consider turtle as 2 RA triangles back to back
	    PENUP();
	    FORWARD(height);
	    PENDOWN();
	    angle = Math.atan2(height, width/2);
	    angle = angle*180/Math.PI;//convert to degrees
	    //console.log("angle = " + angle);
	    hypotenuse = Math.sqrt(Math.pow(width/2, 2) + Math.pow(height,2));
	    //console.log("hypotenuse = " + hypotenuse);
	    RIGHT(90 + angle);
	    FORWARD(hypotenuse);
	    RIGHT(180-angle);
	    FORWARD(width);
	    RIGHT(180-angle);
	    FORWARD(hypotenuse);
	    CTX.restore();
	}

	//public methods 
	this.RESET = RESET;
	this.INIT = INIT;
	this.FORWARD = FORWARD;
	this.BACK = BACK;
	this.RIGHT = RIGHT;
	this.LEFT = LEFT;
	this.REPEAT = REPEAT;
	this.BEARING = BEARING;
	this.PENDOWN = PENDOWN;
	this.PENUP = PENUP;
	this.OUT_OF_BOUNDS = OUT_OF_BOUNDS;
	this.MOVE_FORWARD = MOVE_FORWARD;
	this.CHECK_FORWARD = CHECK_FORWARD;
	this.STUCK = STUCK;
	this.SET_BG = SET_BG;
	this.SET_LINE = SET_LINE;
	this.BEGIN_FILL = BEGIN_FILL;
	this.END_FILL = END_FILL;
	this.CENTER_X = CENTER_X;
	this.CENTER_Y = CENTER_Y;
	this.GET_WIDTH = GET_WIDTH;
	this.GET_HEIGHT = GET_HEIGHT;
	this.SET_FOOD = SET_FOOD;
	this.DIST = DIST;
	this.SMELL = SMELL;
	this.STOP_ANIM = STOP_ANIM;
	this.ANIMATE = ANIMATE;
	this.DRAW_TURTLE = DRAW_TURTLE;

	INIT(canvas, bgcolor, fgcolor);

	var that = this;
	//apply additional procedures to turtle
	if (procedures) {
		for (var p = 0; p < procedures.length; p++) {
			procedures[p](that);
		}
	}
	return that;
}
