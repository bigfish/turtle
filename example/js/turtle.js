
function Turtle(canvas, bgcolor, fgcolor, procedures) {

	var ANIMATION;
	var CTX;
	var CANVAS;
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
	var OVERLAY;
	var OVERLAY_CTX;
	var TURTLE_IMG;
	var TURTLE_IMG_SRC = "images/turtle.png";
	var TURTLE_WIDTH;
	var TURTLE_HEIGHT;
	var TURTLE_LOADED = false;
	var TURTLE_VISIBLE = true;

	function RESET_CANVAS(ctx) {
	    //reset transform matrix to default
	    ctx.setTransform(1, 0, 0, 1, 0, 0);
	    //delete everything
	    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}
	
	function RESET() {
	    RESET_CANVAS(CTX);
	    CTX.fillStyle = DEFAULT_BG;
	    CTX.strokeStyle = DEFAULT_FG;
	    //fill with background color
	    CTX.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	    STOP_ANIM();
	    XCOR = CANVAS_WIDTH / 2;
	    YCOR = CANVAS_HEIGHT / 2;
	    ROTATION = 0;
	    PEN_DOWN = true;
	    MODE = "immediate";
	    TURTLE_VISIBLE = true;
	    //move to center of canvas
	    CTX.translate(XCOR, YCOR);
	    RESET_CANVAS(OVERLAY_CTX);
	    DRAW_TURTLE();
	}
	
	function GET_CANVAS_POS() {
	    var obj = CANVAS;
	    var curleft = 0,
	    curtop = 0;
	    if (obj.offsetParent) {
	        do {
	            curleft += obj.offsetLeft;
	            curtop += obj.offsetTop;
	        } while (obj = obj.offsetParent);
	    }
	    return [curleft, curtop];
	}
	
	function INIT(canvas, bg, fg) {
	
	    if (typeof canvas === "string") {
	        CANVAS = document.getElementById(canvas);
	    }
	    if (CANVAS.getContext) {
	        CTX = CANVAS.getContext("2d");
	    } else {
	        return;
	    }
	
	    CANVAS_WIDTH = CANVAS.width;
	    CANVAS_HEIGHT = CANVAS.height;
	    //find position of CANVAS element
	    var canvas_pos = GET_CANVAS_POS();
	    //create overlay
	    OVERLAY = CANVAS.cloneNode(false);
	    OVERLAY.setAttribute("id", "overlay");
	    OVERLAY.style.zIndex = "100";
	    OVERLAY.style.position = "absolute";
	    OVERLAY.style.left = canvas_pos[0] + "px";
	    OVERLAY.style.top = canvas_pos[1] + "px";
	    CANVAS.parentNode.insertBefore(OVERLAY, CANVAS);
	    OVERLAY_CTX = OVERLAY.getContext("2d");
	
	    LOAD_TURTLE(TURTLE_IMG_SRC);
	
	    BG = DEFAULT_BG = bg || "#000000";
	    FG = DEFAULT_FG = fg || "#00FF00";
	
	    CTX.save();
	    RESET();
	
	}
	
	function LOAD_TURTLE(src) {
	    TURTLE_IMG = new Image();
	    TURTLE_IMG.onload = function () {
	        TURTLE_WIDTH = TURTLE_IMG.width;
	        TURTLE_HEIGHT = TURTLE_IMG.height;
	        TURTLE_LOADED = true;
	        DRAW_TURTLE();
	    };
	    TURTLE_IMG.src = src;
	}
	
	function FORWARD(len) {
	    if (MODE == "immediate") {
	        CTX.beginPath();
	        CTX.moveTo(0, 0);
	    }
	    //forwards = up : reverse the Y coordinate
	    if (PEN_DOWN) {
	        CTX.lineTo(0, - len);
	        CTX.translate(0, - len);
	        if (MODE == "immediate") {
	            CTX.stroke();
	        }
	    } else {
	        CTX.moveTo(0, - len);
	        CTX.translate(0, - len);
	    }
	
	    //update XCOR & YCOR 
	    XCOR += len * Math.cos(BEARING() * Math.PI / 180);
	    YCOR += len * Math.sin(BEARING() * Math.PI / 180);
	    if (TURTLE_VISIBLE) {
	        DRAW_TURTLE();
	    }
	}
	
	function BACK(len) {
	    FORWARD( - len);
	}
	
	function RIGHT(angle) {
	    ROTATION -= angle;
	    ROTATION %= 360;
	    CTX.rotate(angle * Math.PI / 180);
	    if(TURTLE_VISIBLE){
	        DRAW_TURTLE();
	    }
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
	    if (MODE == "delayed") {
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
	    return CANVAS_WIDTH / 2;
	}
	
	function CENTER_Y() {
	    return CANVAS_HEIGHT / 2;
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
	
	    if (DISTANCE_LAST_TIME === undefined) {
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
	    if (ANIMATION) {
	        clearInterval(ANIMATION);
	    }
	}
	function ANIMATE(fn, max) {
	    function timer(time) {
	        time = time || 1;
	        fn.call();
	        if (max && time < max) {
	            setTimeout(function () {
	                timer(++time);
	            },
	            25);
	        } else {
	            ANIMATION = setInterval(fn, 25);
	        }
	    }
	    timer(1);
	}
	function RESET_OVERLAY() {
	    OVERLAY_CTX.save();
	    OVERLAY_CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	    OVERLAY_CTX.setTransform(1, 0, 0, 1, 0, 0);
	}
	function DRAW_TURTLE() {
	    RESET_OVERLAY();
	    if (TURTLE_LOADED) {
	        OVERLAY_CTX.translate(XCOR, CANVAS_HEIGHT - YCOR);
	        OVERLAY_CTX.rotate( - ROTATION * Math.PI / 180);
	        OVERLAY_CTX.drawImage(TURTLE_IMG, - TURTLE_WIDTH / 2, - TURTLE_HEIGHT / 2, TURTLE_WIDTH, TURTLE_HEIGHT);
	    }
	    OVERLAY_CTX.restore();
	}
	
	function HIDE_TURTLE() {
	    RESET_OVERLAY();
	    TURTLE_VISIBLE = false;
	}
	
	function SHOW_TURTLE() {
	    TURTLE_VISIBLE = true;
	    DRAW_TURTLE();
	}
	

	//public methods 
	this.RESET_CANVAS = RESET_CANVAS;
	this.RESET = RESET;
	this.GET_CANVAS_POS = GET_CANVAS_POS;
	this.INIT = INIT;
	this.LOAD_TURTLE = LOAD_TURTLE;
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
	this.RESET_OVERLAY = RESET_OVERLAY;
	this.DRAW_TURTLE = DRAW_TURTLE;
	this.HIDE_TURTLE = HIDE_TURTLE;
	this.SHOW_TURTLE = SHOW_TURTLE;

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
