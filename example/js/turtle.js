function Turtle(canvas, bgcolor, fgcolor, procedures) {

    //private vars
    var ctx;
    var PI = Math.PI;
    var DEG2RAD = PI / 180;
    var RAD2DEG = 180 / PI;
    var canvasWidth;
    var canvasHeight;
    var that = this;
    var bg = bgcolor;
    var fg = fgcolor;
    var pen_down = true;

    //private functions
    function init(canvas) {
        //try to get element from id string
        if (typeof canvas === "string") {
            canvas = document.getElementById(canvas);
            if (!canvas) {
                window.alert("Could not find canvas element with id '" + canvas + "'");
                return;
            }
        }
        //attempt to initialize 2D context on given element or fail
        try {
            ctx = canvas.getContext("2d");
        } catch(e) {
            window.alert("Unable to initialize canvas 2D context. \n" + e.msg);
            return;
        }
        canvasWidth = canvas.width;
        canvasHeight = canvas.height;

        //save initial state
        //ctx.save();
        //move to center of canvas
        //ctx.translate(canvasWidth / 2, this.canvasHeight / 2);
        //set default line style
        //ctx.save();
        reset();
        //apply additional procedures to turtle
        if (procedures) {
            for (var p = 0; p < procedures.length; p++) {
                procedures[p](that);
            }
        }
        return that;
    }

    function reset() {
        //clear state
        //reset transform matrix to default
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        //ctx.restore();
        //save initial state for later restore
        //ctx.save();
        //set style
        pen_down = true;
        ctx.fillStyle = bg;
        ctx.strokeStyle = fg;
        //delete everything
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
    }

    function forward(len) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        //forwards = up : reverse the Y coordinate
        if (pen_down) {
            ctx.lineTo(0, - len);
            ctx.translate(0, - len);
            ctx.stroke();
        } else {
            ctx.moveTo(0, - len);
            ctx.translate(0, - len);

        }
    }

    function back(len) {
        forward( - len);
    }

    function right(angle) {
        ctx.rotate(angle * DEG2RAD);
    }

    function left(angle) {
        right( - angle);
    }

    function repeat(times, fn, args) {
        for (var i = 0; i < times; i++) {
            fn.apply(this, args || []);
        }
    }

    function penup() {
        pen_down = true;
    }

    function pendown() {
        pen_down = false;
    }

    this.reset = reset;
    this.forward = forward;
    this.back = back;
    this.right = right;
    this.left = left;
    this.repeat = repeat;
    this.penup = penup;
    this.pendown = pendown;

    init(canvas);

}

