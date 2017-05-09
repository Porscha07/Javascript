// console.log("test JS");

var canvas = document.getElementById("canvas");
//where were going to draw
var context = canvas.getContext('2d');
// how were going to draw
context.moveTo(100,100);
//pick up pen( moves your hand)
context.lineTo(200,200);
//will draw the line from moveTo to the coordinates(x,y) not on the screen
context.lineTo(300,100)
context.lineTo(100,200)
context.lineTo(300,150)
context.lineTo(100,200)
context.lineTo(100,100)
context.strokeStyle = "#FF0000";
//context.stroke();
//fill in the line and puts it on the screen

//Draw a circle!
context.beginPath()
context.fillStyle = "#FFFF00";
context.arc(200,200,50,0,2 *Math.PI)
//center x, center y, radius(wide), starting angle(3pm),ending angle,counterclockwise or not)
// context.fill();
// context.stroke();


var x = 200;
var y = 200;
var radius = 50;
var xDirection =1;
var yDirection=1;
var red = 0;
var blue = 0;
var green = 0;
function drawBall(){
	//Fill Style = red
	context.fillStyle = "#" + red + blue + green;
	context.beginPath();
	context.arc(x,y,radius,0,2 * Math.PI);
	context.clearRect(0,0,500,500);
	context.fill();
	if((x > 500-radius) || (x < radius)){
		//we have reached the right side. Reverse!
		xDirection = -xDirection;
	}
	if((y > 500 -radius) || ( y < radius)){
		yDirection = -yDirection;
	}
	var randomX = Math.random() * 4
	var randomY = Math.random() * 4
	x += 4 * xDirection;
	y += 1 * yDirection;
	red += 5;
	blue+= 1;
	green +=1;

}

var ball = setInterval(drawBall,20);
document.addEventListener("click", function(event){
	console.log(event.x, exent.y)
}