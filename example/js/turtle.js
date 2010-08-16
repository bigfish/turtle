
function Turtle(canvas, bg, fg, procedures) {

    //private vars
    var ctx;
    var PI = Math.PI;
    var DEG2RAD = PI / 180;
    var RAD2DEG = 180 / PI;
    var canvasWidth;
    var canvasHeight;
    var that = this;
    var BG = bg || "#000000";
    var FG = fg || "#00FF00";

    //private functions
    function init(canvas, bg, fg) {
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
        ctx.save();
        //move to center of canvas
        ctx.translate(canvasWidth / 2, this.canvasHeight / 2);
        //set default line style
        ctx.save();
        reset();
        //apply additional procedures to turtle
        if (procedures) {
            for (var p = 0; p < procedures.length; p++) {
                procedures[p](that);
            }   
        }
        ctx.fillStyle = BG;
        ctx.strokeStyle = "#FF0000";
        return that;
    }

    function reset() {
        //clear state
        ctx.restore();
        //save initial state for later restore
        ctx.save();
        //delete everything
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        ctx.fillRect(0,0,canvasWidth, canvasHeight);
        //move to center of canvas
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
    }

    function forward(len) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        //forwards = up : reverse the Y coordinate
        ctx.lineTo(0, - len);
        ctx.translate(0, - len);
        ctx.stroke();
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

    this.reset = reset;
    this.forward = forward;
    this.back = back;
    this.right = right;
    this.left = left;
    this.repeat = repeat;

    init(canvas, bg, fg);

    
}


