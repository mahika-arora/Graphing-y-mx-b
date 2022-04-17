var canvas = document.querySelector('canvas');
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;
var c= canvas.getContext('2d');

function drawGrid(){
//Add a grid of lines to the canvas for background with an interval of 25 pixels and a width of 1
  for(var i=0;i<canvas.width;i+=25){
    c.beginPath();
    c.moveTo(i,0);
    c.lineTo(i,canvas.height);
    c.strokeStyle='#ccc';
    c.stroke();
}
   for(var i=0;i<canvas.height;i+=25){
    c.beginPath();
    c.moveTo(0,i);
    c.lineTo(canvas.width, i);
    c.strokeStyle = '#ccc';
    c.stroke();
}
    c.beginPath();
    c.moveTo(canvas.width/2,0);
    c.lineTo(canvas.width/2,canvas.height);
    c.strokeStyle='#000';
    c.stroke();
    c.beginPath();
    c.moveTo(0,canvas.height/2);
    c.lineTo(canvas.width,canvas.height/2);
    c.strokeStyle='#000';
    c.stroke();
}
drawGrid();

var m=5;
var b=canvas.height/2;
console.log(b);
var color="#000";
function graphLine(color,m,b){
    c.beginPath();
    for(var x=0;x<canvas.width;x++){
        c.lineTo(x+(canvas.width/2),((-1*m*x)+b));
        c.strokeStyle=color;
        c.stroke();
    }
}
graphLine('#000',m,b);

function changeColor(){
  var newColor=prompt('Enter your desired color');
  color=newColor;
  c.clearRect(0,0,canvas.width,canvas.height);
  drawGrid();
  graphLine(color,m,b);
}
function changeM(){
    var newSlope=prompt('Enter a numerical value for the slope');
    m=newSlope;
    c.clearRect(0,0,canvas.width,canvas.height);
    drawGrid();
    graphLine(color,m,b);
}
function changeB(){
    var newB=prompt('Enter a numerical value for the y-intercept');
    b=newB;
    c.clearRect(0,0,canvas.width,canvas.height);
    drawGrid()
    graphLine(color,m,b);
}
