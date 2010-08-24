//TurtleExplorer
/*jslint evil: true*/
$ = function(id) { return document.getElementById(id); };
var feedback = $("feedback");
var buffer = $('turtle_buffer');
var examplesURL = "examples";
//run the buffer of code entered by the user
function RUN(event) {
  var buftext = buffer.value;
	feedback.innerText = "";
	try {
		eval(buftext);
	} catch(e) {
		feedback.innerText = e.message;
	}
}

INIT("canvas", "#000000", "#FFFF00");

function load_example(index) {
  var example = $("select_example").value;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
      if(this.responseText) {
        buffer.value = this.responseText;
      }
    } else if (this.readyState == 4 && this.status != 200) {
      feedback.innerText = "There was a probelem loading example '"+example+"'";
    }
  };
  xhr.open("GET", examplesURL + "/" + example + ".js");
  xhr.send();
}


