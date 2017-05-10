
var canvas = document.getElementById('canvas');
//what
console.dir(canvas);
// console.dir(window);
var context = canvas.getContext('2d')
//set up the base options for the pictionary board.
//context = how
var color = "#000";
var thickness = 10;
var colorPicker = document.getElementById('color-picker');
var thicknessPicker = document.getElementById('thickness');
// console.dir(colorPicker);
var mouseDown = false;
var mousePosition = {}
var lastMousePosition = null;

colorPicker.addEventListener('change', function(event){
	console.dir(event.target)
	color = colorPicker.value
	// color=event.target.value
	//child can see parent, but parent cant see child, every one has a value property
	console.log(color);
});
//JS Loop its listening to the event of colorPicker/thicknessPicker
thicknessPicker.addEventListener('change', function(event){
	// console.log(event)
	thickness = thicknessPicker.value
	//child can see parent, but parent cant see child, every (input tag) has a value property(need to remember if your using forms)
});

canvas.addEventListener('mousedown', function(event){
	mouseDown = true;
});

canvas.addEventListener('mouseup', function(event){
	mouseDown = false;
	lastMousePosition = null;
});

canvas.addEventListener('mousemove', function(event){
	if(mouseDown){
		// console.log(event)
		//console.log("user has pressed the mouse down and is moving!!") event(holds all the stuff that JS know about what just happened) is the 'mousemove'
		// the user has either just shown up and we dont have a lastMousePosition OR the user let go of the mouse and we reset the lastMousePosition
		if(lastMousePosition ==  null){
			lastMousePosition = {
				x: event.pageX,
				y: event.pageY
			}
		}


		mousePosition.x = event.pageX;
		mousePosition.y = event.pageY;
		// event.pagex - ex of browser variable
		// console.log(mousePosition.x);

		context.strokeStyle = color;
		context.lineJoin = 'miter';
		context.lineWidth = thickness;
		context.beginPath();
		context.moveTo(lastMousePosition.x, lastMousePosition.y)
		context.lineTo(mousePosition.x, mousePosition.y);
		context.stroke();
		context.closePath();

		lastMousePosition = {
			x: mousePosition.x,
			y: mousePosition.y
		}
	}
});






