function myFunction() {
    var x = document.getElementById("frame");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 

$(document).ready(myFunction)

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
	      return; 
  }
  switch (event.key) {
    case "ArrowDown":eval(myFunction())
		  break;
	  default:
		  return;
  }
	event.preventDefault();
}, true);
