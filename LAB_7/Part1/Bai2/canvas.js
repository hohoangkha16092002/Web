var myCanvas = document.getElementById("canvas");
myCanvas.width = myCanvas.clientWidth;
myCanvas.height = myCanvas.width * 9 / 16;


var myContext = myCanvas.getContext("2d");

// Draw Line
myContext.beginPath();
myContext.moveTo(5,5);
myContext.lineTo (myCanvas.width-5, myCanvas.height-5);
myContext.stroke();

//Draw rectangle
myContext.fillStyle = '#26a1dd';
myContext.fillRect (10,10,100,80);

//Draw triangle
var width = 300;
var height = 200;
var padding = 20;
myContext.beginPath();
myContext.moveTo (padding + width/2, padding);
myContext.lineTo (padding + width, height + padding);
myContext.lineTo (padding, height + padding);
myContext.closePath();
myContext.fillStyle = '#ffc821';
myContext.fill();

// Draw Circle
myContext.beginPath();
myContext.arc(60, 60, 50, 0 *2*Math.PI, 1 * 2*Math.PI);
myContext.fillStyle = '#a0d468';
myContext.fill();
var padding = 100;

//Draw square
myContext.fillStyle = '#48cfad';
myContext.fillRect (50,50,50,50);